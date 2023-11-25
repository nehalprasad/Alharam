import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView, FlatList, TouchableWithoutFeedback, ActivityIndicator, } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import File from '../drawer/File'; 
import Constant from '../config/Constant';
const YourComponent = () => {
  const navigation = useNavigation();
  const [apiResponse, setApiResponse] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedButton, setSelectedButton] = useState(null);  
  const [loading, setLoading] = useState(true);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const defaultSelectedCategory = apiResponse && apiResponse.data && apiResponse.data.length > 0
  ? apiResponse.data[0] // Assuming the first category should be the default selected category
  : null;

  useEffect(() => {
    // Define the API request details here
    var myHeaders = new Headers();
    myHeaders.append("Cookie", "PHPSESSID=61b962bca30f9e81047e6ae6a1e0be12; private_content_version=8d31e632dcc21934128bfc5aa0186b0d");
    var formdata = new FormData();
    formdata.append("store_id", "1");
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow'
    };
    // Make the API request
    fetch(`${Constant.URL}/rest/V1/api/${Constant.OtherURLs.MobileCategoriesList}`, requestOptions)
      .then(response => response.json())
      .then(result => {
        setApiResponse(result);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error:', error);
        setLoading(false);
      });
  }, []);
  // const handleCategoryClick = (category) => {
  //   setSelectedCategory(category);
  // };
  const handleCategoryClick = (category) => {
    if (category.image && category.image.trim() !== "") {
      // Check if the category has a valid image URL
      setSelectedCategory(category); 
    } else {
      // Handle the case where the category does not have a valid image URL
      // You can show an alert or handle it in any way you prefer
      //ProductList
      console.log("Category image not available.");
      navigation.navigate('ProductList');
    }
  };
  const handleImageClick = (categoryId, categoryImage) => {
    // Navigate to the next screen and pass the category ID and image as parameters
    navigation.navigate('ProductList', {

      categoryId: categoryId,
      categoryImage: categoryImage
    });
  };

  // const renderSubCategoryItem = ({ item }) => (
  //   <TouchableOpacity onPress={() => handleImageClick(item.image)}>
  //     <View style={{ margin: 5, marginHorizontal: 10 }}>
  //       <View style={{ width: 120, height: 230, marginBottom: 10 }}>
          
  //         <Image source={{ uri: item.image }} style={{ width: '90%', height: '100%', borderRadius: 2 }} />
  //         <Text style={{ color: "#fff" }}> {item.category_id}</Text>
  //       </View>
  //     </View>
  //   </TouchableOpacity>
  // );
  const handleImageLoad = () => {
    setLoading(false);
  };
  const onClose = () => {
    // Implement the logic for closing the drawer or performing any other action
    setIsDrawerOpen(false);
  };

  const handleImageError = () => {
    setLoading(false);
    setError(true);
  };
  const renderSubCategoryItem = ({ item }) => {
    if (item.image && item.image.trim() !== "") {
      return (
        <TouchableOpacity onPress={() => handleImageClick(item.category_id, item.image)}>
          <View style={{ margin: 5, marginHorizontal: 10 }}>
            <View style={{ width: 100, height: 200, marginBottom: 10 }}>
              <Image source={{ uri: item.image }} style={{ width: '90%', height: '100%', borderRadius: 2 }} />
              <Text style={{ color: "#fff" }}> {item.category_id}</Text>
            </View>
          </View>
        </TouchableOpacity>
      );
    } else {
      // Handle the case where the image source is empty or null
      // You can show a placeholder image or a default message
      return (
        <TouchableOpacity onPress={() => console.log("Image source is empty or null.")}>
          <View style={{ margin: 5, marginHorizontal: 10 }}>
            <View style={{ width: 120, height: 230, marginBottom: 10 }}>
              {/* Add your placeholder image or default message here */}
              <Text style={{ color: "red" }}>No Image Available</Text>
            </View>
          </View>
        </TouchableOpacity>
      );
    }
  };
  
  return (
    <TouchableWithoutFeedback >

      <View>
        <View>
          <View style={styles.drawerBar}>
            {/* Left side */}
            <View style={styles.leftContainer}>
              <TouchableOpacity  onPress={handleDrawerToggle} style={styles.drawerToggle}>
                <Icon name="bars" size={24} color="black" />
              </TouchableOpacity>
             
              <View style={styles.logoContainer}>
                <Image
                  source={require('../../assets/Logo.png')} // Replace with the actual path to your logo image
                  style={styles.logoImage}
                />
              </View>
            </View>
            {/* Drawer */}

            {/* Right side */}
            <View style={styles.rightContainer}>
              {/* Search Icon */}


              {/* Add to Cart Icon */}
              <TouchableOpacity onPress={() => console.log('Add to Cart button pressed')} >
                <Icon name="shopping-cart" size={24} color="black" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
       {/* Drawer Content */}
      
        {loading ? (
          // Show loading indicator while data is being fetched
          <View style={styles.loaderContainer}>
            <ActivityIndicator size="large" color="blue" />
          </View>
        ) : (
          // Render your content once data is loaded
          <View>
            <View style={{ padding: 0, backgroundColor: "#fff", justifyContent: "space-between", flexDirection: "row" }}>

              <View style={styles.categoryContainer}>
               
              {/* {apiResponse &&
        apiResponse.status === 1 &&
        apiResponse.data &&
        apiResponse.data.length > 0 &&
        apiResponse.data.map(category => (
          <TouchableOpacity
            key={category.category_id}
            style={[
              styles.categoryButton,
              (selectedCategory && selectedCategory.title === category.title) ||
              (defaultSelectedCategory && defaultSelectedCategory.title === category.title)
                ? styles.selectedCategory
                : null,
            ]}
            onPress={() => handleCategoryClick(category)}
          >
            <Text style={styles.categoryButtonText}>{category.title}</Text>
          </TouchableOpacity>
        ))} */}
         {apiResponse &&
        apiResponse.status === 1 &&
        apiResponse.data &&
        apiResponse.data.length > 0 &&
        apiResponse.data.map(category => (
          <TouchableOpacity
            key={category.category_id}
            style={[
              styles.categoryButton,
              (selectedCategory && selectedCategory.title === category.title) ? styles.selectedCategory :
              (defaultSelectedCategory && defaultSelectedCategory.title === category.title) ? styles.defaultSelectedCategory :
              null,
            ]}
            onPress={() => handleCategoryClick(category)}
          >
            <Text style={styles.categoryButtonText}>{category.title}</Text>
          </TouchableOpacity>
        ))}
              </View>
              <View>
              {selectedCategory || defaultSelectedCategory ? (
              <View style={styles.selectedSubCategoryContainer}>
                <Image
                  source={{ uri: (selectedCategory || defaultSelectedCategory).image }}
                  style={styles.selectedSubCategoryImage}
                />
              </View>
            ) : null}
            {selectedCategory || defaultSelectedCategory ? (
              <FlatList
                data={(selectedCategory || defaultSelectedCategory).sub_category}
                renderItem={renderSubCategoryItem}
                keyExtractor={(item, index) => index.toString()}
                numColumns={2}
                contentContainerStyle={styles.subCategoryContainer}
              />
            ) : null}
               
              </View>
              
            </View>
            
          </View>
      
        )}
        {isDrawerOpen && (
        <View style={styles.drawer}>
          <View style={{ flexDirection: 'row', justifyContent:"flex-end",marginRight:10}}>
  <TouchableOpacity
    style={{  }}
    onPress={onClose}
  >
    <Image
      source={require('../../assets/close(1).png')}
      style={{ width: 20, height: 40, resizeMode: 'contain' }}
    />
  </TouchableOpacity>
  {/* Your other components can go here */}
</View>
            <ScrollView>




        <File />
       
      
</ScrollView>
        </View>
      )}
      
      </View>
      
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  categoryContainer: {
    backgroundColor: "#fff",
    width: "30%"
  },
  categoryButton: {
    backgroundColor: 'lightgray',
    padding: 10,
    width: '100%',
  },
  selectedCategory: {
    backgroundColor: 'white', // Customize the selected category button style
  },
  categoryButtonText: {
    color: 'black',
    fontSize: 16,
    textAlign: 'center',
  },
  subCategoryContainer: {
  },
  subCategoryItem: {
    borderRadius: 5,
    backgroundColor: '#fff',
    padding: 10
  },
  subCategoryImage: {
    width: '40%',
    height: 50,
    borderRadius: 5,
  },
  selectedSubCategoryImage: {
    width: 250,
    height: 90,
    resizeMode: "stretch",
    borderRadius: 10,
  },
  selectedSubCategoryImage2: {
    width: 200,
    height: 90,
    resizeMode: "stretch",
    borderRadius: 10,
  },
  getCategoryBanner: {
    marginHorizontal: 20
  },
  drawerBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 0,
    backgroundColor: '#ffffff',

  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoContainer: {
    flex: 0.9,
    alignItems: 'center',
    // backgroundColor:"blue"
  },
  logoImage: {
    width: 100,
    height: 50,
    resizeMode: 'contain',
  },
  rightContainer: {
    right: 10
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  
  logo: {
    width: 100,
    height: 40,
    resizeMode: 'contain',
  },
  
  defaultSelectedCategory: {
    backgroundColor: 'lightgray', // Change background color to green for default selected category
  },
 
  
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:"70%"
  },
  drawerToggle: {
    margin: 16,
  },
  drawer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: "80%", // Adjust the width of the drawer as needed
    height: 900,
    backgroundColor: '#fff',
    elevation: 5,
    paddingTop: 30, // Adjust the paddingTop to leave space for the status bar
  },
  drawerItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  selectedButton: {
    backgroundColor: '#fff', // Change background color to red when selected
  },
});

