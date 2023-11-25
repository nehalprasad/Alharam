import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import Constant from '../config/Constant';

const YourComponent = ({route}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  // State to track the user's login status
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Function to handle the login or logout action
  const handleAuthentication = () => {
    // If the user is logged in, simulate a logout action
    // In a real app, you would perform actual logout logic here
    if (isLoggedIn) {
      setIsLoggedIn(false);
    } else {
      // If the user is not logged in, navigate to the login screen
      //navigation.navigate('Login');
      navigation.navigate('Signin');
    }
  };
  const handleHomePress = () => {
    // Navigate to the next screen when the "HOME" button is pressed
    navigation.navigate('Home');

    // Close the drawer by updating the state
    setIsDrawerOpen(false);
  };
  const handlePress = () => {
    setIsExpanded(!isExpanded);
  };
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [level3Data, setLevel3Data] = useState([]);
  const [level4Data, setLevel4Data] = useState([]);
  const [selectedButton, setSelectedButton] = useState(null);
  const [selectedLevel4CategoryId, setSelectedLevel4CategoryId] =
    useState(null);
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        let data = new FormData();
        data.append('store_id', '1');

        const response = await axios.post(
          'https://alharamstores.com/rest/all/V1/api/getCategories',
          // `${Constant.URL}/rest/all/V1/api/${Constant.OtherURLs.Categories}`,
          data,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
              Cookie:
                'PHPSESSID=edf28b2e04d2c33b10700eadd3750c6c; private_content_version=8d31e632dcc21934128bfc5aa0186b0d',
            },
          },
        );

        if (Array.isArray(response.data.data.children_data)) {
          setCategories(response.data.data.children_data);
          setLoading(false);
        } else {
          console.error(
            'Children data is not an array:',
            response.data.data.children_data,
          );
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);
  const [isContentVisible, setIsContentVisible] = useState(false);
  const handleCategoryClick = async category => {
    setIsContentVisible(!isContentVisible);
    setSelectedCategory(category);
    //navigation.navigate('ProductList');
    try {
      if (
        Array.isArray(category.children_data) &&
        category.children_data.length > 0
      ) {
        setLevel3Data(category.children_data);
        setLevel4Data([]); // Reset level 4 data when a level 3 category is clicked
      } else {
        setLevel3Data([]);
        setLevel4Data([]);
      }
    } catch (error) {
      console.error('Error fetching Level 3 Categories:', error);
    }
  };

  const handleCategoryClick1 = async category => {
    // setSelectedCategory(category);
    navigation.navigate('ProductList');
    try {
      if (
        Array.isArray(category.children_data) &&
        category.children_data.length > 0
      ) {
        setLevel3Data(category.children_data);
        setLevel4Data([]); // Reset level 4 data when a level 3 category is clicked
      } else {
        setLevel3Data([]);
        setLevel4Data([]);
      }
    } catch (error) {
      console.error('Error fetching Level 3 Categories:', error);
    }
  };
  const handleLevel3CategoryClick = async level3Category => {
    try {
      if (
        Array.isArray(level3Category.children_data) &&
        level3Category.children_data.length > 0
      ) {
        console.log('dataaaaaaa======', level3Category.children_data);
        setLevel4Data(level3Category.children_data);
      } else {
        setLevel4Data([]);
      }
    } catch (error) {
      console.error('Error fetching Level 4 Categories:', error);
    }
  };
  const handleLevel4CategoryClick = level4Category => {
    setSelectedLevel4CategoryId(level4Category.id);
    //navigation.navigate('NextScreen', { selectedCategoryId: level4Category.id });
  };
  return (
    <ScrollView>
      {loading ? (
        // Show loading indicator while data is being fetched
        <View style={styles.loaderContainer}>
          <ActivityIndicator size="large" color="blue" />
        </View>
      ) : (
        <View style={{backgroundColor: '#fff'}}>
          <View>
            {/* <Text>{firstname} {lastname}!</Text> */}
            {/* <Text>Email: {email}</Text> */}
            {/* Add more content as needed */}
          </View>
          <TouchableOpacity
            style={[
              styles.drawerItem,
              selectedButton === 1 ? styles.selectedButton : null,
            ]}
            // onPress={() => handleButtonClick(1)}
            onPress={handleHomePress}>
            <View
              style={{justifyContent: 'space-between', flexDirection: 'row'}}>
              <Text
                style={{
                  fontWeight: '900',
                  fontSize: 17,
                  color: 'black',
                  marginBottom: 20,
                  marginHorizontal: 10,
                }}>
                HOME
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.drawerItem,
              selectedButton === 2 ? styles.selectedButton : null,
            ]}
            //onPress={() => handleButtonClick(2)}
          >
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text
                style={{
                  fontWeight: '900',
                  fontSize: 17,
                  marginBottom: 10,
                  color: 'black',
                  marginHorizontal: 10,
                }}>
                CHANGE LANGUAGE
              </Text>
              <Image
                source={require('../../assets/ukflg.png')} // Replace with the actual path to your logo image
                style={{
                  width: 30,
                  height: 50,
                  resizeMode: 'contain',
                  bottom: 10,
                  marginHorizontal: 15,
                }}
              />
            </View>
          </TouchableOpacity>
          {categories.map((category, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => handleCategoryClick1(category)}>
              <View
                style={{justifyContent: 'space-between', flexDirection: 'row'}}>
                <Text
                  style={{
                    fontWeight: '900',
                    fontSize: 18,
                    marginBottom: 30,
                    marginHorizontal: 10,
                    color: 'black',
                  }}>
                  {category.name}
                </Text>
                <TouchableOpacity onPress={() => handleCategoryClick(category)}>
                  <Icon
                    name={isContentVisible ? 'chevron-down' : 'chevron-right'}
                    size={18}
                    color="#000"
                    style={{marginHorizontal: 20}}
                  />
                </TouchableOpacity>
              </View>

              {isContentVisible &&
              selectedCategory &&
              selectedCategory.id === category.id &&
              level3Data.length > 0 ? (
                <View style={{backgroundColor: '#fff'}}>
                  {level3Data.map((level3Category, level3Index) => (
                    <TouchableOpacity
                      key={level3Index}
                      onPress={() => handleLevel3CategoryClick(level3Category)}>
                      <View style={{backgroundColor: '#fff'}}>
                        <View
                          style={{
                            justifyContent: 'space-between',
                            flexDirection: 'row',
                            marginBottom: 20,
                          }}>
                          <Text
                            style={{
                              fontWeight: '500',
                              fontSize: 18,
                              color: 'black',
                              marginHorizontal: 30,
                            }}>
                            {level3Category.name}
                          </Text>
                          <Icon
                            name={'chevron-right'}
                            size={16}
                            color="#000"
                            style={{marginHorizontal: 20}}
                          />
                        </View>
                        {/* Optionally, you can handle level 4 categories here */}
                        {isContentVisible && level4Data.length > 0 && (
                          <View>
                            {level4Data.map((level4Category, level4Index) => (
                              <TouchableOpacity
                                onPress={() =>
                                  handleLevel4CategoryClick(level4Category)
                                }>
                                <View
                                  key={level4Index}
                                  style={{
                                    justifyContent: 'space-between',
                                    flexDirection: 'row',
                                  }}>
                                  <Text
                                    style={{
                                      fontWeight: '300',
                                      fontSize: 18,
                                      marginBottom: 10,
                                      marginHorizontal: 50,
                                      color:
                                        selectedLevel4CategoryId ===
                                        level4Category.id
                                          ? 'gray'
                                          : 'gray',
                                    }}>
                                    {level4Category.name}
                                  </Text>
                                </View>
                              </TouchableOpacity>
                            ))}
                          </View>
                        )}
                      </View>
                    </TouchableOpacity>
                  ))}
                </View>
              ) : null}
            </TouchableOpacity>
          ))}
          <TouchableOpacity
            style={[
              styles.drawerItem,
              selectedButton === 3 ? styles.selectedButton : null,
            ]}
            onPress={handleAuthentication}>
            <Text
              style={{
                fontWeight: '900',
                fontSize: 17,
                marginBottom: 20,
                color: 'black',
                marginHorizontal: 10,
              }}>
              CUSTOMER SERVICE
            </Text>
          </TouchableOpacity>

          {/* {isLoggedIn ? (
        <TouchableOpacity
        style={[
          styles.drawerItem,
          selectedButton === 4 ? styles.selectedButton : null,
        ]}
        onPress={handleAuthentication}
      >
        <Text style={{fontWeight:"900",fontSize:17,marginBottom:10,color:"black",marginHorizontal:10}}>LOGOUT</Text>
      </TouchableOpacity>
      ) : (
        <TouchableOpacity
                style={[
                  styles.drawerItem,
                  selectedButton === 4 ? styles.selectedButton : null,
                ]}
                onPress={handleAuthentication}
              >
                <Text style={{fontWeight:"900",fontSize:17,marginBottom:10,color:"black",marginHorizontal:10}}>LOGIN</Text>
              </TouchableOpacity>
      )} */}
        </View>
      )}
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  loaderContainer: {
    flex: 1,
    paddingVertical: 250,
  },
});
export default YourComponent;
// import React, { useEffect, useState } from 'react';
// import { View, Text, ScrollView } from 'react-native';
// import axios from 'axios';
// import FormData from 'form-data';

