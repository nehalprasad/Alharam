// // import React, { useState } from 'react';
// // import { View, Text, TextInput, Button } from 'react-native';
// // import axios from 'axios';

// // const Login = () => {
// //   const [email, setEmail] = useState('');
// //   const [password, setPassword] = useState('');

// // const handleLogin = () => {
// //     // Validate user input
// //     if (!email || !password) {
// //       console.log("Email and password are required.");
// //       return;
// //     }

// //     // Define the data you want to send to the API
// //     const requestData = {
// //       username: email,
// //       password: password,
// //       store_id: '1',
// //     };

// //     // Make the API request using axios.post
// //     axios
// //       .post('https://alharamstores.com/rest/V1/api/loginUser', requestData)
// //       .then((response) => {
// //         // Handle the API response here
// //         console.log("API Response:", response.data);
// //         if (response.data.status === 0) {
// //           console.log("API Message:", response.data.message);
// //           // You may want to display this message to the user.
// //         } else {
// //           // Handle successful login here, e.g., navigate to another screen.
// //         }
// //       })
// //       .catch((error) => {
// //         // Handle any errors that occur during the API request
// //         console.error("API Error:", error);
// //         // You may want to display an error message to the user.
// //       });
// //   };

// //   return (
// //     <View>
// //       <Text></Text>
// //       <TextInput
// //         placeholder="Email"
// //         value={email}
// //         onChangeText={(text) => setEmail(text)}
// placeholderTextColor={'black'}// //
// />
// //       <TextInput
// //         placeholder="Password"
// //         secureTextEntry={true}
// //         value={password}
// //         onChangeText={(text) => setPassword(text)}
// placeholderTextColor={'black'}// //
// />
// //       <Button title="Loginsss" onPress={handleLogin} />
// //     </View>
// //   );
// // };

// // export default Login;
// // // import {  View, Text, Image, StyleSheet, TouchableOpacity,TextInput,Button } from 'react-native'
// // // import React, { useState } from 'react';
// // // import { useNavigation } from '@react-navigation/native';
// // // import Icon from 'react-native-vector-icons/FontAwesome';
// // // import MaterialTop from './Navigation/MaterialTop';
// // // const Signin = () => {

// // //   const navigation = useNavigation();

// // //     const [firstname, setFirstname] = useState('');
// // // const [lastname, setLastname] = useState('');
// // // const [email, setEmail] = useState('');
// // // const [mobile, setMobile] = useState('');
// // // const [password, setPassword] = useState('');
// // // const [confirmpassword,setConfirmpassword]=useState('');
// // //     // const handleSignUp = () => {
// // //     //     // Prepare the data to be sent to the API
// // //     //     const userData = {
// // //     //       firstname,
// // //     //       lastname,
// // //     //       email,
// // //     //       password,
// // //     //     };

// // //     //     // Send a POST request to your API endpoint
// // //     //     fetch('https://alharamstores.com/rest/V1/api/mobileOtpRegistrationMethod', {
// // //     //       method: 'POST',
// // //     //       headers: {
// // //     //         'Content-Type': 'application/json',
// // //     //       },
// // //     //       body: JSON.stringify(userData),
// // //     //     })
// // //     //     .then(response => response.json())
// // //     //     .then(data => {
// // //     //         console.log('Signup successful:',data);
// // //     //       // Handle the response from the API (success or error)
// // //     //       // For example, you could display a success message or show an error
// // //     //     })
// // //     //     .catch(error => {
// // //     //         console.error('Signup error:', error);
// // //     //       // Handle any errors that occur during the API call
// // //     //     });
// // //     //   };
// // //     const handleSignUp = async () => {
// // //       // Prepare your data for the API request
// // //       const userData = {
// // //         firstname,
// // //         lastname,
// // //         email,
// // //         mobile,
// // //         password,
// // //         confirmpassword,
// // //       };

