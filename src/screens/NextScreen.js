// import React, { useEffect, useState } from 'react';
// import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';

// const FormData = require('form-data');


// const App = () => {
    
      
  




  


//   return (
//     <View style={{backgroundColor:"#fff"}}>
//          <View style={styles.container1}>
//        {/* Custom Drawer Bar */}
//        <View style={styles.drawerBar}>
//          {/* Left side */}
//          <View style={styles.leftContainer}>
//            <TouchableOpacity onPress={() => navigation.openDrawer()}>
//             <Icon name="bars" size={24} color="black" />
//            </TouchableOpacity>
//            <TouchableOpacity onPress={() => console.log('Left Arrow button pressed')}>
//            <Icon name="angle-left" size={24} color="black" />
//          </TouchableOpacity>
//            <View style={styles.logoContainer}>
//              <Image
//               source={require('../assets/Logo.png')} // Replace with the actual path to your logo image
//               style={styles.logoImage}
//             />
//           </View>
//         </View>

//         {/* Right side */}
//         <View style={styles.rightContainer}>
//           {/* Search Icon */}
          

//           {/* Add to Cart Icon */}
//           <TouchableOpacity onPress={() => console.log('Add to Cart button pressed')}>
//             <Icon name="shopping-cart" size={24} color="black" />
//           </TouchableOpacity>
//         </View>
//       </View>

//       {/* Rest of YourComponent */}
//       {/* ... (your existing code) */}
//     </View>
      
     

//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   drawerBar: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     padding: 0,
//     backgroundColor: '#fffs',
   
//   },
//   leftContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   logoContainer: {
//     flex: 1,
//     alignItems: 'center',
//   },
//   logoImage: {
//     width: 100,
//     height: 50,
//     resizeMode: 'contain',
//   },
//   rightContainer: {
//     right:50
//   },
// });

// export default App;
import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, FlatList,TouchableOpacity } from 'react-native';
import { useRoute } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import Constant from './config/Constant';
const App = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { categoryId } = route.params;
  const [banners, setBanners] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        var myHeaders = new Headers();
        myHeaders.append("Cookie", "PHPSESSID=984c896af5b7a2da6bdb1bf6ea2e13e7; private_content_version=8d31e632dcc21934128bfc5aa0186b0d");

        var formdata = new FormData();
        formdata.append("store_id", "1");
        formdata.append("category_id", categoryId.toString());

        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: formdata,
          redirect: 'follow'
        };

        const response = await fetch(`${Constant.URL}/rest/V1/api/${Constant.OtherURLs.Categories}`, requestOptions);
        const result = await response.json();

        console.log('API Response:', result);

        if (result.status === 1) {
          setBanners(result.data);
        } else {
          console.error('API Error:', result.message);
        }
      } catch (error) {
        console.error('Error fetching banners:', error);
      }
    };

    fetchData();
  }, [categoryId]);

  const renderRow = ({ item }) => (
    <View style={styles.row}>
      {item.map(imageItem => (
        <View key={imageItem.category_id} style={styles.container}>
          <Image source={{ uri: imageItem.image }} style={styles.image} />
        </View>
      ))}
    </View>
  );

  const groupedBanners = [];
  for (let i = 0; i < banners.length; i += 3) {
    groupedBanners.push(banners.slice(i, i + 3));
  }

  return (
    
    <View>
      <View>
         <View style={{backgroundColor:"#fff"}}>
         <View style={styles.container1}>
        {/* Custom Drawer Bar */}
        <View style={styles.drawerBar}>
          {/* Left side */}
          <View style={styles.leftContainer}>
           <TouchableOpacity onPress={() => navigation.openDrawer()}>
             <Icon name="bars" size={24} color="black" />
           </TouchableOpacity>
           <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image source={require('../assets/iconBack.png')} />
              {/* <Icon name="angle-left" size={24} color="black" /> */}
            </TouchableOpacity>
           <View style={styles.logoContainer}>
             <Image
              source={require('../assets/Logo.png')} // Replace with the actual path to your logo image
              style={styles.logoImage}
            />
          </View>
        </View>

        {/* Right side */}
        <View style={styles.rightContainer}>
          {/* Search Icon */}
          

          {/* Add to Cart Icon */}
          <TouchableOpacity onPress={() => console.log('Add to Cart button pressed')}>
            <Icon name="shopping-cart" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Rest of YourComponent */}
      {/* ... (your existing code) */}
    </View>
      
     

    </View>
      </View>
      <View>

 <View style={{  backgroundColor: '#fff' }}>
     <FlatList
        data={groupedBanners}
        renderItem={renderRow}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  container: {
 
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 250,
    resizeMode: 'cover',
  },
    drawerBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 0,
    backgroundColor: '#fffs',
   
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoContainer: {
    flex: 1,
    alignItems: 'center',
  },
  logoImage: {
    width: 100,
    height: 50,
    resizeMode: 'contain',
  },
  rightContainer: {
    right:50
  },
});

export default App;