// const YourComponent = () => {
//   const [regionData, setRegionData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const data = new FormData();
//         data.append('country_code', 'sa');
//         data.append('store_id', '1');

//         const response = await axios.post(
//           'https://alharamstores.com/rest/V1/api/countryToStateMethod',
//           data,
//           {
//             headers: {
//               'Content-Type': 'multipart/form-data',
//               'Cookie': 'PHPSESSID=1e2d24296a5655b424e6c050de176e77; private_content_version=8d31e632dcc21934128bfc5aa0186b0d',
//             },
//             maxBodyLength: Infinity,
//           }
//         );

//         const responseData = response.data;

//         if (responseData && responseData.data && Array.isArray(responseData.data)) {
//           setRegionData(responseData.data);
//         } else {
//           console.log("Invalid response format. Expected an array.");
//           console.log("Response Data:", responseData);
//         }
//       } catch (error) {
//         console.error(error);
//         // Handle errors appropriately (e.g., show an error message to the user)
//       }
//     };

//     // Call the function to make the API request
//     fetchData();
//   }, []); // Empty dependency array ensures the effect runs once when the component mounts

//   return (
//     <View>
//       <Text>Your React Native Component</Text>
//       <ScrollView>
//         {regionData.map((item, index) => (
//           <Text key={index}>{item.default_name}</Text>
//         ))}
//       </ScrollView>
//     </View>
//   );
// };

