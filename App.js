// // // // // import axios from 'axios';
// // // // // import React, {useState} from 'react';
// // // // // import {
// // // // //   View,
// // // // //   Text,
// // // // //   Dimensions,
// // // // //   TextInput,
// // // // //   TouchableOpacity,
// // // // //   StatusBar,
// // // // // } from 'react-native';

// // // // // const {height, width} = Dimensions.get('screen');

// // // // // const Login = () => {
// // // // //   const [mobileNumber, setMobileNumber] = useState('');
// // // // //   const [otp, setOtp] = useState('');
// // // // //   const [response, setResponse] = useState('');
// // // // //   const onSubmit = async () => {
// // // // //     try {
// // // // //       const formData = new FormData();
// // // // //       formData.append('mobile_number', mobileNumber);

// // // // //       const response = await axios.post(
// // // // //         'https://alharamstores.com/rest/arabic/V1/api/mobileOtpRegistrationMethod',
// // // // //         formData,
// // // // //       );

// // // // //       // Assuming the API response contains data you want to display or use
// // // // //       setResponse(response.data);

// // // // //       // Handle the response data as needed
// // // // //       console.log(response.data);
// // // // //     } catch (error) {
// // // // //       console.error('API request error:', error);
// // // // //     }
// // // // //   };

// // // // //   return (
// // // // //     <View
// // // // //       style={{
// // // // //         alignItems: 'center',
// // // // //         backgroundColor: 'white',
// // // // //       }}>
// // // // //       <StatusBar backgroundColor="#ffffff" />
// // // // //       <View
// // // // //         style={{
// // // // //           width: width - 40,
// // // // //           height,
// // // // //           alignItems: 'center',
// // // // //         }}>
// // // // //         {/* ... Other UI components ... */}
// // // // //         <TextInput
// // // // //           style={{
// // // // //             width: width - 140,
// // // // //             fontFamily: 'Montserrat-Medium',
// // // // //             fontSize: 15,
// // // // //             color: 'black',
// // // // //           }}
// // // // //           onChangeText={setMobileNumber}
// // // // //           value={mobileNumber}
// // // // //           placeholder="Mobile Number"
// // // // //           keyboardType="phone-pad"
// // // // //           placeholderTextColor="#00000050"
// // // // //         />
// // // // //         {/* ... Other UI components ... */}

// // // // //         <TouchableOpacity onPress={onSubmit}>
// // // // //           <Text
// // // // //             style={{
// // // // //               color: 'black',
// // // // //               fontSize: 27,
// // // // //               fontFamily: 'Montserrat-Bold',
// // // // //             }}>
// // // // //             SEND OTP
// // // // //           </Text>
// // // // //         </TouchableOpacity>

// // // // //         {/* Display the API response if needed */}
// // // // //         {response && (
// // // // //           <View>
// // // // //             <Text>API Response:</Text>
// // // // //             <Text>{JSON.stringify(response, null, 2)}</Text>
// // // // //           </View>
// // // // //         )}
// // // // //       </View>
// // // // //     </View>
// // // // //   );
// // // // // };

// // // // // export default Login;

// // // // import * as React from 'react';
// // // // import {View, Text} from 'react-native';
// // // // import {NavigationContainer} from '@react-navigation/native';
// // // // import {createNativeStackNavigator} from '@react-navigation/native-stack';
// // // // import Splash from './src/screens/Splash';

// // // // const Stack = createNativeStackNavigator();

// // // // function App() {
// // // //   return (
// // // //     <NavigationContainer>
// // // //       <Stack.Navigator
// // // //         screenOptions={{
// // // //           headerShown: false,
// // // //         }}>

// // // //         <Stack.Screen name="Splash" component={Splash} />
// // // //       </Stack.Navigator>
// // // //     </NavigationContainer>
// // // //   );
// // // // }

// // // // export default App;
// // // // import React, { useEffect, useState } from 'react';
// // // // import { View, Text, Image } from 'react-native';

// // // // function MyComponent() {
// // // //   const [apiResponse, setApiResponse] = useState(null);
// // // //   const [error, setError] = useState(null);