// // //       try {
// // //         const response = await fetch('https://alharamstores.com/rest/V1/api/mobileOtpRegistrationMethod', {
// // //           method: 'POST',
// // //           headers: {
// // //             'Content-Type': 'application/json',
// // //           },
// // //           body: JSON.stringify(userData),
// // //         });

// // //         if (response.ok) {
// // //           // API call was successful
// // //           const responseData = await response.json();
// // //           console.log('Sign up successful:', responseData);
// // //           // Handle any further actions or UI updates
// // //         } else {
// // //           // API call failed
// // //           console.error('Sign up failed');
// // //           navigation.navigate('Home');
// // //           // Handle error and display appropriate messages
// // //         }
// // //       } catch (error) {
// // //         console.error('Error during sign up:', error);
// // //         // Handle error and display appropriate messages
// // //       }
// // //     };
// // //   return (
// // //     <View style={styles.container}>

// // //     <View style={styles.headerred}>
// // //         <View style={styles.logocontainer}>
// // //         <Image
// // //           source={require('../assets/Logo.png')} // Replace with your splash image path
// // //           style={styles.logo}
// // //           resizeMode="contain"
// // //         />

// // // <View style={{top:10}}>
// // // {/* <Icon name="rocket" size={30} color="#900" /> */}

// // //       <View style={{
// // //       borderRadius: 20, // Set the border radius to 20
// // //       overflow: 'hidden', }}>
// // //       {/* <Button title="Sign Up" color="#8b0000" onPress={handleSignUp} /> */}
// // //       <Button title="Sign Up" color="#FF0000" onPress={() => navigation.navigate('Productpage')} />
// // //       </View>

// // //     </View>
// // //     <View style={{alignItems:"center",top:15,color:"black"}}>
// // //         <Text>Exist Customer</Text>
// // //     </View>
// // //     <View style={styles.buttonContainer}>

// // //     <Button title="Sign In" color="green" onPress={() => navigation.navigate('Signin')} />
// // //     </View>
// // //         </View>

// // // </View>

// // //     </View>
// // //   )
// // // }

// // // export default Signin;
// // // const styles = StyleSheet.create({
// // //     container:{
// // //     backgroundColor:"white"
// // //     },
// // //     buttonContainer: {
// // //     top:20,
// // //       borderRadius: 20, // Set the border radius to 20
// // //       overflow: 'hidden',
// // //     },
// // //     header: {
// // //       height:'100%',
// // //       //justifyContent: 'center',
// // //       //alignItems: 'center',
// // //     },
// // //     headerred:{
// // //     height:170,
// // //     backgroundColor:"#8b0000"
// // //     },
// // //     logocontainer:{
// // //         borderColor: '#d3d3d3', // Set your desired border color
// // //         borderWidth: 2,
// // //     backgroundColor:"#fff",
// // //     borderRadius: 40,
// // //     width:"75%",
// // //     alignSelf:"center",
// // //     marginVertical:70,
// // //     height:"100%"
// // //     },
// // //     logo:{

// // //         width: 250,  // Set the width of the image as needed
// // //         height: 160,
// // //         marginHorizontal:5
// // //     },
// // //     container1: {
// // //       flexDirection: 'row',
// // //       alignItems: 'center',
// // //       borderColor: '#ccc',
// // //       borderWidth: 1,
// // //       borderRadius: 5,
// // //       paddingHorizontal: 10,

