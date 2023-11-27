// import {View, Text} from 'react-native';
// import React from 'react';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import {NavigationContainer} from '@react-navigation/native';
// import Splash from './Splash';
// import MainScreen from './MainScreen';
// import Signin from './Signin';
// import MaterialTop from './Navigation/MaterialTop';
// import ProductList from './ProductList';
// import NextScreen from './NextScreen';
// import Sumdrawer from './drawer/Sumdrawer';
// import Login from './Login';
// import OTPVerification from './OTPVerification';

// const Stack = createNativeStackNavigator();

// const AppNavigatior = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen
//           name="Splash"
//           component={Splash}
//           options={{headerShown: false}}
//         />

//         <Stack.Screen
//           name="Signin"
//           component={Signin}
//           options={{headerShown: false}}
//         />
// <Stack.Screen
//           name="Login"
//           component={Login}
//           options={{headerShown: false}}
//         />
//         <Stack.Screen
//           name="Signin"
//           component={Signin}
//           options={{headerShown: false}}
//         />

//         <Stack.Screen
//           name="MainScreen"
//           component={MainScreen}
//           options={{headerShown: false}}
//         />
//         <Stack.Screen
//         name="ProductList"
//         component={ProductList}
//         options={{headerShown:false}}
//         />
//         <Stack.Screen
//         name="NextScreen"
//         component={NextScreen}
//         options={{headerShown:false}}
//         />
//          <Stack.Screen
//         name="Sumdrawer"
//         component={Sumdrawer}
//         options={{headerShown:false}}
//         />
//              {/* <Stack.Screen
//         name="MaterialTop"
//         component={MaterialTop}
//         options={{headerShown:false}}
//         /> */}
//           <Stack.Screen
//           name="OTPVerification"
//           component={OTPVerification}
//           options={{headerShown: false}}
//         />
//       </Stack.Navigator>

//     </NavigationContainer>
//   );
// };

// export default AppNavigatior;
import {View, Text} from 'react-native';
import React, {useState, useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Splash from './Splash';
import Signin from './Signin';
import OTPVerification from './OTPVerification';
import MainScreen from './MainScreen';
import Login from './Login';
import ProductList from './ProductList';
import ProfileUpdate from './ProfileUpdate';
import WishList from './WishList';
import NextScreen from './NextScreen';
import AddressBook from './AddressBook';
import Address from './Address';
import Home from './bottom/Home';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();

const AppNavigatior = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [userInfo, setUserInfo] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getData();
  }, [userInfo]);

  const getData = async () => {
    try {
      const userInfo = await AsyncStorage.getItem('userInfo');
      console.log(JSON.parse(userInfo), 'userInfos');
      setUserInfo(JSON.parse(userInfo));
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ProfileUpdate"
          component={ProfileUpdate}
          options={{headerShown: false}}
          initialParams={{selectedItems, setSelectedItems}}
        />
        <Stack.Screen
          name="ProductList"
          component={ProductList}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="WishList"
          component={WishList}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="NextScreen"
          component={NextScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AddressBook"
          component={AddressBook}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Address"
          component={Address}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
          initialParams={{
            email: 'example@email.com',
            firstname: 'John',
            lastname: 'Doe',
          }}
        />
        <Stack.Screen
          name="MainScreen"
          component={MainScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Signin"
          component={Signin}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="OTPVerification"
          component={OTPVerification}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigatior;
