import {  View, Text, Image, StyleSheet, TouchableOpacity,TextInput,Button } from 'react-native'
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
const Signin = () => {

  const navigation = useNavigation();


    const [firstname, setFirstname] = useState('');
const [lastname, setLastname] = useState('');
const [email, setEmail] = useState('');
const [mobile, setMobile] = useState('');
const [password, setPassword] = useState('');
const [confirmpassword,setConfirmpassword]=useState('');
    // const handleSignUp = () => {
    //     // Prepare the data to be sent to the API
    //     const userData = {
    //       firstname,
    //       lastname,
    //       email,
    //       password,
    //     };
      
    //     // Send a POST request to your API endpoint
    //     fetch('https://alharamstores.com/rest/V1/api/mobileOtpRegistrationMethod', {
    //       method: 'POST',
    //       headers: {
    //         'Content-Type': 'application/json',
    //       },
    //       body: JSON.stringify(userData),
    //     })
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log('Signup successful:',data);
    //       // Handle the response from the API (success or error)
    //       // For example, you could display a success message or show an error
    //     })
    //     .catch(error => {
    //         console.error('Signup error:', error);
    //       // Handle any errors that occur during the API call
    //     });
    //   };
    const handleSignUp = async () => {
      // Prepare your data for the API request
      const userData = {
        firstname,
        lastname,
        email,
        mobile,
        password,
        confirmpassword,
      };
  
      try {
        const response = await fetch('https://beta.alharamstores.com/rest/V1/api/mobileOtpRegistrationMethod', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(userData),
        });
  
        if (response.ok) {
          // API call was successful
          const responseData = await response.json();
          console.log('Sign up successful:', responseData);
          // Handle any further actions or UI updates
        } else {
          // API call failed
          console.error('Sign up failed');
          navigation.navigate('Home');
          // Handle error and display appropriate messages
        }
      } catch (error) {
        console.error('Error during sign up:', error);
        // Handle error and display appropriate messages
      }
    };  
  return (
    <View style={styles.container}>

    <View style={styles.headerred}>
        <View style={styles.logocontainer}>
        <Image
          source={require('../../assets/Logo.png')} // Replace with your splash image path
          style={styles.logo}
          resizeMode="contain"
        />
          


   
    
        </View>
 
        
</View>

   
    </View>
  )
}

export default Signin;
const styles = StyleSheet.create({
    container:{
    backgroundColor:"white"
    },
    buttonContainer: {
    top:20,
      borderRadius: 20, // Set the border radius to 20
      overflow: 'hidden', 
    },
    header: {
      height:'100%',
      //justifyContent: 'center',
      //alignItems: 'center',
    },
    headerred:{
    height:170,
    backgroundColor:"#8b0000"
    },
    logocontainer:{
        borderColor: '#d3d3d3', // Set your desired border color
        borderWidth: 2,
    backgroundColor:"#fff",
    borderRadius: 40,
    width:"75%",
    alignSelf:"center",
    marginVertical:70,
    height:"100%"
    },
    logo:{
        
        alignItems:"center",
        width: 230,  // Set the width of the image as needed
        height: 160, 
        marginHorizontal:15
    },
    container1: {
      flexDirection: 'row',
      alignItems: 'center',
      borderColor: '#ccc',
      borderWidth: 1,
      borderRadius: 5,
      paddingHorizontal: 10,
    },
    icon: {
      marginRight: 10,
    },
    input: {
    width: '80%',
    marginBottom: 15,
    padding: 10,
    borderBottomWidth: 1,
  },
    headerContent: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      padding: 20,
      borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:500
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      color: 'white',
      marginBottom: 20,
    },
    loginButtons: {
      flexDirection: 'row',
      justifyContent: 'center',
    },
    loginButton: {
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
      marginHorizontal: 10,
    },
    googleButton: {
      backgroundColor: 'red', // You can set your desired color
    },
    facebookButton: {
      backgroundColor: '#1877F2', // Facebook blue color
    },
    buttonText: {
      color: 'white',
      fontWeight: 'bold',
    },
  });