// // //     },
// // //     icon: {
// // //       marginRight: 10,
// // //     },
// // //     input: {
// // //     width: '80%',
// // //     marginBottom: 15,
// // //     padding: 10,
// // //     borderBottomWidth: 1,
// // //   },
// // //     headerContent: {
// // //       backgroundColor: 'rgba(0, 0, 0, 0.5)',
// // //       padding: 20,
// // //       borderRadius: 10,
// // //     justifyContent: 'center',
// // //     alignItems: 'center',
// // //     marginTop:500
// // //     },
// // //     title: {
// // //       fontSize: 24,
// // //       fontWeight: 'bold',
// // //       color: 'white',
// // //       marginBottom: 20,
// // //     },
// // //     loginButtons: {
// // //       flexDirection: 'row',
// // //       justifyContent: 'center',
// // //     },
// // //     loginButton: {
// // //       paddingVertical: 10,
// // //       paddingHorizontal: 20,
// // //       borderRadius: 5,
// // //       marginHorizontal: 10,
// // //     },
// // //     googleButton: {
// // //       backgroundColor: 'red', // You can set your desired color
// // //     },
// // //     facebookButton: {
// // //       backgroundColor: '#1877F2', // Facebook blue color
// // //     },
// // //     buttonText: {
// // //       color: 'white',
// // //       fontWeight: 'bold',
// // //     },
// // //   });
// import {  View, Text, Image, StyleSheet, TouchableOpacity,TextInput,Button, ScrollView } from 'react-native'
// import React, { useState } from 'react';
// import { useNavigation } from '@react-navigation/native';

// import Icon from 'react-native-vector-icons/FontAwesome';
// const Signin = () => {

//   const navigation = useNavigation();

//     const [selectedTab, setSelectedTab] = useState('Sign In With Email');

//   const renderTab = (tabName) => {
//     const isSelected = selectedTab === tabName;
//     return (
//       <TouchableOpacity
//         key={tabName}
//         style={[styles.tabButton, isSelected ? styles.selectedTab : null]}
//         onPress={() => setSelectedTab(tabName)}
//       >
//         <Text style={[styles.tabText, isSelected ? { color: '#8b0000' } : null]}>{tabName}</Text>
//       </TouchableOpacity>
//     );
//   };

//   const renderTabContent = () => {
//     const navigation = useNavigation();
//     if (selectedTab === 'Sign In With Email') {
//       return (

//         <View style={styles.tabContent}>
//         <View style={styles.inputContainer}>
//           <Image source={require('../assets/iconEmail.png')} style={styles.icon} />
//           <TextInput
//             style={[styles.input, {color:'black'}]}
//             placeholder="Enter your email"
//             keyboardType="email-address"
//             autoCapitalize="none"
//           />
//         </View>

//         <View style={styles.inputContainer}>
//           <Image source={require('../assets/iconPassword.png')} style={styles.icon} />
//           <TextInput
//             style={[styles.input, {color:'black'}]}
//             placeholder="Enter your password"
//             secureTextEntry // This masks the text for password input
//           />
//         </View>
//         <TouchableOpacity onPress={() => alert('Forgot Password pressed')}>
//             <Text style={{alignSelf: 'flex-end',}}>Forgot Password?</Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.rememberMeButton}>

//               <Image source={require('../assets/iconChecked.png')} style={styles.checkIcon} />

//               <View/>

//             <Text style={styles.rememberMeText}>Remember Me</Text>
//           </TouchableOpacity>

//         <TouchableOpacity style={styles.signInButton} >
//           <Text style={styles.signInButtonText}>Sign In</Text>
//         </TouchableOpacity>
//       </View>
//       );
//     } else if (selectedTab === 'Use Mobile No') {
//       return (
//         <ScrollView>

//         <View style={styles.tabContent}>
//         <View style={styles.inputContainer}>
//           <Image source={require('../assets/iconEmail.png')} style={styles.icon} />
//           <TextInput
//             style={[styles.input, {color:'black'}]}
//             placeholder="Enter your email"
//             keyboardType="email-address"
//             autoCapitalize="none"
//           />
//         </View>

//         <View style={styles.inputContainer}>
//           <Image source={require('../assets/iconPassword.png')} style={styles.icon} />
//           <TextInput
//             style={[styles.input, {color:'black'}]}
//             placeholder="Enter your password"
//             secureTextEntry // This masks the text for password input
//           />
//         </View>
//         <View style={styles.inputContainer}>
//           <Image source={require('../assets/iconEmail.png')} style={styles.icon} />
//           <TextInput
//             style={[styles.input, {color:'black'}]}
//             placeholder="Enter your email"
//             keyboardType="email-address"
//             autoCapitalize="none"
//           />
//         </View>