// // // //   useEffect(() => {
// // // //     async function fetchData() {
// // // //       try {
// // // //         var myHeaders = new Headers();
// // // //         myHeaders.append(
// // // //           'Cookie',
// // // //           'PHPSESSID=0f3723a62eafbe26d0b5687a70dca98d'
// // // //         );

// // // //         var formdata = new FormData();
// // // //         formdata.append('category_id', '13');
// // // //         formdata.append('store_id', '1');
// // // //         formdata.append('PageSize', '20');
// // // //         formdata.append('CurPage', '1');
// // // //         formdata.append('customer_id', '14');
// // // //         formdata.append('color', '');
// // // //         formdata.append('size', '');
// // // //         formdata.append('price_fromprice_to', '');
// // // //         formdata.append('search', '');
// // // //         formdata.append('sort_by', 'position');
// // // //         formdata.append('sort_action', 'ASC');

// // // //         var requestOptions = {
// // // //           method: 'POST',
// // // //           headers: myHeaders,
// // // //           body: formdata,
// // // //           redirect: 'follow',
// // // //         };

// // // //         const response = await fetch(
// // // //           'https://alharamstores.com/rest/V1/api/getProductByCateId',
// // // //           requestOptions
// // // //         );
// // // //         const data = await response.json();
// // // //         console.log(data);
// // // //       } catch (error) {
// // // //         console.error(error);
// // // //       }
// // // //     }

// // // //     fetchData();
// // // //   }, []);
// // // //   return (
// // // //     <View>
// // // //       {apiResponse ? (
// // // //         <View>
// // // //           <Text>API Response Status: {apiResponse.status}</Text>
// // // //           {apiResponse.data.map(product => (
// // // //             <View key={product.id}>
// // // //               <Text>Product Name: {product.name}</Text>
// // // //               <Text>Price: {product.price}</Text>
// // // //               <Image source={{ uri: product.image }} style={{ width: 100, height: 100 }} />
// // // //             </View>
// // // //           ))}
// // // //         </View>
// // // //       ) : error ? (
// // // //         <Text>Error: {error.message}</Text>
// // // //       ) : (
// // // //         <Text>Loading...</Text>
// // // //       )}
// // // //     </View>
// // // //   );
// // // // }

// // // // export default MyComponent;
// // // // import {View, Text} from 'react-native';
// // // // import React from 'react';
// // // // import AppNavigatior from './src/screens/AppNavigatior';

// // // // const App = () => {
// // // //   return <AppNavigatior />;
// // // // };

// // // // export default App;
// // // // import React, { useState } from 'react';
// // // // import { View, Text, TextInput, Button } from 'react-native';

// // // // const RegistrationScreen = () => {
// // // //   const [email, setEmail] = useState('');
// // // //   const [password, setPassword] = useState('');

// // // //   const handleRegistration = async () => {
// // // //     try {
// // // //       const response = await fetch('https://alharamstores.com/rest/V1/api/createUser', {
// // // //         method: 'POST',
// // // //         headers: {
// // // //           'Content-Type': 'application/json',
// // // //         },
// // // //         body: JSON.stringify({
// // // //           email: email,
// // // //           password: password,
// // // //         }),
// // // //       });

// // // //       if (response.ok) {
// // // //         // Registration was successful
// // // //         const responseData = await response.json();
// // // //         // Handle the response data as needed
// // // //       } else {
// // // //         // Registration failed
// // // //         const errorData = await response.json();
// // // //         // Handle the error data or show an error message to the user
// // // //       }
// // // //     } catch (error) {
// // // //       // Handle any network or other errors
// // // //       console.error('Error:', error);
// // // //     }
// // // //   };

// // // //   return (
// // // //     <View>
// // // //       <Text>Email:</Text>
// // // //       <TextInput
// // // //         placeholder="Enter your email"
// // // //         value={email}
// // // //         onChangeText={(text) => setEmail(text)}
// // // //       />
// // // //       <Text>Password:</Text>
// // // //       <TextInput
// // // //         placeholder="Enter your password"
// // // //         value={password}
// // // //         onChangeText={(text) => setPassword(text)}
// // // //         secureTextEntry={true}
// // // //       />
// // // //       <Button title="Register" onPress={handleRegistration} />
// // // //     </View>
// // // //   );
// // // // };

