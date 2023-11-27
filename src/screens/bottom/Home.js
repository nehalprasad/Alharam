// import React, { useEffect, useState, useRef } from 'react';
// import { Dimensions, Modal, View, Text, TouchableOpacity, Image,  StyleSheet, TouchableWithoutFeedback, ActivityIndicator, ScrollView,  } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import { useNavigation } from '@react-navigation/native';
// import axios from 'axios';
// import File from "../drawer/File";
// import Constant from '../config/Constant';
// const CustomDrawer = ({ onClose }) => {
//   const [selectedButton, setSelectedButton] = useState(null);
//   const [isExpanded, setIsExpanded] = useState(false);
//  // State to track the user's login status
//  const [isLoggedIn, setIsLoggedIn] = useState(false);

//  // Function to handle the login or logout action
//  const handleAuthentication = () => {
//    // If the user is logged in, simulate a logout action
//    // In a real app, you would perform actual logout logic here
//    if (isLoggedIn) {
//      setIsLoggedIn(false);
//    } else {
//      // If the user is not logged in, navigate to the login screen
//      //navigation.navigate('Login');
//      navigation.navigate('Signin');
//    }
//  };
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
//   <View style={{ flexDirection: 'row', justifyContent:"flex-end",marginRight:10}}>
//   <TouchableOpacity
//     style={{  }}
//     onPress={onClose}
//   >
//     <Image
//       source={require('../../assets/close(1).png')}
//       style={{ width: 20, height: 40, resizeMode: 'contain' }}
//     />
//   </TouchableOpacity>
//   {/* Your other components can go here */}
// </View>
// <ScrollView>
// {loading ? (
//           // Show loading indicator while data is being fetched
//           <View style={styles.loaderContainer}>
//           <ActivityIndicator size="large" color="blue" />           
//         </View>
//         ) : (    
//       <View style={{backgroundColor:"#fff"}}>
//          <View>
//       {/* <Text>{firstname} {lastname}!</Text> */}
//       {/* <Text>Email: {email}</Text> */}
//       {/* Add more content as needed */}
//     </View>
//         <TouchableOpacity
//                 style={[
//                   styles.drawerItem,
//                   selectedButton === 1 ? styles.selectedButton : null,
//                 ]}
//                 // onPress={() => handleButtonClick(1)}
//                 onPress={handleHomePress}
//               >
//                 <View style={{justifyContent:"space-between",flexDirection:"row"}}>

//                 <Text style={{fontWeight:"900",fontSize:17,color:"black",marginBottom:20,marginHorizontal: 10}}>HOME</Text>
               
//                 </View>
//               </TouchableOpacity>
//               <TouchableOpacity
//                 style={[
//                   styles.drawerItem,
//                   selectedButton === 2 ? styles.selectedButton : null,
//                 ]}
//                 //onPress={() => handleButtonClick(2)}
//               >
//                 <View style={{flexDirection:"row",justifyContent:"space-between"}}>

//                 <Text style={{fontWeight:"900",fontSize:17,marginBottom:10,color:"black",marginHorizontal: 10}}>CHANGE LANGUAGE</Text>
//                 <Image
//               source={require('../../assets/ukflg.png')} // Replace with the actual path to your logo image
//               style={{ width: 30,
//                 height: 50,
//                 resizeMode: 'contain',bottom:10,marginHorizontal:15}}
//             />
//                 </View>
//               </TouchableOpacity>
//         {categories.map((category, index) => (
//           <TouchableOpacity key={index} onPress={() => handleCategoryClick1(category)}>
//             <View style={{ justifyContent: 'space-between', flexDirection: 'row',  }}>
//               <Text style={{ fontWeight: '900', fontSize: 18, marginBottom: 30, marginHorizontal: 10, color: 'black',}}>{category.name}</Text>
//               <TouchableOpacity onPress={() => handleCategoryClick(category)} >

//               <Icon name={isContentVisible ? 'chevron-down' : 'chevron-right'}  size={18} color="#000" style={{ marginHorizontal:20}}/>
//               </TouchableOpacity>
//             </View>
            
   
//             {isContentVisible && selectedCategory && selectedCategory.id === category.id && level3Data.length > 0 ? (
//               <View style={{backgroundColor:"#fff"}}>
//                 {level3Data.map((level3Category, level3Index) => (
//                   <TouchableOpacity key={level3Index} onPress={() => handleLevel3CategoryClick(level3Category)} >
//                     <View style={{backgroundColor:"#fff"}}>
//                       <View style={{justifyContent:"space-between",flexDirection:"row",marginBottom:20,  
//  }}>