//         <View style={styles.inputContainer}>
//           <Image source={require('../assets/iconPassword.png')} style={styles.icon} />
//           <TextInput
//             style={[styles.input, {color:'black'}]}
//             placeholder="Enter your password"
//             secureTextEntry // This masks the text for password input
//           />
//         </View>
//         <View style={styles.inputContainer}>
//           <Image source={require('../assets/cellphone.png')} style={styles.icon} />
//           <TextInput
//             style={[styles.input, {color:'black'}]}
//             placeholder="Enter your email"
//             keyboardType="email-address"
//             autoCapitalize="none"
//           />
//         </View>

//       </View>
//         </ScrollView>
//       );
//     }
//   };

//   return (
//     <View style={styles.container}>

//     <View style={styles.headerred}>
//         <View style={styles.logocontainer}>
//         <Image
//           source={require('../assets/Logo.png')} // Replace with your splash image path
//           style={styles.logo}
//           resizeMode="contain"
//         />

//         </View>

// </View>
// <ScrollView>
// <View style={styles.tabContent}>
//         <View style={styles.inputContainer}>
//           <Image source={require('../assets/iconEmail.png')} style={styles.icon} />
//           <TextInput
//             style={[styles.input, {color:'black'}]}
//             placeholder="Enter your email"
//             keyboardType="email-address"
//             autoCapitalize="none"
//           />
//         </View>

//         <View style={styles.inputContainer}>
//           <Image source={require('../assets/iconPassword.png')} style={styles.icon} />
//           <TextInput
//             style={[styles.input, {color:'black'}]}
//             placeholder="Enter your password"
//             secureTextEntry // This masks the text for password input
//           />
//         </View>
//          <View style={styles.inputContainer}>
//           <Image source={require('../assets/iconPassword.png')} style={styles.icon} />
//           <TextInput
//             style={[styles.input, {color:'black'}]}
//             placeholder="3"
//             secureTextEntry // This masks the text for password input
//           />
//         </View>
//         <View style={styles.inputContainer}>
//           <Image source={require('../assets/iconPassword.png')} style={styles.icon} />
//           <TextInput
//             style={[styles.input, {color:'black'}]}
//             placeholder="4"
//             secureTextEntry // This masks the text for password input
//           />
//         </View>
//         <View style={styles.inputContainer}>
//           <Image source={require('../assets/iconPassword.png')} style={styles.icon} />
//           <TextInput
//             style={[styles.input, {color:'black'}]}
//             placeholder="5"
//             secureTextEntry // This masks the text for password input
//           />
//         </View>
//         <TouchableOpacity style={styles.signInButton} >
//           <Text style={styles.signInButtonText}>Sign Up</Text>
//         </TouchableOpacity>

//            <View/>
//      <View style={{alignItems:"center"}}>

//          <Text style={{fontSize:18,color:"black"}}>Exist Customer</Text>
//      </View>

//      <TouchableOpacity style={{backgroundColor: 'green',

//    paddingVertical: 7,
//    borderRadius: 28,
//    alignItems: 'center',
//    marginBottom: 20,
//    width:"95%",marginHorizontal:10,
//    marginVertical:20}} >
//        <Text style={styles.signInButtonText}>Sign In</Text>
//      </TouchableOpacity>
//       </View>
// </ScrollView>

//     </View>
//   )
// }

// export default Signin;
// const styles = StyleSheet.create({
//     container:{
//     backgroundColor:"white",
//     flex:1
//     },
//     buttonContainer: {
//     top:20,
//       borderRadius: 20, // Set the border radius to 20
//       overflow: 'hidden',
//     },
//     header: {
//       height:'100%',
//       //justifyContent: 'center',
//       //alignItems: 'center',
//     },
//     headerred:{
//     height:170,
//     backgroundColor:"#8b0000"
//     },
//     logocontainer:{
//         borderColor: '#d3d3d3', // Set your desired border color
//         borderWidth: 2,
//     backgroundColor:"#fff",
//     borderRadius: 40,
//     width:"75%",
//     alignSelf:"center",
//     marginVertical:70,
//     height:"100%"
//     },
//     logo:{