// // // // export default RegistrationScreen;
// // // // import axios from 'axios';
// // // // import React, { useState } from 'react';
// // // // import {
// // // // View,
// // // // Text,
// // // // Dimensions,
// // // // TextInput,
// // // // TouchableOpacity,
// // // // StatusBar,
// // // // } from 'react-native';
// // // // import FormData from 'form-data';

// // // // const { height, width } = Dimensions.get('screen');

// // // // const Login = () => {
// // // // const [passwordVisibility, setPasswordVisibility] = useState(true);
// // // // const [Password, setPassword] = useState('');
// // // // const [Username, setUsername] = useState('');
// // // // const [isLoginDisabled, setIsLoginDisabled] = useState(true); // State to disable login button
// // // // const [UserData, setUserData] = useState([]);

// // // // const handlePasswordVisibility = () => {
// // // // setPasswordVisibility(!passwordVisibility);
// // // // };

// // // // const onEndEditing = () => {
// // // // // Check password length and enable/disable login button
// // // // if (Password.length >= 6) {
// // // // setIsLoginDisabled(false);
// // // // } else {
// // // // setIsLoginDisabled(true);
// // // // }
// // // // };

// // // // const onSubmit = () => {
// // // // console.log("nehal");

// // // // const formData = new FormData();

// // // // formData.append('username', Username);
// // // // formData.append('password', Password); // Use the password state variable
// // // // formData.append('store_id', '1');

// // // // // Log the formData contents
// // // // console.log('formData:', formData);

// // // // axios
// // // // .post('https://alharamstores.com/rest/V1/api/loginUser', formData)
// // // // .then((resp) => {
// // // // console.log(resp?.data);
// // // // })
// // // // .catch((err) => {
// // // // console.log(err);
// // // // });
// // // // };

// // // // return (
// // // // <View style={{ alignItems: 'center', backgroundColor: 'white' }}>
// // // // <StatusBar backgroundColor="#ffffff" />
// // // // <View style={{ width: width - 40, height, alignItems: 'center' }}>
// // // // <View style={{ marginTop: '20%', alignItems: 'center' }}>
// // // // <View style={{ marginTop: '5%', justifyContent: 'center', alignItems: 'center' }}>
// // // // <Text
// // // // style={{
// // // // color: '#7be495fc',
// // // // fontSize: 16,
// // // // fontFamily: 'Montserrat-Medium',
// // // // textAlign: 'center',
// // // // }}>
// // // // Enter your details to access your account.
// // // // </Text>
// // // // </View>

// // // // <View
// // // // style={{
// // // // height: height / 5,
// // // // width: width - 80,
// // // // marginTop: '5%',
// // // // justifyContent: 'space-around',
// // // // }}>
// // // // <View
// // // // style={{
// // // // height: height / 12,
// // // // alignItems: 'center',
// // // // borderWidth: 2,
// // // // borderRadius: 15,
// // // // justifyContent: 'center',
// // // // flexDirection: 'row',
// // // // }}>
// // // // <TextInput
// // // // style={{
// // // // width: width - 140,
// // // // fontFamily: 'Montserrat-Medium',
// // // // fontSize: 15,
// // // // color: 'black',
// // // // }}
// // // // // maxLength={5}
// // // // onChangeText={setUsername}
// // // // value={Username}
// // // // // placeholder="01234"
// // // // // placeholderTextColor="#00000050"@
// // // // // keyboardType="numeric"
// // // // returnKeyType="next"
// // // // onEndEditing={onEndEditing}
// // // // />
// // // // </View>
// // // // <View
// // // // style={{
// // // // height: height / 12,
// // // // alignItems: 'center',
// // // // borderWidth: 2,
// // // // borderRadius: 15,
// // // // justifyContent: 'center',
// // // // flexDirection: 'row',
// // // // }}>
// // // // <TextInput
// // // // style={{
// // // // width: width - 140,
// // // // fontFamily: 'Montserrat-Medium',
// // // // color: 'black',
// // // // }}
// // // // secureTextEntry={passwordVisibility}
// // // // placeholder="Password"
// // // // value={Password}
// // // // onChangeText={setPassword}
// // // // maxLength={12}
// // // // placeholderTextColor="black"
// // // // onSubmitEditing={onSubmit}
// // // // />
// // // // <TouchableOpacity onPress={handlePasswordVisibility}>
// // // // <Text style={{ color: 'black', fontSize: 20, fontFamily: 'Montserrat-Bold' }}>
// // // // {passwordVisibility ? 'Show' : 'Hide'}
// // // // </Text>
// // // // </TouchableOpacity>
// // // // </View>
// // // // </View>