//                       <Text style={{ fontWeight:'500', fontSize: 18,  color: 'black',marginHorizontal:30 }}>{level3Category.name}</Text>
//                       <Icon   name={ 'chevron-right'}size={16} color="#000" style={{ marginHorizontal:20,}}/>
//                       </View>
//                       {/* Optionally, you can handle level 4 categories here */}
//                       { isContentVisible && level4Data.length > 0 && (
//           <View>
            
//             {level4Data.map((level4Category, level4Index) => (
//             <TouchableOpacity onPress={() => handleLevel4CategoryClick(level4Category)}>

//               <View key={level4Index} style={{justifyContent:"space-between",flexDirection:"row"}}>
//                 <Text style={{ fontWeight: '300', fontSize: 18, marginBottom: 10, marginHorizontal: 50,color: selectedLevel4CategoryId === level4Category.id ? 'gray' : 'gray'}}>{level4Category.name}</Text>
               
//               </View>
//             </TouchableOpacity>
//             ))}
//           </View>
//         )}
//                     </View>
//                   </TouchableOpacity>
//                 ))}
//               </View>
//             ) : null}
//           </TouchableOpacity>
//         ))}
//  <TouchableOpacity
//                 style={[
//                   styles.drawerItem,
//                   selectedButton === 3 ? styles.selectedButton : null,
//                 ]}
//                 onPress={handleAuthentication}
//               >
//                 <Text style={{fontWeight:"900",fontSize:17,marginBottom:20,color:"black",marginHorizontal:10}}>CUSTOMER SERVICE</Text>
//               </TouchableOpacity>
              
              
//               {/* {isLoggedIn ? (
//         <TouchableOpacity
//         style={[
//           styles.drawerItem,
//           selectedButton === 4 ? styles.selectedButton : null,
//         ]}
//         onPress={handleAuthentication}
//       >
//         <Text style={{fontWeight:"900",fontSize:17,marginBottom:10,color:"black",marginHorizontal:10}}>LOGOUT</Text>
//       </TouchableOpacity>
//       ) : (
//         <TouchableOpacity
//                 style={[
//                   styles.drawerItem,
//                   selectedButton === 4 ? styles.selectedButton : null,
//                 ]}
//                 onPress={handleAuthentication}
//               >
//                 <Text style={{fontWeight:"900",fontSize:17,marginBottom:10,color:"black",marginHorizontal:10}}>LOGIN</Text>
//               </TouchableOpacity>
//       )} */}
//       </View>
//         )}
//     </ScrollView>
//       {/* <ScrollView>
//         <File />
//       </ScrollView> */}
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
//   //sconst { email, firstname, lastname } = route.params;
//   //const [isAuthenticated, setIsAuthenticated] = useState(!!email);
//   const navigation = useNavigation();
//   // const handleButtonPress = () => {
//   //   // Navigate to the "NewScreen"
//   //   navigation.navigate('ProductList');
//   // };
//   // const handleLogout = () => {
//   //   // Perform logout actions, such as clearing user data, updating state, etc.
//   //   setIsAuthenticated(false);
//   // };
//   const [data, setData] = useState(null);
//   const [categories, setCategories] = useState([]);
//   const [topBanner, setTopBanner] = useState(null);
//   const [sliderImages, setSliderImages] = useState([]);
//   const [gridBannerImages, setGridBannerImages] = useState([]);
//   const [brands, setBrands] = useState([]);
//   const [cartItem, setCartItem] = useState([]);
//   const [featuredProducts, setFeaturedProducts] = useState([]);
//   const [gameCategoryProducts, setGameCategoryProducts] = useState([]);
//   const [schoolSuppliesProducts, setSchoolSuppliesProducts] = useState([]);
//   const [latestProducts, setLatestProducts] = useState([]);
//   const [specialOfferImage, setSpecialOfferImage] = useState(null);
//   const [specialOfferName, setSpecialOfferName] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderImages.length);
//     }, 3000); // Change image every 3 seconds

//     return () => clearInterval(interval); // Clear the interval when component unmounts
//   }, []); // Empty dependency array ensures the effect runs once after the initial render

//   useEffect(() => {
//     // Define the API request details
//     const apiUrl = "https://alharamstores.com/rest/V1/api/getHomeSliderMethod";
//     //const apiUrl = `${Constant.URL}/rest/V1/api/${Constant.OtherURLs.Home}`;

//     const myHeaders = new Headers();
//     myHeaders.append("Cookie", "PHPSESSID=7fc14bb68cbd1945667dc530d818c046; private_content_version=8d31e632dcc21934128bfc5aa0186b0d");

