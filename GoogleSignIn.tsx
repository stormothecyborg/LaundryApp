// import React from 'react';
// import { View, Text, Button, Linking, StyleSheet, StatusBar } from 'react-native';

// const OpenWeb = () => {
//   const serverUrl = 'http://192.168.29.212:8000';
//   Linking.openURL(`${serverUrl}/login/google`); }


// const App = () => {
//   return (
//     <>
//       <StatusBar backgroundColor="transparent" translucent barStyle="dark-content" />
//       <View style={styles.container}>
//         {/* <Text>{JSON.stringify(userInfo, null, 2)}</Text> */}
//         <Text style={styles.title}>
//           <Text style={[styles.text, styles.purpleText]}>Laundry</Text>
//           <Text style={[styles.text, styles.yellowText]}>Sync</Text>
//         </Text>
//         <Button title="Sign in with Google" onPress={OpenWeb} />
//       </View>
//     </>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#fff',
//     marginTop: StatusBar.currentHeight || 0, // Use StatusBar.currentHeight to get the status bar height
//   },
//   title: {
//     fontSize: 28,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   text: {
//     fontSize: 28,
//     fontWeight: 'bold',
//   },
//   yellowText: {
//     color: '#FFEB3B', // Yellow color
//   },
//   purpleText: {
//     color: '#9C27B0', // Purple color
//   },
// });

// export default App;
