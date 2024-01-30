// App.tsx
import React from 'react';
import { View, Text, Button, Linking, StyleSheet, StatusBar } from 'react-native';
import LotsOfStyles from './components/FirstPage';

export const OpenWeb = () => {
  const serverUrl = 'http://192.168.29.212:8000';
  Linking.openURL(`${serverUrl}/login/google`); }

 const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#334d69" />
      <LotsOfStyles openWeb={OpenWeb} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(10, 39, 69)',
  },
});

export default App;
// import React from 'react';
// import { View } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';

// const SimpleExample = () => {
//   return (
//     <View>
//       <Icon name="google" size={300} color="green" />
//     </View>
//   );
// };

// export default SimpleExample;
