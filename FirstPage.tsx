//FirstPage.tsx
import React from 'react';
import {StyleSheet, Text, View, Button, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import demo from '../../assets/demo.png';

// import { OpenWeb } from './App'; // Adjust the path accordingly

interface LotsOfStylesProps {
  openWeb: () => void;
} 
// const myImage = require('D:\newReact\ls.png');

const LotsOfStyles: React.FC<LotsOfStylesProps> = ({ openWeb }) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={demo} style={{ width: 400,justifyContent: 'center', height: 550 , marginTop: 0}} />
      </View>
     <View style={styles.ellipse} />
  
     <View style={styles.textContainer}>
      <View style={{ flexDirection: 'row', alignItems: 'center',  }}>
        <Icon name="google" size={30} color="white" />
        <Button title="Sign in with Google" onPress={openWeb} />
        
      </View>
      </View>
      {/* LaundrySync text placement */}
      {/* LaundrySync and sentence at the bottom */}
      <View style={styles.bottomContainer}>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ fontWeight: 'bold', fontSize: 28, color: 'rgb(10, 39, 69)', marginRight: 0 }}>WELCOME!!</Text>
          {/* <Text style={{ fontWeight: 'bold', fontSize: 28, color: '#75177a' }}>Sync</Text> */}
        </View>
        <Text style={{ fontWeight: 'bold', fontSize: 11, color: 'black', textAlign: 'center', marginTop: 20 }}>
        Smartly Scheduled, Perfectly Managed!!
        </Text>
      </View>
    
  </View>
  
 );
};  

const styles = StyleSheet.create({
  container: {
    flex: 1,  
    backgroundColor: '#e6ecfa', 
    padding: 80, 
    justifyContent: 'center', 
    alignItems: 'center',
    position: 'relative',
  
  },
  image: {
    width: 200,
    height: 200,
  },
  textContainer: {
    position: 'absolute',
    top: 400,
    backgroundColor: '#334d69',
    padding:10,
    // alignItems: 'center',
    // justifyContent: 'center', 
    zIndex: 2, 
  }, 
  text: {
     
    padding: 12, 
    borderRadius: 2, 
    borderWidth: 3, 
    borderColor: 'white', 
    color: 'white',
    fontWeight: 'bold',    

  },
  icon:
  {
  marginLeft: 0,
  marginBottom:10,
  marginTop:0,
  },
  ellipse: {
    borderRadius: 764,
    marginTop:500,
    width: 728, 
    height: 784, 
    backgroundColor: '#b7d6f7', 
    zIndex: 1,
  },
  logoContainer: {
    position: 'absolute',
    top: 0, // Adjust for desired top margin
    left: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
     // Center the logo horizontally
  },

  title: {
    fontSize: 8,
    fontWeight: 'bold',
    // marginTop: 200,
    // color: 'green', 
    zIndex: 3,
    // alignItems: 'center',
    // justifyContent: 'center', 

  },

  bottomContainer: {
    position: 'absolute',
    bottom: 40, // Position at the bottom with a margin
    left: 0,
    right: 0,
    alignItems: 'center', 
    zIndex: 4, // Center the LaundrySync and sentence
  },
  // yellowText: {
  //   color: '#FFEB3B', 
    
  // },
  // purpleText: {
  //   color: '#75177a', 
  // },
});


export default LotsOfStyles;