export default YourComponent;
// import React, { useEffect, useState,useRef } from 'react';
// import {Dimensions,Modal, View, Text, TouchableOpacity, Image, ScrollView, StyleSheet,TouchableWithoutFeedback,ActivityIndicator,  } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import { useNavigation } from '@react-navigation/native';
// import File from "../drawer/File";
// import Constant from '../config/Constant';
// const CustomDrawer = ({ onClose }) => {
//   const [selectedButton, setSelectedButton] = useState(null); 
//   const [isExpanded, setIsExpanded] = useState(false);
//   const [isDrawerOpen, setIsDrawerOpen] = useState(false);
//   const handleHomePress = () => {
//     // Navigate to the next screen when the "HOME" button is pressed
//     navigation.navigate('Home');

//     // Close the drawer by updating the state
//     setIsDrawerOpen(false);
//   };
//   const handlePress = () => {
//     setIsExpanded(!isExpanded);
//   };
//   const [categories, setCategories] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState(null);
//   const [level3Data, setLevel3Data] = useState([]);
//   const [level4Data, setLevel4Data] = useState([]);
  
// const [selectedLevel4CategoryId, setSelectedLevel4CategoryId] = useState(null);
// const navigation = useNavigation();
// const [loading, setLoading] = useState(true);
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         let data = new FormData();
//         data.append('store_id', '1');