// // // // <TouchableOpacity onPress={onSubmit}>
// // // // <Text style={{ color: 'black', fontSize: 27, fontFamily: 'Montserrat-Bold' }}>
// // // // LOG IN
// // // // </Text>
// // // // </TouchableOpacity>
// // // // </View>
// // // // </View>
// // // // </View>
// // // // );
// // // // };

// // // // export default Login;
// // // // import React, { useState } from 'react';
// // // // import { View, Text, TextInput, Button } from 'react-native';

// // // // const CreateUserScreen = () => {
// // // //   const [email, setEmail] = useState('');
// // // //   const [password, setPassword] = useState('');

// // // //   const createUser = async () => {
// // // //     try {
// // // //       // Define the API endpoint URL
// // // //       const apiUrl = 'https://alharamstores.com/rest/V1/api/createUser';

// // // //       // Define the user data to send to the API
// // // //       const userData = {
// // // //         email,
// // // //         password,
// // // //         // Add other user data fields as needed
// // // //       };

// // // //       // Make the API request
// // // //       const response = await fetch(apiUrl, {
// // // //         method: 'POST',
// // // //         headers: {
// // // //           'Content-Type': 'application/json',
// // // //           // Add any other required headers here
// // // //         },
// // // //         body: JSON.stringify(userData),
// // // //       });

// // // //       // Check the response status
// // // //       if (response.status === 200) {
// // // //         // Request successful, handle the response data here
// // // //         const responseData = await response.json();
// // // //         console.log('API Response:', responseData);
// // // //         // You can update the UI or perform any other actions here
// // // //       } else {
// // // //         // Request failed, handle errors here
// // // //         console.error('API Request Failed:', response.status);
// // // //         // You can show an error message to the user
// // // //       }
// // // //     } catch (error) {
// // // //       console.error('API Request Error:', error);
// // // //       // Handle any other errors that occur during the request
// // // //     }
// // // //   };

// // // //   return (
// // // //     <View>
// // // //       <Text>Create User</Text>
// // // //       <TextInput
// // // //         placeholder="Email"
// // // //         onChangeText={(text) => setEmail(text)}
// // // //         value={email}
// // // //       />
// // // //       <TextInput
// // // //         placeholder="Password"
// // // //         onChangeText={(text) => setPassword(text)}
// // // //         value={password}
// // // //         secureTextEntry={true}
// // // //       />
// // // //       <Button title="Create User" onPress={createUser} />
// // // //     </View>
// // // //   );
// // // // };

// // // // export default CreateUserScreen;
// // // // import React, { useState } from 'react';
// // // // import { View, TextInput, Button, Alert } from 'react-native';

// // // // function CreateUser() {
// // // //   const [email, setEmail] = useState('');
// // // //   const [firstname, setFirstname] = useState('');
// // // //   const [lastname, setLastname] = useState('');
// // // //   const [password, setPassword] = useState('');

// // // //   const createUser = () => {
// // // //     const requestOptions = {
// // // //       method: 'POST',
// // // //       headers: {
// // // //         'Content-Type': 'application/json',
// // // //       },
// // // //       body: JSON.stringify({
// // // //         email: email,
// // // //         firstname: firstname,
// // // //         lastname: lastname,
// // // //         password: password,
// // // //       }),
// // // //     };