//     const formdata = new FormData();
//     formdata.append("store_id", "1");
//     formdata.append("token", "tqjtzodjye4wl0xp0y4ckrf7x5a85zxs");
//     formdata.append("dev", "1");
//     formdata.append("device_version", "1.0.32");
//     formdata.append("device_type", "ios");

//     const requestOptions = {
//       method: 'POST',
//       headers: myHeaders,
//       body: formdata,
//       redirect: 'follow'
//     };

//     // Make the API request
//     fetch(apiUrl, requestOptions)
//       .then(response => response.json())
//       .then(data => {
//         if (data.data.special_offer) {
//           console.log("dataaaaa-----", data);
//           setSpecialOfferImage(data.data.special_offer.image);
//           setSpecialOfferName(data.data.special_offer.name);
//         }
//         // Store the entire API response in state
//         setData(data);
//         // Conditionally handle different parts of the response
//         if (data.data.brands) {
//           setBrands(data.data.brands);
//         }
//         if (data.data.cartItem) {
//           setCartItem(data.data.cartItem);
//         }
//         if (data.data.categories) {
//           setCategories(data.data.categories);
//         }
//         if (data.data.featured_products) {
//           setFeaturedProducts(data.data.featured_products);
//         }
//         if (data.data.game_category_products) {
//           setGameCategoryProducts(data.data.game_category_products);
//         }
//         if (data.data.top_banner) {
//           setTopBanner(data.data.top_banner);
//         }
//         if (data.data.slider) {
//           setSliderImages(data.data.slider);
//         }
//         if (data.data.grid_banner) {
//           setGridBannerImages(data.data.grid_banner);
//         }
//         if (data.data.latest_products) {
//           setLatestProducts(data.data.latest_products);
//         }
//         if (data && data.data && data.data.school_supplies_category_products) {
//           setSchoolSuppliesProducts(data.data.school_supplies_category_products);
//         }
//         setLoading(false);
//       })
//       .catch(error => {
//         // Handle any errors here
//         console.log('Error:', error);
//         setLoading(false);
//       });
//   }, []); // The empty dependency array ensures this effect runs only once

//   const [selectedButton, setSelectedButton] = useState(null);

//   const [selectedCategoryId, setSelectedCategoryId] = useState(null);

//   const handleCategoryClick = (categoryId) => {
//     setSelectedCategoryId(categoryId);
//     console.log('Selected Category ID:', categoryId);
//     // Navigate to the next screen with the selected category's ID
//     navigation.navigate('NextScreen', { categoryId });
//   };
//   const handleCategoryPress = (category) => {
//     if (category.in_banner === 1) {
//       // Navigate to the next page
//       navigation.navigate('NextScreen'); // Replace 'NextPage' with the name of your next screen
//     } else {
//       // Navigate to the profile screen
//       navigation.navigate('ProductList'); // Replace 'ProfileScreen' with the name of your profile screen
//     }
//     handleCategoryClick(category.id);
//   };
//   const scrollViewRef = useRef(null);
//   const [initialImageDisplayed, setInitialImageDisplayed] = useState(false);
//   // useEffect(() => {
//   //   const interval = setInterval(() => {
//   //     if (scrollViewRef.current) {
//   //       const newOffset = (scrollViewRef.current.contentOffset?.x || 0) + Dimensions.get('window').width;
//   //       scrollViewRef.current.scrollTo({ x: newOffset, animated: true });
//   //     }
//   //   }, 3000); // Change the interval according to your preference (in milliseconds)

//   //   return () => clearInterval(interval); // Clear interval on component unmount
//   // }, []);
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
//       <View style={styles.container}>
//         {/* Custom Drawer Bar */}
//         {loading ? (
//           // Show loading indicator while data is being fetched
//           <View style={styles.loaderContainer}>
//             <ActivityIndicator size="large" color="blue" />
//           </View>
//         ) : (
//           // Render your content once data is loaded
//           <View>
//             <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
//               <TouchableOpacity style={styles.getCategoryBanner} onPress={handleButtonPress}>
//                 <Icon name="bars" size={24} color="black" />
//               </TouchableOpacity>