//         const response = await axios.post(
//           'https://alharamstores.com/rest/all/V1/api/getCategories',
//           // `${Constant.URL}/rest/all/V1/api/${Constant.OtherURLs.Categories}`,
//           data,
//           {
//             headers: {
//               'Content-Type': 'multipart/form-data',
//               'Cookie': 'PHPSESSID=edf28b2e04d2c33b10700eadd3750c6c; private_content_version=8d31e632dcc21934128bfc5aa0186b0d',
//             },
//           }
//         );

//         if (Array.isArray(response.data.data.children_data)) {
//           setCategories(response.data.data.children_data);
//           setLoading(false);
//         } else {
//           console.error('Children data is not an array:', response.data.data.children_data);
//         }
//       } catch (error) {
//         console.error('Error:', error);
//       }
//     };

//     fetchData();
//   }, []);
//   const [isContentVisible, setIsContentVisible] = useState(false);
//   const handleCategoryClick = async (category) => {
//     setIsContentVisible(!isContentVisible);
//     setSelectedCategory(category);
//     //navigation.navigate('ProductList');
//     try {
//       if (Array.isArray(category.children_data) && category.children_data.length > 0) {
//         setLevel3Data(category.children_data);
//         setLevel4Data([]); // Reset level 4 data when a level 3 category is clicked
//       } else {
//         setLevel3Data([]);
//         setLevel4Data([]);
//       }
//     } catch (error) {
//       console.error('Error fetching Level 3 Categories:', error);
//     }
//   };

