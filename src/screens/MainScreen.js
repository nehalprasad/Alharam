// // import React, { useState } from 'react';
// // import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// // import Home from './bottom/Home';
// // import Categories from './bottom/Categories';
// // import Notification from './bottom/Notification';
// // import Profile from './bottom/Profile';
// // import {  Image,TouchableOpacity } from 'react-native';

// // const Tab = createBottomTabNavigator();
// // const MainScreen = () => {
// //   const [imageColor, setImageColor] = useState('red'); // Initial color is red

// //   const handleImagePress = () => {
// //     setImageColor('blue'); // Change color to blue when image is clicked
// //   return (
// //     // <Tab.Navigator>
// //     //    <Tab.Screen
// //     //     name="Home"
// //     //     component={Home}
// //     //     options={{
// //     //       tabBarLabel: 'Home', // Tab name
// //     //       tabBarIcon: ({ color, size }) => (
// //     //         <Icon name="home-sharp" color={color} size={size} /> // Tab icon
// //     //       ),
// //     //       headerShown: false, // Hide the header for this screen
// //     //     }}
// //     //   />
   

// //     //   <Tab.Screen
// //     //     name="Categories"
// //     //     component={Categories}
// //     //     options={{headerShown: false}}
// //     //   />

// //     //   <Tab.Screen
// //     //     name="Notification"
// //     //     component={Notification}
// //     //     options={{
// //     //       tabBarLabel: 'Home', // Tab name
// //     //       tabBarIcon: ({ color, size }) => (
// //     //         <Iconnew name="bell" color={color} size={size} /> // Tab icon
// //     //       ),
// //     //       headerShown: false, // Hide the header for this screen
// //     //     }}
// //     //   />

// //     //   <Tab.Screen
// //     //     name="Profile"
// //     //     component={Profile}
// //     //     options={{
// //     //       tabBarLabel: 'Profile', // Tab name
// //     //       tabBarIcon: ({ color, size }) => (
// //     //         <Icon name="person-outline" color={color} size={size} /> // Tab icon
// //     //       ),
// //     //       headerShown: false, // Hide the header for this screen
// //     //     }}
// //     //   />
// //     // </Tab.Navigator>
// //     <Tab.Navigator>
// //       <Tab.Screen
// //         name="Home"
// //         component={Home}
// //         options={{
// //           tabBarLabel: 'Home',
// //           tabBarIcon: ({ color, size }) => (
// //             <TouchableOpacity onPress={handleImagePress}>
// //               <Image
// //                 source={require('../assets/iconHome(s).png')}
// //                 style={{ width: size, height: size, tintColor: imageColor }}
// //               />
// //             </TouchableOpacity>
// //           ),
// //           headerShown: false,
// //         }}
// //       />
// //   <Tab.Screen
// //         name="Categories"
// //         component={Categories}
// //         options={{
// //           tabBarLabel: 'Categories',
// //           tabBarIcon: ({ color, size }) => (
// //             <Image
// //               source={require('../assets/iconCategory.png')} // Provide the path to your home icon image
// //               style={{ width: size, height: size, tintColor: color }}
// //             />
// //           ),
// //           headerShown: false,
// //         }}
// //       />


// //       <Tab.Screen
// //         name="Notification"
// //         component={Notification}
// //         options={{
// //           tabBarLabel: 'Notification',
// //           tabBarIcon: ({ color, size }) => (
// //             <Image
// //               source={require('../assets/iconBell.png')} // Provide the path to your notification icon image
// //               style={{ width: size, height: size, tintColor: color }}
// //             />
// //           ),
// //           headerShown: false,
// //         }}
// //       />

// //       <Tab.Screen
// //         name="Profile"
// //         component={Profile}
// //         options={{
// //           tabBarLabel: 'Profile',
// //           tabBarIcon: ({ color, size }) => (
// //             <Image
// //               source={require('../assets/iconUser.png')} // Provide the path to your profile icon image
// //               style={{ width: size, height: size, tintColor: color }}
// //             />
// //           ),
// //           headerShown: false,
// //         }}
// //       />
// //     </Tab.Navigator>
// //   );
// // };