// // // //     fetch('https://alharamstores.com/rest/V1/api/createUser', requestOptions)
// // // //       .then((response) => {
// // // //         if (!response.ok) {
// // // //           throw new Error('Network response was not ok');
// // // //         }
// // // //         return response.json();
// // // //       })
// // // //       .then((data) => {
// // // //         // Handle the API response data here
// // // //         Alert.alert('Success', 'User created successfully');
// // // //       })
// // // //       .catch((error) => {
// // // //         // Handle any errors that occurred during the fetch
// // // //         Alert.alert('Error', 'An error occurred while creating the user');
// // // //         console.error('Error:', error);
// // // //       });
// // // //   };

// // // //   return (
// // // //     <View>
// // // //       <TextInput
// // // //         placeholder="Email"
// // // //         onChangeText={(text) => setEmail(text)}
// // // //         value={email}
// // // //       />
// // // //       <TextInput
// // // //         placeholder="First Name"
// // // //         onChangeText={(text) => setFirstname(text)}
// // // //         value={firstname}
// // // //       />
// // // //       <TextInput
// // // //         placeholder="Last Name"
// // // //         onChangeText={(text) => setLastname(text)}
// // // //         value={lastname}
// // // //       />
// // // //       <TextInput
// // // //         placeholder="Password"
// // // //         onChangeText={(text) => setPassword(text)}
// // // //         value={password}
// // // //         secureTextEntry
// // // //       />
// // // //       <Button title="Create User" onPress={createUser} />
// // // //     </View>
// // // //   );
// // // // }

// // // // export default CreateUser;
// // // // import React, { useState } from 'react';
// // // // import { View, Text, TextInput, Button } from 'react-native';

// // // // const MyComponent = () => {
// // // //   const [email, setEmail] = useState('');
// // // //   const [firstName, setFirstName] = useState('');
// // // //   const [lastName, setLastName] = useState('');
// // // //   const [password, setPassword] = useState('');
// // // //   const [error, setError] = useState(null);

// // // //   const createUser = async () => {
// // // //     try {
// // // //       const requestData = {
// // // //         email,
// // // //         firstname: firstName,
// // // //         lastname: lastName,
// // // //         password,
// // // //         store_id: 1,
// // // //       };

// // // //       // Define request headers
// // // //       const headers = new Headers();
// // // //       headers.append('Content-Type', 'application/json');
// // // //       headers.append(
// // // //         'Cookie',
// // // //         'PHPSESSID=c22d43ecae48d608418d83cab902e98c; private_content_version=8d31e632dcc21934128bfc5aa0186b0d'
// // // //       );

// // // //       // Create request options
// // // //       const requestOptions = {
// // // //         method: 'POST',
// // // //         headers,
// // // //         body: JSON.stringify(requestData),
// // // //         redirect: 'follow',
// // // //       };

// // // //       // Send the POST request
// // // //       const response = await fetch(
// // // //         'https://alharamstores.com/rest/V1/api/createUser',
// // // //         requestOptions
// // // //       );

// // // //       if (!response.ok) {
// // // //         const errorData = await response.json();
// // // //         const errorMessage = errorData.message || 'API request failed';
// // // //         setError(errorMessage);
// // // //         return;
// // // //       }

// // // //       const result = await response.text();
// // // //       console.log(result);
// // // //     } catch (error) {
// // // //       console.error('Error:', error);
// // // //       setError('An error occurred while making the API request.');
// // // //     }
// // // //   };

// // // //   return (
// // // //     <View>
// // // //       <Text>Your React Native component content here</Text>
// // // //       <TextInput
// // // //         placeholder="Email"
// // // //         value={email}
// // // //         onChangeText={(text) => setEmail(text)}
// // // //       />
// // // //       <TextInput
// // // //         placeholder="First Name"
// // // //         value={firstName}
// // // //         onChangeText={(text) => setFirstName(text)}
// // // //       />
// // // //       <TextInput
// // // //         placeholder="Last Name"
// // // //         value={lastName}
// // // //         onChangeText={(text) => setLastName(text)}
// // // //       />
// // // //       <TextInput
// // // //         placeholder="Password"
// // // //         secureTextEntry={true}
// // // //         value={password}
// // // //         onChangeText={(text) => setPassword(text)}
// // // //       />
// // // //       <Button title="Create User" onPress={createUser} />
// // // //       {error && <Text style={{ color: 'red' }}>{error}</Text>}
// // // //     </View>
// // // //   );
// // // // };