// export default YourComponent;
// import React, { useEffect, useState } from 'react';
// import { View, Text, ScrollView } from 'react-native';
// import axios from 'axios';
// import FormData from 'form-data';

// const YourComponent = () => {
//   const [regionData, setRegionData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const data = new FormData();
//         data.append('country_code', 'sa');
//         data.append('store_id', '1');

//         const response = await axios.post(
//           'https://alharamstores.com/rest/V1/api/countryToStateMethod',
//           data,
//           {
//             headers: {
//               'Content-Type': 'multipart/form-data',
//               'Cookie': 'PHPSESSID=1e2d24296a5655b424e6c050de176e77; private_content_version=8d31e632dcc21934128bfc5aa0186b0d',
//             },
//             maxBodyLength: Infinity,
//           }
//         );

//         const responseData = response.data;

//         if (responseData && responseData.data && Array.isArray(responseData.data)) {

//           setRegionData(responseData.data);
//         } else {
//           console.log("Invalid response format. Expected an array.");
//           //console.log("Response Data:", responseData);
//         }
//       } catch (error) {
//         console.error("this is---",error);
//         // Handle errors appropriately (e.g., show an error message to the user)
//       }
//     };

//     // Call the function to make the API request
//     fetchData();
//   }, []); // Empty dependency array ensures the effect runs once when the component mounts

//   return (
//     <View>
//       <Text>Your React Native Componentsssasdsads</Text>
//       <ScrollView>
//         {regionData.map((item, index) => (
//           <Text key={index}>{item.default_name}</Text>
//         ))}
//       </ScrollView>
//     </View>
//   );
// };

// export default YourComponent;