// // export default MainScreen;
// import React, { useState } from 'react';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { TouchableOpacity, Image,StyleSheet } from 'react-native';
// import Home from './bottom/Home';
// import Categories from './bottom/Categories';
// import Notification from './bottom/Notification';
// import Profile from './bottom/Profile';
// const Tab = createBottomTabNavigator();

// const MainScreen = () => {
//   const [isPressed, setIsPressed] = useState(false);
//   const handlePress = () => {
//     setIsPressed(!isPressed); // Toggle the state when TouchableOpacity is pressed
//   };
//  return (
//     <Tab.Navigator>
//       <Tab.Screen
//         name="Home"
//         component={Home}
//         options={{
//           tabBarLabel: 'Home',
//           tabBarIcon: ({ size }) => (
//             <TouchableOpacity onPress={handlePress} style={styles.touchable}>
//               <Image
//               source={isPressed ? require('../assets/iconHome(s).png') : require('../assets/iconHome(s).png')}
//                 //source={require('../assets/iconHome(s).png')}
//                 style={{ width: size, height: size,  }}
//               />
//             </TouchableOpacity>
//           ),
//           headerShown: false,
//         }}
//       />
//       <Tab.Screen
//         name="Categories"
//         component={Categories}
//         options={{
//           tabBarLabel: 'Categories',
//           tabBarIcon: ({ size }) => (
//             <TouchableOpacity >
//               <Image
//                 source={require('../assets/iconCategory.png')}
//                 style={{ width: size, height: size,  }}
//               />
//             </TouchableOpacity>
//           ),
//           headerShown: false,
//         }}
//       />
//        <Tab.Screen
//         name="Notification"
//         component={Notification}
//         options={{
//           tabBarLabel: 'Notification',
//           tabBarIcon: ({ size }) => (
//             <TouchableOpacity >
//               <Image
//                 source={require('../assets/iconBell.png')}
//                 style={{ width: size, height: size,  }}
//               />
//             </TouchableOpacity>
//           ),
//           headerShown: false,
//         }}
//       />
//       <Tab.Screen
//         name="Profile"
//         component={Profile}
//         options={{
//           tabBarLabel: 'Profile',
//           tabBarIcon: ({ size }) => (
//             <TouchableOpacity >
//               <Image
//                 source={require('../assets/iconUser.png')}
//                 style={{ width: size, height: size,  }}
//               />
//             </TouchableOpacity>
//           ),
//           headerShown: false,
//         }}
//       />
     
//     </Tab.Navigator>
//   );
// };
// const styles = StyleSheet.create({
 
//   touchable: {
//     borderRadius: 10,
//     overflow: 'hidden',
//   },
  
// });
// export default MainScreen;
// import React, { useState } from 'react';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { TouchableOpacity, Image, StyleSheet } from 'react-native';
// import Home from './bottom/Home';
// import Categories from './bottom/Categories';
// import Notification from './bottom/Notification';
// import Profile from './bottom/Profile';

// const Tab = createBottomTabNavigator();

// const MainScreen = ({ navigation }) => {
//   const [isPressed, setIsPressed] = useState(false);

//   const handlePress = () => {
//     setIsPressed(!isPressed);
//     // Navigate to the desired screen when the home icon is clicked
//     navigation.navigate('Home'); // Replace 'YourScreenName' with the actual name of your screen
//   };
//   const handlePress2 = () => {
//     setIsPressed(!isPressed);
//     // Navigate to the desired screen when the home icon is clicked
//     navigation.navigate('Categories'); // Replace 'YourScreenName' with the actual name of your screen
//   };
//   const handlePress3 = () => {
//     setIsPressed(!isPressed);
//     // Navigate to the desired screen when the home icon is clicked
//     navigation.navigate('Notification'); // Replace 'YourScreenName' with the actual name of your screen
//   };
//   const handlePress4 = () => {
//     setIsPressed(!isPressed);
//     // Navigate to the desired screen when the home icon is clicked
//     navigation.navigate('Profile'); // Replace 'YourScreenName' with the actual name of your screen
//   };