// // // // export default MyComponent;

// // // // import React, { useEffect, useState } from 'react';
// // // // import { View, Text, Image } from 'react-native';

// // // // function MyComponent() {
// // // //   const [apiResponse, setApiResponse] = useState(null);
// // // //   const [error, setError] = useState(null);
 
  
// // // //   useEffect(() => {
// // // //     async function fetchData() {
// // // //       try {
// // // //         var myHeaders = new Headers();
// // // //         myHeaders.append(
// // // //           'Cookie',
// // // //           'PHPSESSID=0f3723a62eafbe26d0b5687a70dca98d'
// // // //         );

// // // //         var formdata = new FormData();
// // // //         formdata.append('category_id', '13');
// // // //         formdata.append('store_id', '1');
// // // //         formdata.append('PageSize', '20');
// // // //         formdata.append('CurPage', '1');
// // // //         formdata.append('customer_id', '14');
// // // //         formdata.append('color', '');
// // // //         formdata.append('size', '');
// // // //         formdata.append('price_fromprice_to', '');
// // // //         formdata.append('search', '');
// // // //         formdata.append('sort_by', 'position');
// // // //         formdata.append('sort_action', 'ASC');

// // // //         var requestOptions = {
// // // //           method: 'POST',
// // // //           headers: myHeaders,
// // // //           body: formdata,
// // // //           redirect: 'follow',
// // // //         };

// // // //         const response = await fetch(
// // // //           'https://alharamstores.com/rest/all/V1/api/getCategories',
// // // //           requestOptions
// // // //         );
// // // //         const data = await response.json();
// // // //         console.log('----',data.data);
// // // //       } catch (error) {
// // // //         console.error(error);
// // // //       }
// // // //     }

// // // //     fetchData();
// // // //   }, []);
// // // //   return (
// // // //     <View>
// // // //       {apiResponse ? (
// // // //         <View>
// // // //           <Text>API Response Status: {apiResponse.status}</Text>
// // // //           {apiResponse.data.map(product => (
// // // //             <View key={product.id}>
// // // //               <Text>Product Name: {product.name}</Text>
// // // //               <Text>Price: {product.price}</Text>
// // // //               <Image source={{ uri: product.image }} style={{ width: 100, height: 100 }} />
// // // //             </View>
// // // //           ))}
// // // //         </View>
// // // //       ) : error ? (
// // // //         <Text>Error: {error.message}</Text>
// // // //       ) : (
// // // //         <Text>Loadingfff...</Text>
// // // //       )}
// // // //     </View>
// // // //   );
// // // // }

// // // // export default MyComponent;
// // // // import React, { useEffect, useState } from 'react';
// // // // import { View, Text } from 'react-native';

// // // // const MyComponent = () => {
// // // //   const [apiResponse, setApiResponse] = useState(''); // State to hold the API response

// // // //   useEffect(() => {
// // // //     // Define the API URL
// // // //     const apiUrl = 'https://alharamstores.com/rest/V1/api/getCategoryBanner';

// // // //     // Define headers
// // // //     var myHeaders = new Headers();
// // // //     myHeaders.append("Cookie", "PHPSESSID=c22d43ecae48d608418d83cab902e98c; private_content_version=8d31e632dcc21934128bfc5aa0186b0d");

// // // //     // Create form data
// // // //     var formdata = new FormData();
// // // //     formdata.append("store_id", "1");
// // // //     formdata.append("category_id", "4");

// // // //     // Define request options
// // // //     var requestOptions = {
// // // //       method: 'POST',
// // // //       headers: myHeaders,
// // // //       body: formdata,
// // // //       redirect: 'follow'
// // // //     };

// // // //     // Make the API call
// // // //     fetch(apiUrl, requestOptions)
// // // //       .then(response => response.text())
// // // //       .then(result => {
// // // //         console.log('API Response:', result);
// // // //         setApiResponse(result); // Set the API response in the state
// // // //       })
// // // //       .catch(error => {
// // // //         console.error('Error fetching data:', error);
// // // //       });
// // // //   }, []);