//         alignItems:"center",
//         width: 230,  // Set the width of the image as needed
//         height: 160,
//         marginHorizontal:15
//     },
//     container1: {
//       flexDirection: 'row',
//       alignItems: 'center',
//       borderColor: '#ccc',
//       borderWidth: 1,
//       borderRadius: 5,
//       paddingHorizontal: 10,
//     },

//     input: {
//     width: '80%',
//     marginBottom: 15,
//     padding: 10,
//     borderBottomWidth: 1,
//   },
//     headerContent: {
//       backgroundColor: 'rgba(0, 0, 0, 0.5)',
//       padding: 20,
//       borderRadius: 10,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop:500
//     },
//     title: {
//       fontSize: 24,
//       fontWeight: 'bold',
//       color: 'white',
//       marginBottom: 20,
//     },
//     loginButtons: {
//       flexDirection: 'row',
//       justifyContent: 'center',
//     },
//     loginButton: {
//       paddingVertical: 10,
//       paddingHorizontal: 20,
//       borderRadius: 5,
//       marginHorizontal: 10,
//     },
//     googleButton: {
//       backgroundColor: 'red', // You can set your desired color
//     },
//     facebookButton: {
//       backgroundColor: '#1877F2', // Facebook blue color
//     },
//     buttonText: {
//       color: 'white',
//       fontWeight: 'bold',
//     },
//       tabBar: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     backgroundColor: 'lightgray',
//     height: 50,
//     alignItems: 'center',
//   },
//   tabButton: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   selectedTab: {
//     borderBottomWidth: 2,
//     borderColor: '#8b0000',
//     paddingVertical: 15,
//   },
//   tabText: {
//     color: 'black',
//     fontSize: 17,
//   },
//   inputContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     borderBottomWidth: 1, // Border Bottom Width for the underline
//     borderBottomColor: 'lightgray', // Border Bottom Color
//     paddingHorizontal: 30,
//     marginBottom: 60,
//     borderBottomLeftRadius:30,
//     borderBottomRightRadius:20,
//     marginVertical:30
//   },

//   icon: {
//     width: 20,
//     height: 20,
//     marginRight: 50,
//   },
//   input: {
//     flex: 1,
//     height: 40,
//   },
//   tabContent: {
//     width: '100%',
//     marginVertical:30
//   },
//   inputContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     borderBottomWidth: 1, // Border Bottom Width for the underline
//     borderBottomColor: 'lightgray', // Border Bottom Color
//     paddingHorizontal: 15,
//     marginBottom: 20,
//     borderBottomLeftRadius:20,
//     borderBottomRightRadius:20,

//   },
//   icon: {
//     width: 30,
//     height: 30,
//     marginRight: 20,
//   },
//   input: {
//     flex: 1,
//     height: 40,
//     fontSize: 16,
//   },
//   rememberMeContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   rememberMeButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginHorizontal:20
//   },
//   checkboxPlaceholder: {
//     width: 20,
//     height: 20,
//     borderWidth: 1,
//     borderColor: '#007bff',
//     marginRight: 10,
//   },
//   checkIcon: {
//     width: 20,
//     height: 20,
//     marginRight: 10,
//   },
//   rememberMeText: {
//     fontSize: 14,
//     color: '#000',
//     alignItems:"center"
//   },
//   signInButton: {
//     backgroundColor: 'red',

//     paddingVertical: 7,
//     borderRadius: 28,
//     alignItems: 'center',
//     marginBottom: 20,
//     width:"95%",marginHorizontal:10,
//     marginVertical:20
//   },
//   signInButtonText: {
//     color: '#fff',
//     fontSize: 18,
//   },
//   })
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Button,
  ScrollView,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';