//   const handleCategoryClick1 = async (category) => {
//     // setSelectedCategory(category);
//     navigation.navigate('ProductList');
//     try {
//       if (Array.isArray(category.children_data) && category.children_data.length > 0) {
//         setLevel3Data(category.children_data);
//         setLevel4Data([]); // Reset level 4 data when a level 3 category is clicked
//       } else {
//         setLevel3Data([]);
//         setLevel4Data([]);
//       }
//     } catch (error) {
//       console.error('Error fetching Level 3 Categories:', error);
//     }
//   };
//   const handleLevel3CategoryClick = async (level3Category) => {
//     try {
//       if (Array.isArray(level3Category.children_data) && level3Category.children_data.length > 0) {
//         console.log("dataaaaaaa======",level3Category.children_data);
//         setLevel4Data(level3Category.children_data);
//       } else {
//         setLevel4Data([]);
//       }
//     } catch (error) {
//       console.error('Error fetching Level 4 Categories:', error);
//     }
//   };
//   const handleLevel4CategoryClick = (level4Category) => {
//     setSelectedLevel4CategoryId(level4Category.id);
//     //navigation.navigate('NextScreen', { selectedCategoryId: level4Category.id });
//   };
//   return (
//     <View style={styles.drawerContent}>
//       {/* Add your custom drawer content here */}

//       {/* Close button */}
//       <ScrollView>
//  <File />
//     </ScrollView>
      
//     </View>
//   );
// };
// const YourComponent = ({ route }) => {
//   const [drawerVisible, setDrawerVisible] = useState(false);
//   const flatListRef = useRef(null);
//   useEffect(() => {
//     const interval = setInterval(() => {
//       if (flatListRef.current) {
//         flatListRef.current.scrollToIndex({
//           index:
//             (flatListRef.current.index + 1) % data.length,
//           animated: true,
//         });
//       }
//     }, 5000); // Change the interval according to your preference (in milliseconds)

//     return () => clearInterval(interval); // Clear interval on component unmount
//   }, [data]);
//   const handleButtonPress = () => {
//     setDrawerVisible(!drawerVisible);
//     setIsDrawerOpen(!isDrawerOpen);
//   };
//   const closeDrawer = () => {
//     setDrawerVisible(false);
//   };
//   const [isDrawerOpen, setIsDrawerOpen] = useState(false); // Local state to track whether the drawer is open or closed


//   const handleButtonPress1 = () => {
//     // Toggle the isDrawerOpen state when the button is pressed
//     setIsDrawerOpen(!isDrawerOpen);
//   };
  
//    const navigation = useNavigation();

//   const [data, setData] = useState(null);
  
//   const [loading, setLoading] = useState(true);
  



 




//   const scrollViewRef = useRef(null);
//   const [initialImageDisplayed, setInitialImageDisplayed] = useState(false);
 
//   useEffect(() => {
//     let interval;

//     if (initialImageDisplayed) {
//       interval = setInterval(() => {
//         if (scrollViewRef.current) {
//           const newOffset = (scrollViewRef.current.contentOffset?.x || 0) + Dimensions.get('window').width;
//           scrollViewRef.current.scrollTo({ x: newOffset, animated: true });
//         }
//       }, 3000); // Change the interval according to your preference (in milliseconds)
//     } else {
//       // If initial image is not displayed yet, set a timeout to display it
//       setTimeout(() => {
//         setInitialImageDisplayed(true);
//       }, 3000); // Change the timeout duration to match the interval duration
//     }

//     return () => clearInterval(interval); // Clear interval on component unmount
//   }, [initialImageDisplayed]);
//   return (
//     <TouchableWithoutFeedback onPress={closeDrawer} >
//       {/* <TouchableWithoutFeedback onPress={closeDrawer}></TouchableWithoutFeedback> */}
//     <View style={styles.container}>
//       {/* Custom Drawer Bar */}    

//           // Show loading indicator while data is being fetched
//           <View style={styles.loaderContainer}>
//             <ActivityIndicator size="large" color="blue" />           
//           </View>
     
