from fastapi import FastAPI, HTTPException, Query
from typing import List
import time

class UserInQueue:
    user_id: str
    arrival_time: float
    estimated_usage_time: float
    assigned_machine: int = None  # Track allocated machine

queue: List[UserInQueue] = []
machines: List[bool] = [False] * 10  # Example with 10 machines

app = FastAPI()



# ... (previous code)

@app.post("/enqueue")
async def enqueue_user(user_id: str = Query(..., description="User ID"), estimated_usage_time: int = Query(..., description="Estimated Usage Time")):
    global queue, machines

    # Check for available machines
    available_machine_index = next((i for i, is_occupied in enumerate(machines) if not is_occupied), None)
    if available_machine_index is not None:
        machines[available_machine_index] = True
        queue.append(UserInQueue(user_id=user_id, arrival_time=time.time(), estimated_usage_time=estimated_usage_time, assigned_machine=available_machine_index))
        return {"message": f"User {user_id} allocated machine {available_machine_index + 1}"}

    # Calculate waiting time based on previous user's estimate
    if queue:
        waiting_time = queue[0].estimated_usage_time + 300  # 5 minutes buffer
    else:
        waiting_time = 0

    # Add user to queue with waiting time
    queue.append(UserInQueue(user_id=user_id, arrival_time=time.time(), estimated_usage_time=estimated_usage_time))

    if len(queue) == 2:
        return {"message": f"User {user_id} added to queue with estimated waiting time: {waiting_time} seconds"}
    else:
        return {"message": f"User {user_id} added to queue. Please wait for your turn."}


@app.post("/release_machine")
async def release_machine(user_id: str = Query(..., title="User ID")):
    global queue, machines

    # Find and remove user from queue
    user_index = next((i for i, user in enumerate(queue) if user.user_id == user_id), None)
    if user_index is not None:
        machines[queue[user_index].assigned_machine] = False  # Release machine
        del queue[user_index]
        return {"message": f"Machine released by User {user_id}"}
    else:
        raise HTTPException(status_code=404, detail="User not found in queue")

@app.post("/status")
async def get_status(user_id: str = Query(..., title="User ID")):
    global queue, machines

    # Find user in queue
    user = next((user for user in queue if user.user_id == user_id), None)
    if user is not None:
        if user.assigned_machine is not None:
            return {"status": f"User {user_id} is using Machine {user.assigned_machine + 1}"}
        else:
            if len(queue) == 1:  # User is first in queue
                waiting_time = 0
            else:
                waiting_time = queue[0].estimated_usage_time + 300  # 5 minutes buffer
            return {"status": f"User {user_id} is in queue with estimated waiting time: {waiting_time} seconds"}
    else:
        raise HTTPException(status_code=404, detail=f"User {user_id} is not in queue")

if __name__ == "__main__":
    import uvicorn

    uvicorn.run(app, host="127.0.0.1", port=8080)