//               <View style={{}}>
//                 <Image
//                   source={require('../../assets/Logo.png')} // Replace with the actual path to your logo image
//                   style={styles.logoImage}
//                 />
//               </View>
//               {/* Right side */}
//               <View style={styles.rightContainer}>
//                 {/* Search Icon */}
//                 <TouchableOpacity onPress={() => console.log('Search button pressed')} style={{ marginRight: 10 }}>
//                   <Icon name="search" size={30} color="gray" />
//                 </TouchableOpacity>
//                 <TouchableOpacity style={{ marginRight: 10 }}>
//                   <Icon name='heart-o' size={30} color='gray' />
//                 </TouchableOpacity>
//                 {/* Add to Cart Icon */}
//                 <TouchableOpacity onPress={() => console.log('Add to Cart button pressed')}>
//                   <Icon name="shopping-cart" size={30} color="gray" />
//                 </TouchableOpacity>
//               </View>
//             </View>
//             <ScrollView style={{ backgroundColor: '#fff' }}>
//               {/* ... rest of your component ... */}
//               <ScrollView style={{ backgroundColor: "#fff" }}>
//                 <ScrollView horizontal={true}>
//                   {categories.map((category) => (
//                     <View style={{}}>
//                       <TouchableOpacity
//                         key={category.id}
//                         style={[
//                           styles.categoryItem,
//                           selectedCategoryId === category.id ? styles.selectedCategory : null,
//                         ]}
//                         onPress={() => handleCategoryPress(category)}
//                       >
//                         <Image
//                           source={{ uri: category.image }}
//                           style={{
//                             width: 70,
//                             height: 70,
//                           }}
//                         />
//                         <Text style={{ fontWeight: 'normal', textAlign: 'center', marginTop: 5, margin: 5, }}>

//                           {category.name.replace(/(.{12})/, '$1\n')}
//                         </Text>

//                       </TouchableOpacity>
//                     </View>
//                   ))}
//                 </ScrollView>
//                 {topBanner && (
//                   <View>
//                     <Image
//                       source={{ uri: topBanner.image }}
//                       style={{
//                         width: '100%', height: 20,
//                         alignSelf: 'center',
//                         justifyContent: 'center',
//                       }}
//                     />
//                     {/* <Text>{topBanner.catId}</Text> */}
//                     {/* Add more top_banner data rendering here as needed */}
//                   </View>
//                 )}
//                 {/* <ScrollView horizontal={true}>
//       {sliderImages.map((sliderImage, index) => (
//         <Image
//           key={index}
//           source={{ uri: sliderImage.image }}
//           style={{
//             width: 340,
//             height: 400,
//             margin: 10,
//           }}
//         />
//       ))}
//     </ScrollView> */}
//                 <ScrollView
//                   ref={scrollViewRef}
//                   horizontal
//                   showsHorizontalScrollIndicator={false}
//                   pagingEnabled
//                 >
//                   {sliderImages.map((sliderImage, index) => (
//                     <Image
//                       key={index}
//                       source={{ uri: sliderImage.image }}
//                       style={{
//                         width: Dimensions.get('window').width - 20, // Adjust the width according to your needs
//                         height: 400,
//                         margin: 10,
//                       }}
//                     />
//                   ))}
//                 </ScrollView>
//                 <View style={{ margin: 1, paddingHorizontal: 10 }}>
//                   <Text style={{ fontSize: 17, fontWeight: "600", color: "black" }}>Top Categories</Text>
//                 </View>
//                 <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
//                   {gridBannerImages.map((gridBannerImage, index) => (
//                     <Image
//                       key={index}
//                       source={{ uri: gridBannerImage.image }}
//                       style={{
//                         width: '45%', // Set width to 45% of the container to fit 2 images in a row with some margin
//                         height: 200,
//                         margin: '2.5%', // Set margin to create space between images
//                       }}
//                     />
//                   ))}
//                 </View>
//                 {/* Display the featured_products data */}
//                 <View style={{ margin: 1, paddingHorizontal: 10 }}>
//                   <Text style={{ fontSize: 17, fontWeight: "600", color: "black", margin: 10 }}>FEATURE PRODUCTS</Text>
//                 </View>
//                 <ScrollView horizontal={true}>
//                   {featuredProducts.map((product, index) => (
//                     <View key={index} style={styles.productContainer}>
//                       <Image
//                         source={{ uri: product.image }} // Assuming there's an "image" property in the product data
//                         style={styles.productImage}
//                       />
//                       <View style={styles.productInfo}>
//                         <Text style={styles.productName}>{product.name.length > 5 ? product.name.substring(0, 5) + '...' : product.name}</Text>
//                         <Text style={styles.productPrice}>SAR  {product.id}</Text>
//                       </View>
//                     </View>
//                   ))}
//                 </ScrollView>
//                 <View style={{ margin: 1, paddingHorizontal: 10, margin: 5, flexDirection: "row", justifyContent: "space-between" }}>
//                   <Text style={{ fontSize: 17, fontWeight: "600", color: "black" }}>SPECIAL PRODUCTS</Text>
//                   <TouchableOpacity onPress={handleButtonPress}>
//                     <Text style={{ color: "red", fontSize: 18, fontWeight: "500" }}>View All</Text>
//                   </TouchableOpacity>
//                 </View>
//                 {/* Display the latest_products data */}
//                 <ScrollView horizontal style={{}}>
//                   {latestProducts.map((product, index) => (
//                     <View key={index} style={styles.productContainer}>
//                       <Image
//                         source={{ uri: product.image }} // Assuming there's an "image" property in the product data
//                         style={styles.productImage}
//                       />
//                       <View style={styles.productInfo}>
//                         <Text style={styles.productName}>{product.name.length > 5 ? product.name.substring(0, 5) + '...' : product.name}</Text>
//                         <Text style={styles.productPrice}>SAR  {product.id}</Text>
//                       </View>
//                     </View>
//                   ))}
//                 </ScrollView>
//                 <View style={{ margin: 10, paddingHorizontal: 10 }}>
//                   <Text style={{ fontSize: 17, fontWeight: "600", color: "black" }}>LATEST PRODUCTS</Text>
//                 </View>
//                 <ScrollView horizontal style={{ bottom: 10 }}>
//                   {schoolSuppliesProducts.map((product, index) => (
//                     <View key={index} style={styles.productContainer}>
//                       <Image
//                         source={{ uri: product.image }} // Assuming there's an "image" property in the product data
//                         style={styles.productImage}
//                       />
//                       <View style={{ bottom: 10 }}>
//                         <Text style={styles.productName}>{product.name.length > 5 ? product.name.substring(0, 5) + '...' : product.name}</Text>
//                         <Text style={styles.productPrice}>SAR  {product.id}</Text>
//                       </View>
//                     </View>
//                   ))}
//                 </ScrollView>
//                 <View style={{ bottom: 50, }}>
//                   <View style={{ margin: 1, paddingHorizontal: 10, margin: 10, flexDirection: "row", justifyContent: "space-between", }}>
//                     <Text style={{ fontSize: 17, fontWeight: "600", color: "black" }}>GAMES</Text>
//                     <TouchableOpacity onPress={handleButtonPress}>
//                       <Text style={{ color: "red", fontSize: 18, fontWeight: "500" }}>View All</Text>
//                     </TouchableOpacity>
//                   </View>
//                   <ScrollView horizontal={true}>
//                     <ScrollView horizontal style={{ height: "80%" }}>
//                       {gameCategoryProducts.map((product, index) => (
//                         <View key={index} style={{
//                           width: 120,
//                           margin: 10,