//           // Render your content once data is loaded
//           <View>
//    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
//   <TouchableOpacity style={styles.getCategoryBanner} onPress={handleButtonPress}>
//     <Icon name="bars" size={24} color="black" />
//   </TouchableOpacity>

//   <View style={{ }}>
//     <Image
//       source={require('../../assets/Logo.png')} // Replace with the actual path to your logo image
//       style={styles.logoImage}
//     />
//   </View>
//   {/* Right side */}
//   <View style={styles.rightContainer}>
//     {/* Search Icon */}
//     <TouchableOpacity onPress={() => console.log('Search button pressed')} style={{ marginRight: 10 }}>
//       <Icon name="search" size={30} color="gray" />
//     </TouchableOpacity>
//     <TouchableOpacity style={{ marginRight: 10 }}>
//       <Icon name='heart-o' size={30} color='gray' />
//     </TouchableOpacity>
//     {/* Add to Cart Icon */}
//     <TouchableOpacity onPress={() => console.log('Add to Cart button pressed')}>
//       <Icon name="shopping-cart" size={30} color="gray" />
//     </TouchableOpacity>
//   </View>
// </View>
//           <ScrollView style={{ backgroundColor: '#fff' }}>
//             {/* ... rest of your component ... */}
//             <ScrollView style={{ backgroundColor: "#fff" }}>    
       
   
    
    
 
    

   

 
 


  

//   </ScrollView>
 
//           </ScrollView>
//           </View>
     

//       {/* Rest of YourComponent */}
//       <Modal visible={drawerVisible} transparent={true}>
//           <CustomDrawer onClose={() => setDrawerVisible(false)} />
//         </Modal>
      
//     </View>
//     </TouchableWithoutFeedback>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   getCategoryBanner:{

//   marginHorizontal:20
//   },
//   drawerBar: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     padding: 10, // Set the fixed padding for the drawer bar
//     backgroundColor: '#ffffff',
//     borderBottomWidth: 1,
//     borderBottomColor: '#ccc',
//     height: 20, // Set the fixed height for the drawer bar
//   },
//   leftContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   logoContainer: {
//     flex: 1,
//     alignItems: 'center',

//   },
//   loaderContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   logoImage: {
//     width: 100,
//     height: 50,
//     resizeMode: 'contain',
   
//     left:20
//   },
//   rightContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between', 
//     padding:10, 
    
//   },
//   schoolview: {
//     backgroundColor: "#fff"
//   },
//   drawerContent: {
//     backgroundColor: 'white',
//     padding: 20,
//     elevation: 5,
//   },
//   drawerButton: {
//     padding: 10,
//     marginBottom: 20,
//     borderWidth: 1,
//     borderColor: 'black',
//   },
//   drawerContent: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     width: 300,
//     height:"100%",
//     backgroundColor: '#fff',
//     paddingTop: 20,
//   },
//   rowContainer: {
//     flexDirection: 'row', // Arrange buttons and data in a row
//     alignItems: 'center', // Center items vertically
//   },
//   buttonContainer: {
//     flex: 1, // Buttons take equal space
//   },
//   drawerItem: {
//     padding: 10,
    
//   },
//   selectedButton: {
//     backgroundColor: '#fff', // Change background color to red when selected
//   },
//   categoryItem: {
//     margin: 10,
//     alignItems: 'center',
//   },
//   selectedCategory: {
//     borderColor: 'blue', // Border color for selected category
//     borderRadius: 10, // Border radius for selected category
//   },
//   productContainer: {
//     width: 120, // Set your desired fixed width here
//     margin: 10, // Set margin for spacing between product items
//     backgroundColor: '#fff', // Set background color if needed
//     height:200,
//     alignItems:"center"
//   },
//   productImage: {
//     width: '100%', // Make sure the image takes 100% of the container's width
//     height: 150, // Set the desired height for the image
//   },
//   productInfo: {
//     padding: 10, // Set padding for the text inside the container
//   },
//   productName: {
//     fontSize: 17, // Set font size for the product name
//     fontWeight: 'bold', // Set font weight if needed
    
//   },
//   productPrice: {
//     fontSize: 15, // Set font size for the product price
//     color: 'red', // Set text color for the product price
//   },
// });

// export default YourComponent;












