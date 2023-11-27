// // import {  View, Text, Image, StyleSheet, TouchableOpacity,TextInput,Button } from 'react-native'
// // import React, { useState } from 'react';
// // import { useNavigation } from '@react-navigation/native';
// // import Icon from 'react-native-vector-icons/FontAwesome';
// // import MaterialTop from './Navigation/MaterialTop';
// // const Signin = () => {

// //   const navigation = useNavigation();

// //     const [firstname, setFirstname] = useState('');
// // const [lastname, setLastname] = useState('');
// // const [email, setEmail] = useState('');
// // const [mobile, setMobile] = useState('');
// // const [password, setPassword] = useState('');
// // const [confirmpassword,setConfirmpassword]=useState('');
// //     // const handleSignUp = () => {
// //     //     // Prepare the data to be sent to the API
// //     //     const userData = {
// //     //       firstname,
// //     //       lastname,
// //     //       email,
// //     //       password,
// //     //     };

// //     //     // Send a POST request to your API endpoint
// //     //     fetch('https://alharamstores.com/rest/V1/api/mobileOtpRegistrationMethod', {
// //     //       method: 'POST',
// //     //       headers: {
// //     //         'Content-Type': 'application/json',
// //     //       },
// //     //       body: JSON.stringify(userData),
// //     //     })
// //     //     .then(response => response.json())
// //     //     .then(data => {
// //     //         console.log('Signup successful:',data);
// //     //       // Handle the response from the API (success or error)
// //     //       // For example, you could display a success message or show an error
// //     //     })
// //     //     .catch(error => {
// //     //         console.error('Signup error:', error);
// //     //       // Handle any errors that occur during the API call
// //     //     });
// //     //   };
// //     const handleSignUp = async () => {
// //       // Prepare your data for the API request
// //       const userData = {
// //         firstname,
// //         lastname,
// //         email,
// //         mobile,
// //         password,
// //         confirmpassword,
// //       };

// //       try {
// //         const response = await fetch('https://alharamstores.com/rest/V1/api/mobileOtpRegistrationMethod', {
// //           method: 'POST',
// //           headers: {
// //             'Content-Type': 'application/json',
// //           },
// //           body: JSON.stringify(userData),
// //         });

// //         if (response.ok) {
// //           // API call was successful
// //           const responseData = await response.json();
// //           console.log('Sign up successful:', responseData);
// //           // Handle any further actions or UI updates
// //         } else {
// //           // API call failed
// //           console.error('Sign up failed');
// //           navigation.navigate('Home');
// //           // Handle error and display appropriate messages
// //         }
// //       } catch (error) {
// //         console.error('Error during sign up:', error);
// //         // Handle error and display appropriate messages
// //       }
// //     };
// //   return (
// //     <View style={styles.container}>

// //     <View style={styles.headerred}>
// //         <View style={styles.logocontainer}>
// //         <Image
// //           source={require('../assets/Logo.png')} // Replace with your splash image path
// //           style={styles.logo}
// //           resizeMode="contain"
// //         />

// // <View style={{top:10}}>
// // {/* <Icon name="rocket" size={30} color="#900" /> */}

// //       <View style={{
// //       borderRadius: 20, // Set the border radius to 20
// //       overflow: 'hidden', }}>
// //       {/* <Button title="Sign Up" color="#8b0000" onPress={handleSignUp} /> */}
// //       <Button title="Sign Up" color="#FF0000" onPress={() => navigation.navigate('Productpage')} />
// //       </View>

// //     </View>
// //     <View style={{alignItems:"center",top:15,color:"black"}}>
// //         <Text>Exist Customer</Text>
// //     </View>
// //     <View style={styles.buttonContainer}>

// //     <Button title="Sign In" color="green" onPress={() => navigation.navigate('Signin')} />
// //     </View>
// //         </View>

// // </View>

// //     </View>
// //   )
// // }

// // export default Signin;
// // const styles = StyleSheet.create({
// //     container:{
// //     backgroundColor:"white"
// //     },
// //     buttonContainer: {
// //     top:20,
// //       borderRadius: 20, // Set the border radius to 20
// //       overflow: 'hidden',
// //     },
// //     header: {
// //       height:'100%',
// //       //justifyContent: 'center',
// //       //alignItems: 'center',
// //     },
// //     headerred:{
// //     height:170,
// //     backgroundColor:"#8b0000"
// //     },
// //     logocontainer:{
// //         borderColor: '#d3d3d3', // Set your desired border color
// //         borderWidth: 2,
// //     backgroundColor:"#fff",
// //     borderRadius: 40,
// //     width:"75%",
// //     alignSelf:"center",
// //     marginVertical:70,
// //     height:"100%"
// //     },
// //     logo:{