const Signin = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [PhoneNumber, setPhoneNumber] = useState('');
  const [Lastname, setLastname] = useState('');
  const [First, setFirstname] = useState('');
  const [confirmpassword, setConfirmpassword] = useState('');
  const [error, setError] = useState('');
  const handleSignUp = () => {
    // Perform input validation
    if (
      !email ||
      !password ||
      !First ||
      !Lastname ||
      !confirmpassword ||
      !PhoneNumber
    ) {
      setError('Please fill out all fields');
      return;
    }

    // API call logic with validation
    var myHeaders = new Headers();
    myHeaders.append('Cookie', 'PHPSESSID=24e0db18170834933bb9ba5a3a97c8c1');

    var formdata = new FormData();

    formdata.append('mobile', PhoneNumber);
    formdata.append('password', password);
    formdata.append('firstname', First);
    formdata.append('lastname', Lastname);
    formdata.append('email', email);
    formdata.append('otptype', 'register');
    formdata.append('store_id', '1');
    formdata.append('auth', '');
    formdata.append('resend', '');
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow',
    };

    fetch(
      'https://alharamstores.com/rest/arabic/V1/api/mobileOtpRegistrationMethod',
      requestOptions,
    )
      .then(response => response.text())
      .then(result => {
        // Handle API response
        console.log(result);
        // Navigate to the next screen or perform other actions based on the response
      })
      .catch(error => {
        // Handle API error
        console.log('error', error);
        setError('Something went wrong. Please try again later.');
      });
    // Navigate to OTP screen with phone number as parameter
    navigation.navigate('OTPVerification', {PhoneNumber});
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerred}>
        <View style={styles.logocontainer}>
          <Image
            source={require('../assets/Logo.png')} // Replace with your splash image path
            style={styles.logo}
            resizeMode="contain"
          />
        </View>
      </View>
      <ScrollView>
        <View style={[styles.tabContent,{backgroundColor:'white'}]}>
          <View style={{marginVertical: 20}}>
            <Text
              style={{
                margin: 0,
                fontSize: 25,
                textAlign: 'center',
                fontWeight: '700',
                color: 'black',
              }}>
              CREATE
            </Text>
            <Text
              style={{
                margin: 0,
                fontSize: 25,
                textAlign: 'center',
                fontWeight: '700',
                color: 'black',
                textDecorationLine: 'underline',
              }}>
              YOUR ACCOUNT
            </Text>
          </View>
          <View style={styles.inputContainer}>
            <Image
              source={require('../assets/iconUser1.png')}
              style={styles.icon}
            />
            <TextInput
              style={[styles.input, {color:'black'}]}
              placeholder="First name"
              keyboardType="default"
              onChangeText={text => setFirstname(text)}
              placeholderTextColor={'black'}
            />
          </View>
          <View style={styles.inputContainer}>
            <Image
              source={require('../assets/iconUser1.png')}
              style={styles.icon}
            />
            <TextInput
              style={[styles.input, {color:'black'}]}
              placeholder="Last name"
              keyboardType="default"
              onChangeText={text => setLastname(text)}
              placeholderTextColor={'black'}
            />
          </View>
          <View style={styles.inputContainer}>
            <Image
              source={require('../assets/iconEmail.png')}
              style={styles.icon}
            />
            <TextInput
              style={[styles.input, {color:'black'}]}
              placeholder="Email"
              keyboardType="email-address"
              onChangeText={text => setEmail(text)}
              placeholderTextColor={'black'}
            />
          </View>
          <View style={styles.inputContainer}>
            <Image
              source={require('../assets/cellphone.png')}
              style={styles.icon}
            />
            <TextInput
              style={[styles.input, {color:'black'}]}
              placeholder="Mobile number"
              keyboardType="phone-pad"
              onChangeText={text => setPhoneNumber(text)}
              placeholderTextColor={'black'}
            />
          </View>
          <View style={styles.inputContainer}>
            <Image
              source={require('../assets/iconPassword.png')}
              style={styles.icon}
            />
            <TextInput
              style={[styles.input, {color:'black'}]}
              placeholder="Password"
              secureTextEntry
              onChangeText={text => setPassword(text)}
              placeholderTextColor={'black'}
            />
          </View>
          <View style={styles.inputContainer}>
            <Image
              source={require('../assets/iconPassword.png')}
              style={styles.icon}
            />
            <TextInput
              style={[styles.input, {color:'black'}]}
              placeholder="Re-enter password"
              secureTextEntry
              onChangeText={text => setConfirmpassword(text)}
              placeholderTextColor={'black'}
            />
          </View>
          {error ? <Text style={styles.errorText}>{error}</Text> : null}
          <TouchableOpacity style={styles.signInButton} onPress={handleSignUp}>
            <Text style={styles.signInButtonText}>Sign Up</Text>
          </TouchableOpacity>

          {/* <TouchableOpacity style={styles.signInButton} >
          <Text style={styles.signInButtonText}>Sign Up</Text>
        </TouchableOpacity> */}

          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: 60,
            }}>
            <Text style={{color: 'black', fontSize: 17}}>New Customer</Text>
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: '#00A300',
              paddingVertical: 7,
              borderRadius: 28,
              alignItems: 'center',
              width: '95%',
              bottom: 40,
              marginHorizontal: 10,
            }}
            onPress={() => navigation.navigate('Login')}>
            <Text style={styles.signInButtonText}>Sigh In</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text>ddddd</Text>
          <Text>ddddd</Text>
          <Text>ddddd</Text>
          <Text>ddddd</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Signin;
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  buttonContainer: {
    top: 20,
    borderRadius: 20, // Set the border radius to 20
    overflow: 'hidden',
  },
  header: {
    height: '100%',
    //justifyContent: 'center',
    //alignItems: 'center',
  },
  headerred: {
    height: 170,
    backgroundColor: '#8b0000',
  },
  logocontainer: {
    borderColor: '#d3d3d3', // Set your desired border color
    borderWidth: 2,
    backgroundColor: '#fff',
    borderRadius: 40,
    width: '75%',
    alignSelf: 'center',
    marginVertical: 70,
    height: '100%',
  },
  logo: {
    alignItems: 'center',
    width: 230, // Set the width of the image as needed
    height: 160,
    marginHorizontal: 15,
  },
  container1: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },

  input: {
    width: '80%',
    marginBottom: 15,
    padding: 10,
    borderBottomWidth: 1,
    color: 'black',
  },
  headerContent: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 500,
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
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'lightgray',
    height: 50,
    alignItems: 'center',
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedTab: {
    borderBottomWidth: 2,
    borderColor: '#8b0000',
    paddingVertical: 15,
  },
  tabText: {
    color: 'black',
    fontSize: 17,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1, // Border Bottom Width for the underline
    borderBottomColor: 'lightgray', // Border Bottom Color
    paddingHorizontal: 30,
    marginBottom: 60,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 20,
    marginVertical: 30,
  },

  icon: {
    width: 20,
    height: 20,
    marginRight: 50,
  },
  input: {
    flex: 1,
    height: 40,
  },
  tabContent: {
    width: '100%',
    marginVertical: 100,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1, // Border Bottom Width for the underline
    borderBottomColor: 'lightgray', // Border Bottom Color
    paddingHorizontal: 15,
    marginBottom: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  icon: {
    width: 30,
    height: 30,
    marginRight: 20,
  },
  input: {
    flex: 1,
    height: 40,
    fontSize: 16,
  },
  rememberMeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  rememberMeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  checkboxPlaceholder: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: '#007bff',
    marginRight: 10,
  },
  checkIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  rememberMeText: {
    fontSize: 14,
    color: '#000',
  },
  signInButton: {
    backgroundColor: 'red',

    paddingVertical: 7,
    borderRadius: 28,
    alignItems: 'center',
    marginBottom: 20,
    width: '95%',
    marginHorizontal: 10,
    marginVertical: 20,
  },
  signInButtonText: {
    color: '#fff',
    fontSize: 18,
  },
});