//   return (
//     <Tab.Navigator>
//       <Tab.Screen
//         name="Home"
//         component={Home}
//         options={{
//           tabBarLabel: 'Home',
//           tabBarIcon: ({ size }) => (
//             <TouchableOpacity onPress={handlePress} style={styles.touchable}>
//               <Image
//                 source={isPressed ? require('../assets/iconHome(s).png') : require('../assets/iconHome(s).png')}
//                 style={{ width: size, height: size }}
//               />
//             </TouchableOpacity>
//           ),
//           headerShown: false,
//         }}
//       />
//       {/* ...other tab screens */}
//            <Tab.Screen
//         name="Categories"
//         component={Categories}
//         options={{
//           tabBarLabel: 'Categories',
//           tabBarIcon: ({ size }) => (
//             <TouchableOpacity onPress={handlePress2} style={styles.touchable}>
//               <Image
//                 source={require('../assets/iconCategory.png')}
//                 style={{ width: size, height: size,  }}
//               />
//             </TouchableOpacity>
//           ),
//           headerShown: false,
//         }}
//       />
//        <Tab.Screen
//         name="Notification"
//         component={Notification}
//         options={{
//           tabBarLabel: 'Notification',
//           tabBarIcon: ({ size }) => (
//             <TouchableOpacity onPress={handlePress3} style={styles.touchable}>
//               <Image
//                 source={require('../assets/iconBell.png')}
//                 style={{ width: size, height: size,  }}
//               />
//             </TouchableOpacity>
//           ),
//           headerShown: false,
//         }}
//       />
//       <Tab.Screen
//         name="Profile"
//         component={Profile}
//         options={{
//           tabBarLabel: 'Profile',
//           tabBarIcon: ({ size }) => (
//             <TouchableOpacity onPress={handlePress4} style={styles.touchable}>
//               <Image
//                 source={require('../assets/iconUser.png')}
//                 style={{ width: size, height: size,  }}
//               />
//             </TouchableOpacity>
//           ),
//           headerShown: false,
//         }}
//       />
//     </Tab.Navigator>
//   );
// };

// const styles = StyleSheet.create({
//   touchable: {
//     borderRadius: 10,
//     overflow: 'hidden',
//   },
// });

// export default MainScreen;
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';
import Home from './bottom/Home';
import Categories from './bottom/Categories';
import Notification from './bottom/Notification';
import Profile from './bottom/Profile';

const Tab = createBottomTabNavigator();

const MainScreen = ({ navigation }) => {
  const getIconSource = (routeName, focused) => {
    switch (routeName) {
      case 'Home':
        return focused
          ? require('../assets/iconHome(s).png')
          : require('../assets/iconHome.png');
      case 'Categories':
        return focused
          ? require('../assets/iconCategory(s).png')
          : require('../assets/iconCategory.png');
      case 'Notification':
        return focused
          ? require('../assets/iconBell(s).png')
          : require('../assets/iconBell.png');
      case 'Profile':
        return focused
          ? require('../assets/iconUser1.png')
          : require('../assets/iconUser.png');
      default:
        return null;
    }
  };

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ size, focused }) => (
            <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.touchable}>
              <Image
                source={getIconSource('Home', focused)}
                style={{ width: size, height: size }}
              />
            </TouchableOpacity>
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Categories"
        component={Categories}
        options={{
          tabBarLabel: 'Categories',
          tabBarIcon: ({ size, focused }) => (
            <TouchableOpacity onPress={() => navigation.navigate('Categories')} style={styles.touchable}>
              <Image
                source={getIconSource('Categories', focused)}
                style={{ width: size, height: size }}
              />
            </TouchableOpacity>
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Notification"
        component={Notification}
        options={{
          tabBarLabel: 'Notification',
          tabBarIcon: ({ size, focused }) => (
            <TouchableOpacity onPress={() => navigation.navigate('Notification')} style={styles.touchable}>
              <Image
                source={getIconSource('Notification', focused)}
                style={{ width: size, height: size }}
              />
            </TouchableOpacity>
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ size, focused }) => (
            <TouchableOpacity onPress={() => navigation.navigate('Profile')} style={styles.touchable}>
              <Image
                source={getIconSource('Profile', focused)}
                style={{ width: size, height: size }}
              />
            </TouchableOpacity>
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  touchable: {
    borderRadius: 10,
    overflow: 'hidden',
  },
});

export default MainScreen;
