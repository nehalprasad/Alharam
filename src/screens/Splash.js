import { View, Text,Image,StyleSheet} from 'react-native'
import React, { useEffect } from 'react';


const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(()=>{
    navigation.navigate('Signin')
       //navigation.navigate('MainScreen')
        //navigation.navigate('OTPVerification') 
    },3000)

}, [])
  return (
    <View style={styles.container}>
      
      <Image
          source={require('../assets/Logo.png')} // Replace with your splash image path
          style={styles.image}
          resizeMode="contain"
        />
    </View>
  )
}

export default Splash
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff', // Customize as needed
    },
    image: {
      width: 300,  // Set the width of the image as needed
      height: 200, // Set the height of the image as needed
      
    },
  });