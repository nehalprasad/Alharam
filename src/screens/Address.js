// import React, { useEffect } from 'react';
// import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
// import { useRoute } from '@react-navigation/native';
// import { useNavigation } from '@react-navigation/native';
// const Address = () => {
//   const route = useRoute();
//   const { savedData } = route.params;
//   const navigation = useNavigation();
//   const onDelete = () => {
//     // Implement logic for deleting the address
//     console.log('Deleting address:', savedData);
//   };

//   const onEdit = () => {
//     // Implement logic for editing the address
//     console.log('Editing address:', savedData);
//     navigation.navigate('AddressBook', { addressData: savedData });
//   };

//   useEffect(() => {
//     console.log('Saved Address Data:', savedData);
//   }, [savedData]); // Add savedData as a dependency

//   return (
//     <View style={styles.container}>
//         <View style={styles.container1}>
//    <TouchableOpacity style={styles.headerContainer}  onPress={() => navigation.goBack()}>
//       <Image
//         source={require('../assets/iconBack.png')}
//         style={styles.backIcon}
//       />
      
//     </TouchableOpacity>
//     <Text style={styles.title}>AddressBook</Text>
//     </View>
//       <View style={{ backgroundColor: '#f5f5f5', padding: 15, borderRadius: 6 }}>
        
//         <View style={{ flexDirection: 'row' }}>
//           <View style={styles.data}>
//             <Text style={styles.value}>{`${savedData.First} ${savedData.Lastname}`}</Text>
//             <Text style={styles.value1}>{`${savedData.Street}, ${savedData.add1}`}</Text>
//             <Text style={styles.value1}>{`${savedData.add2}, ${savedData.city}, ${savedData.pincode}`}</Text>
//             <Text style={styles.value2}>{`${savedData.selectedState}, Saudi Arabia`}</Text>
//             <Text style={styles.value2}>{`T: ${savedData.PhoneNumber}`}</Text>
//           </View>
//           <View style={{ flexDirection: 'row' }}>
//             <TouchableOpacity
//               onPress={onDelete}
//               style={{
//                 marginRight: 10,
//                 borderRadius: 70,
//                 height: 30,
//                 width: 30,
//               }}>
//               <Image source={require('../assets/iconBin.png')} style={styles.buttonImage} />
//             </TouchableOpacity>
//             <TouchableOpacity
//               onPress={onEdit}
//               style={{
//                 marginRight: 10,
//                 borderRadius: 10,
//                 height: 30,
//               }}>
//               <Image source={require('../assets/iconPencil.png')} style={styles.buttonImage} />
//             </TouchableOpacity>
//           </View>
//         </View>
//       </View>
//     </View>
//   );
// };
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     padding: 20,
//   },
//   container1: {
//     backgroundColor:"#fff", 
     
//      flexDirection:"row",
//      paddingVertical:10
//    },
//   dataContainer: {
//     backgroundColor: '#f5f5f5',
//     padding: 15,
//     borderRadius: 6,
//   },
//   title: {
//     fontSize: 18,
//     color: 'black',
//     fontWeight: '900',
//   marginHorizontal:80
//   },
//   value: {
//     fontSize: 17,
//     color: 'black',
//     marginTop: 5,
//     fontWeight: '700',
//   },
//   value1: {
//     fontSize: 14,
//     color: '#555',
//     marginTop: 5,
//   },
//   value2: {
//     fontSize: 14,
//     color: '#555',
//     marginTop: 5,
//   },
//   buttonContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginTop: 15,
//   },
  
//   buttonImage: {
//     width: 20,
//     height: 20,
//     resizeMode: 'contain',
//     color: '#fff',
//   },
// });

// export default Address;
// import React, { useEffect } from 'react';
// import { View, Text, Button } from 'react-native';
// import axios from 'axios';
// import FormData from 'form-data';

// const YourComponent = () => {
//   useEffect(() => {
//     // Function to make the API request
//     const fetchData = async () => {
//       try {
//         // Create a FormData object and append form fields
//         let data = new FormData();
//         data.append('firstname', 'test');
//         data.append('lastname', 'sdfsdf');
//         data.append('country_id', 'SA');
//         data.append('region', '702');
//         data.append('city', 'Jeddah');
//         data.append('address1', 'dsfsdf');
//         data.append('address2', 'dsfsdf');
//         data.append('address3', 'dsfsdf');
//         data.append('postcode', '');
//         data.append('telephone', '823815546');
//         data.append('set_is_default_billing', '1');
//         data.append('set_is_default_shipping', '1');
//         data.append('store_id', '1');
//         data.append('address_id', '927');

//         // Add customer_id to the FormData
//         data.append('customer_id', '1612');

//         // Set up the axios request configuration
//         let config = {
//           method: 'post',
//           maxBodyLength: Infinity,
//           url: 'https://alharamstores.com/rest/default/V1/api/customerAddressListMethod',
//           headers: { 
//             'Content-Type': 'application/json', 
//             'Authorization': 'Bearer f3mun3f3n7as17s1dghke0fqa8dxz564', 
//             'Cookie': 'PHPSESSID=6ea4b4f6e1ab42e7dab50c0d9cdac7ee; private_content_version=8d31e632dcc21934128bfc5aa0186b0d',
//           },
//           data: data
//         };

//         // Log message before making the API request
//         console.log('Making API request...');

//         // Make the axios request
//         const response = await axios.request(config);

//         // Log the API response
//         console.log('API Response:', response.data);
//       } catch (error) {
//         // Log any errors that occur during the API request
//         console.log('API Error:', error);
//       }
//     };

//     // Call the function when the component mounts
//     fetchData();
//   }, []); // Empty dependency array to run the effect only once

//   return (
//     <View>
//       <Text>Your React Native component content goes here</Text>
//       <Button title="Click me" onPress={() => console.log('Button clicked!')} />
//     </View>
//   );
// };

// export default YourComponent;





import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const Address = ({ route }) => {
  const navigation = useNavigation();

  
  return (
    <View style={styles.container}>
      <Text style={styles.addressText}>No Address.</Text>
      <TouchableOpacity style={styles.addButton} >
        <Text style={styles.addButtonText}>Add Address</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addressText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 20,
  },
  addButton: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 10,
  },
  addButtonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Address;
// import React, { useState, useEffect } from 'react';
// import { View, Text, Button } from 'react-native';
// import translations from './bottom/translations';

// const App = () => {
//   const [language, setLanguage] = useState('en');
//   const [translatedText, setTranslatedText] = useState(translations['en']);

//   useEffect(() => {
//     setTranslatedText(translations[language]);
//   }, [language]);

//   const changeLanguage = () => {
//     const newLanguage = language === 'en' ? 'hi' : language === 'hi' ? 'ur' : 'en';
//     setLanguage(newLanguage);
//   };

//   return (
//     <View style={{alignItems:"center",marginVertical:100}}>
//       <Text>{translatedText.greeting}</Text>
//       <Button title={translatedText.buttonLabel} onPress={changeLanguage} />
//     </View>
//   );
// };

// export default App;