// // // //   return (
// // // //     <View>
// // // //       <Text>Loading...</Text>
// // // //       {apiResponse && (
// // // //         <Text>API Response: {apiResponse}</Text>
// // // //       )}
// // // //     </View>
// // // //   );
// // // // };

// // // // export default MyComponent;
import {View, Text} from 'react-native';
import React from 'react';
import AppNavigatior from './src/screens/AppNavigatior';

const App = () => {
  return <AppNavigatior />;
};

export default App;

// // import React, { useState } from 'react';
// // import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
// // import Icon from 'react-native-vector-icons/FontAwesome';
// // const Drawer = ({ isOpen, onClose }) => {
// //   if (!isOpen) {
// //     return null; // Do not render the drawer if it's closed
// //   }

// //   const handleDrawerItemClick = (item) => {
// //     console.log(`Drawer item clicked: ${item}`);
// //     onClose(); // Close the drawer when an item is clicked
// //   };

// //   return (
// //     <View style={styles.drawerContainer}>
// //       <View style={{flexDirection:"row",bottom:10}}>
// //       <TouchableOpacity style={styles.closeButton} onPress={onClose}>
// //       <Text style={styles.closeButtonText}>X</Text>
       
// //       </TouchableOpacity>
// //       <Text style={{paddingHorizontal:20,fontSize:20,marginVertical:0,color:"black"}}>Filter By</Text>
// //       <View>
// //       <View style={styles.header}>
// //         <TouchableOpacity style={styles.button2} onPress={() => console.log('First Button Pressed')}>
// //           <Text>Clear</Text>
// //         </TouchableOpacity>
// //         <TouchableOpacity style={styles.button3} onPress={() => console.log('Second Button Pressed')}>
// //           <Text>Apply</Text>
// //         </TouchableOpacity>
// //       </View>
// //       </View>
// //       </View>
      
// //       {/* Add more drawer items as needed */}
// //     </View>
// //   );
// // };

// // const App = () => {
// //   const [isDrawerOpen, setIsDrawerOpen] = useState(false);

// //   const toggleDrawer = () => {
// //     setIsDrawerOpen(!isDrawerOpen);
// //   };

// //   return (
// //     <View style={{ flex: 1 }}>
// //       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
// //         <Text>Content Goes Here</Text>
// //       </View>
// //       <TouchableOpacity style={styles.button} onPress={toggleDrawer}>
// //         <Text>Open Drawer</Text>
// //       </TouchableOpacity>
// //       <Drawer isOpen={isDrawerOpen} onClose={toggleDrawer} />
// //     </View>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   button: {
// //     position: 'absolute',
// //     top: 20,
// //     right: 20,
// //     padding: 10,
// //     backgroundColor: 'lightblue',
// //     borderRadius: 5,
// //   },
// //   drawerContainer: {
// //     position: 'absolute',
// //     top: 0,
// //     right: 0,
// //     height: '100%',
// //     width: '100%', // Adjust the width of the drawer as needed
// //     backgroundColor: 'white',
// //     padding: 20,
// //     zIndex: 0,
// //   },
// //   drawerItem: {
// //     paddingVertical: 10,
// //     borderBottomWidth: 1,
// //     borderBottomColor: '#ccc',
// //   },
// //   closeButtonText: {
// //     fontSize: 20,
// //     color: 'black',
// //     fontWeight: 'normal',
// //   },
// //   header: {
// //     flexDirection: 'row',
// //     justifyContent: 'space-between',
// //     alignItems: 'center',
// //     padding: 10,
  
// //   },
// //   button2: {
// //     left:"500%",
// //     backgroundColor: 'lightgray',
// //     borderRadius: 5,
// //   paddingHorizontal:2,
  
// //   },
// //   button3:{

// //     left:"600%",
// //     backgroundColor: 'red',
// //     borderRadius: 5,
// //   paddingHorizontal:2,
  
// //   }
// // });

// // export default App;