// //         width: 250,  // Set the width of the image as needed
// //         height: 160,
// //         marginHorizontal:5
// //     },
// //     container1: {
// //       flexDirection: 'row',
// //       alignItems: 'center',
// //       borderColor: '#ccc',
// //       borderWidth: 1,
// //       borderRadius: 5,
// //       paddingHorizontal: 10,

// //     },
// //     icon: {
// //       marginRight: 10,
// //     },
// //     input: {
// //     width: '80%',
// //     marginBottom: 15,
// //     padding: 10,
// //     borderBottomWidth: 1,
// //   },
// //     headerContent: {
// //       backgroundColor: 'rgba(0, 0, 0, 0.5)',
// //       padding: 20,
// //       borderRadius: 10,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     marginTop:500
// //     },
// //     title: {
// //       fontSize: 24,
// //       fontWeight: 'bold',
// //       color: 'white',
// //       marginBottom: 20,
// //     },
// //     loginButtons: {
// //       flexDirection: 'row',
// //       justifyContent: 'center',
// //     },
// //     loginButton: {
// //       paddingVertical: 10,
// //       paddingHorizontal: 20,
// //       borderRadius: 5,
// //       marginHorizontal: 10,
// //     },
// //     googleButton: {
// //       backgroundColor: 'red', // You can set your desired color
// //     },
// //     facebookButton: {
// //       backgroundColor: '#1877F2', // Facebook blue color
// //     },
// //     buttonText: {
// //       color: 'white',
// //       fontWeight: 'bold',
// //     },
// //   });
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Button,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [selectedTab, setSelectedTab] = useState('Sign In With Email');
  const navigation = useNavigation();
  const [mobileNumber, setMobileNumber] = useState('');
  const [otpResponse, setOtpResponse] = useState(null);
  const [error, setError] = useState(null);
  const [passwordVisibility, setPasswordVisibility] = useState(true)

  const storeData = async (userInfo) => {
    try {
      await AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
      navigation.replace("Home", userInfo)
    } catch (e) {
      console.error(e);
    }
  };

  const handleRegistration = async => {
    try {
      const FormData = require('form-data');
      let data = new FormData();
      data.append('username', email);
      data.append('password', password);
      data.append('store_id', '1');

      let config = {
        method: 'post',
        url: 'https://alharamstores.com//rest/V1/api/loginUser',
        data: data,
      };

      axios
        .request(config)
        .then(response => {
          if (response.data.message === 'Login successfully.') {
            storeData(response.data.data)
          }
        })
        .catch(error => {
          console.log(error);
        });
    } catch (error) {}
    // axios
    //   .post(
    //     'https://alharamstores.com/rest/arabic/V1/api/mobileOtpRegistrationMethod',
    //     {
    //       mobile: '', // Replace with the user's mobile number
    //       password: '', // Replace with the user's desired password
    //       firstname: '',
    //       lastname: '',
    //       email: email,
    //       otptype: 'login',
    //       store_id: '1',
    //       auth: '74125896322323',
    //       resend: '',
    //     },
    //   )
    //   .then(response => {
    //     console.log(response.data);
    //     // Handle the API response here (e.g., navigate to the next screen, show a success message)
    //     // For example, if the API response indicates success, navigate to the login screen:
    //     navigation.navigate('Home', {
    //       email: email, // Pass the email to the home screen
    //       firstname: '', // Pass the first name to the home screen
    //       lastname: '', // Pass the last name to the home screen
    //     });
    //   })
    //   .catch(error => {
    //     console.error(error);
    //     // Handle errors (e.g., show an error message to the user)
    //   });
  };

  const handleApiCall = async ({navigation}) => {
    try {
      const myHeaders = new Headers();
      myHeaders.append(
        'Cookie',
        'PHPSESSID=0da1895cb2c09310b45dee2f5d5d5ade; private_content_version=8d31e632dcc21934128bfc5aa0186b0d',
      );

      const formdata = new FormData();
      formdata.append('mobile', mobileNumber);
      formdata.append('password', '');
      formdata.append('firstname', '');
      formdata.append('lastname', '');
      formdata.append('email', '');
      formdata.append('otptype', 'login');
      formdata.append('store_id', '1');
      formdata.append('auth', '74125896322323');
      formdata.append('resend', '');

      const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow',
      };

      const response = await fetch(
        'https://alharamstores.com/rest/arabic/V1/api/mobileOtpRegistrationMethod',
        requestOptions,
      );
      const result = await response.text();

      if (response.ok) {
        setOtpResponse(result);
        navigation.navigate('OtpVerificationSuccess');
        setError(null);
      } else {
        setError(`Error: ${result}`);
        setOtpResponse(null);
      }
    } catch (error) {
      setError(`Error: ${error.message}`);
      setOtpResponse(null);
    }
  };

  const [userinfo, setuserinfo] = useState();
  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '1061154525447-lb4527v8o32pkmbvfdb9rhfsaqdja7p8.apps.googleusercontent.com',
    });
  }, []);
  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      setuserinfo(userInfo);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };

  const renderTab = tabName => {
    const isSelected = selectedTab === tabName;

    return (
      <TouchableOpacity
        key={tabName}
        style={[styles.tabButton, isSelected ? styles.selectedTab : null]}
        onPress={() => setSelectedTab(tabName)}>
        <Text style={[styles.tabText, isSelected ? {color: '#8b0000'} : null]}>
          {tabName}
        </Text>
      </TouchableOpacity>
    );
  };

  const renderTabContent = () => {
    const navigation = useNavigation();
    if (selectedTab === 'Sign In With Email') {
      return (
        <View style={styles.tabContent}>
          <View style={styles.inputContainer}>
            <Image
              source={require('../assets/iconEmail.png')}
              style={[styles.icon, {marginLeft:15}]}
            />
            <TextInput
              style={[styles.input, {color: 'black'}]}
              placeholder="Email"
              keyboardType="email-address"
              autoCapitalize="none"
              onChangeText={text => setEmail(text)}
              value={email}
              placeholderTextColor={'black'}
            />
          </View>

          <View style={styles.inputContainer}>
            <Image
              source={require('../assets/iconPassword.png')}
              style={[styles.icon, {marginLeft:15}]}
            />
            <TextInput
              style={[styles.input, {color: 'black'}]}
              onChangeText={text => setPassword(text)}
              value={password}
              secureTextEntry={passwordVisibility}
              placeholder="Password"
              placeholderTextColor={'black'}
            />
            <TouchableOpacity
            onPress={() => setPasswordVisibility(!passwordVisibility)}
            >
            <Image 
              source={{uri : "https://cdn-icons-png.flaticon.com/128/3257/3257787.png"}}
              style={[styles.icon, {
                justifyContent:'flex-end',
                tintColor:passwordVisibility ?  '#8b0000' : '#9ADE7B'
              }]}
              
            />
          </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={() => alert('Forgot Password pressed')}>
            <Text style={{alignSelf: 'flex-end'}}>Forgot Password?</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.rememberMeButton}>
            <Image
              source={require('../assets/iconChecked.png')}
              style={styles.checkIcon}
            />

            <View />

            <Text style={styles.rememberMeText}>Remember Me</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.signInButton}
            onPress={handleRegistration}>
            <Text style={styles.signInButtonText}>Sign In</Text>
          </TouchableOpacity>
        </View>
      );
    } else if (selectedTab === 'Use Mobile No') {
      return (
        <View style={styles.tabContent}>
          <View style={styles.inputContainer}>
            <Image
              source={require('../assets/cellphone.png')}
              style={styles.icon}
            />
            <TextInput
              style={[styles.input, {color: 'black'}]}
              placeholder="Mobile number"
              keyboardType="phone-pad"
              value={mobileNumber}
              onChangeText={text => setMobileNumber(text)}
              placeholderTextColor={'black'}
            />
          </View>

          <TouchableOpacity onPress={() => alert('Forgot Password pressed')}>
            <Text style={{alignSelf: 'flex-end'}}>Forgot Password?</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.signInButton} onPress={handleApiCall}>
            <Text style={styles.signInButtonText}>Send OTP</Text>
          </TouchableOpacity>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                width: '50%',
              }}>
              <View>
                <Image
                  source={require('../assets/fbimg.png')}
                  style={styles.icon}
                />
              </View>
              <TouchableOpacity onPress={() => signIn()}>
                <Image
                  source={require('../assets/google.png')}
                  style={styles.icon}
                />
              </TouchableOpacity>
              <Image
                source={require('../assets/apple.png')}
                style={styles.icon}
              />
            </View>
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginVertical: 50,
            }}>
            <Text
              style={{
                color: 'black',
                fontSize: 17,
              }}>
              New Customer
            </Text>
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
            <Text style={styles.signInButtonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      );
    }
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
      <View style={{marginVertical: 90}}>
        <View style={styles.tabBar}>
          {renderTab('Sign In With Email')}
          {renderTab('Use Mobile No')}
        </View>
        {renderTabContent()}
      </View>
    </View>
  );
};

export default Signin;
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
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
    marginHorizontal: 10,
  },
  selectedTab: {
    borderBottomWidth: 2,
    borderColor: '#8b0000',
  },
  tabText: {
    color: 'black',
    fontSize: 17,
  },
 
  icon: {
    width: 20,
    height: 20,
    marginRight: 50,
  },
  input: {
    flex: 1,
    height: 40,
    color: 'black',
  },
  tabContent: {
    width: '100%',
    marginVertical: 30,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1, // Border Bottom Width for the underline
    borderBottomColor: 'lightgray', // Border Bottom Color
    // paddingHorizontal: 15,
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