//                           height: 200,
//                           alignItems: "center"
//                         }}>
//                           <Image
//                             source={{ uri: product.image }} // Assuming there's an "image" property in the product data
//                             style={{
//                               width: '100%',
//                               height: 130,
//                             }}
//                           />
//                           <View style={{ bottom: 20 }}>
//                             <Text style={styles.productName}>{product.name.length > 7 ? product.name.substring(0, 10) + '..' : product.name}</Text>
//                             <Text style={styles.productPrice}>SAR  {product.id}</Text>
//                           </View>
//                         </View>
//                       ))}

//                     </ScrollView>



//                   </ScrollView>
//                 </View>
//               </ScrollView>
//             </ScrollView>
//           </View>
//         )}
//         {/* Rest of YourComponent */}
//         <Modal visible={drawerVisible} transparent={true}>
//           <CustomDrawer onClose={() => setDrawerVisible(false)} />
//         </Modal>

//       </View>
//     </TouchableWithoutFeedback>
//   );
// };
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   getCategoryBanner: {
//     marginHorizontal: 20
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
//     left: 20
//   },
//   rightContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     padding: 10,

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
//     height: "100%",
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
//     width: 120,
//     margin: 10,
//     backgroundColor: '#fff',
//     height: 200,
//     alignItems: "center"
//   },
//   productImage: {
//     width: '90%', // Make sure the image takes 100% of the container's width
//     height: 130, // Set the desired height for the image

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
import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = ({route}) => {
  const [userInfo, setUserInfo] = useState("")

 useEffect(() => {
  console.log(route.params, "params");
  getData()
 },[route])

 const getData = async () => {
  try {
    const userInfo = await AsyncStorage.getItem('userInfo');
    console.log(JSON.parse(userInfo),"userInfos");
    setUserInfo(JSON.parse(userInfo))
  } catch (e) {
    // error reading value
  }
}

  return (
    <View>
      <Text></Text>
      <Text style={{color:'black'}}>{JSON.stringify(userInfo)}</Text>

    </View>
  );
};

export default HomeScreen;












