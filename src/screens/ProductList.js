import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import axios from 'axios';
import Modal from 'react-native-modal'
import Icon from 'react-native-vector-icons/FontAwesome';
import { RadioButton } from 'react-native-paper';
import { useNavigation,useRoute} from '@react-navigation/native';
import Constant from './config/Constant';
const FormData = require('form-data');
const Drawer = ({ isOpen, onClose, }) => {


  const [selectedButton, setSelectedButton] = useState(null);
  const [selectitem, setselectitem] = useState(null)

  const [displayedData, setDisplayedData] = useState([]);

  const fetchData = async (filterType) => {
    let data = new FormData();
    data.append('category_id', '297');
    data.append('store_id', '1');
    data.append('filter_type', filterType);

    try {
      //const response = await axios.post(`${Constant.URL}/rest/V1/api/${Constant.OtherURLs.Categoriesfilter}`, data);
      const response = await axios.post("https://alharamstores.com/rest/V1/api/getCategoryFilterMethod", data);
      const responseData = response.data.data.availablefilter;

      // Set the data based on the filter type
      if (filterType === 'category') {
        setDisplayedData(responseData.Category);
      } else if (filterType === 'color') {
        setDisplayedData(responseData.Color);
      } else if (filterType === 'price') {
        setDisplayedData(responseData.Price);
      } else if (filterType === 'size') {
        setDisplayedData(responseData.Size);
      }
    } catch (error) {
      console.error('API Error:', error);
      // Handle errors, e.g., show an error message to the user
    }
  };








  if (!isOpen) {
    return null; // Do not render the drawer if it's closed
  }

  

  return (
    <View style={styles.drawerContainer}>
      <View style={{ flexDirection: "row", bottom: 10 }}>
        <TouchableOpacity style={styles.closeButton} onPress={onClose}>
          <Text style={styles.closeButtonText}>X</Text>

        </TouchableOpacity>
        <Text style={{ paddingHorizontal: 20, fontSize: 20, marginVertical: 0, color: "black" }}>Filter By</Text>
        <View>
          <View style={styles.header}>
            <TouchableOpacity style={styles.button2} onPress={() => console.log('First Button Pressed')}>
              <Text>Clearkkk</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button3} onPress={() => console.log('Second Button Pressed')}>
              <Text>Apply</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Add more drawer items as needed */}
      <View style={{ justifyContent: "space-between", flexDirection: "row", width: "100%" }}>
        {/* Buttons for filtering data */}
        <View style={{ backgroundColor: "#cccc", }}>
          <TouchableOpacity
            style={{ padding: 10, backgroundColor: selectedButton === 1 ? 'white' : '#cccc' }}
            onPress={() => {
              fetchData('category');
              setSelectedButton(1);
            }}
          >
            <Text >Category</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ padding: 10, backgroundColor: selectedButton === 2 ? 'white' : '#cccc' }}
            onPress={() => {
              fetchData('color');
              setSelectedButton(2);
            }}
          >
            <Text>Color</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ padding: 10, backgroundColor: selectedButton === 3 ? 'white' : '#cccc' }}
            onPress={() => {
              fetchData('price');
              setSelectedButton(3);
            }}
          >
            <Text>Price</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ padding: 10, backgroundColor: selectedButton === 4 ? 'white' : '#cccc' }}
            onPress={() => {
              fetchData('size');
              setSelectedButton(4);
            }}
          >
            <Text>Size</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.verticalLine1} />
        {/* Display filtered data using FlatList */}
        <FlatList
          data={displayedData}
          keyExtractor={(item) => item.value.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc', justifyContent: "space-between", flexDirection: "row", }}
              onPress={() => {
                setselectitem(item.value);
              }}
            >
              <Text style={{ color: selectitem === item.value ? 'red' : 'black' }}>{item.code}</Text>
              <Text style={{ color: selectitem === item.value ? 'red' : 'black' }}>{item.count}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

const App = ({route}) => {
  //const route = useRoute(); 
  const { selectedItems: routeSelectedItems } = route.params || {};
  const navigation = useNavigation();
  const [selectedIds, setSelectedIds] = useState([]);
  const [selectedItems, setSelectedItems] = useState(routeSelectedItems || []);
  const handleImageClick = (id,name,price,image) => {
    if (selectedIds.includes(id)) {
      // If already in wishlist, remove from wishlist
      setSelectedIds(selectedIds.filter((itemId) => itemId !== id));
    } else {
      // If not in wishlist, add to wishlist
      setSelectedIds([...selectedIds, id]);
      setSelectedItems([...selectedItems, { id, name, price, image }]);
    }
  
    // Make API call here with the selectedIds
    
    // Make the API call
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'multipart/form-data',
        'Cookie': 'PHPSESSID=edf28b2e04d2c33b10700eadd3750c6c; private_content_version=8d31e632dcc21934128bfc5aa0186b0d'
      },
      body: {
        // Define your request body parameters here
      }
    };
    fetch(`${Constant.URL}/rest/V1/api/${Constant.OtherURLs.AddWishlistMethod}`, requestOptions)
      .then(response => response.text())
      .then(result => {
        console.log(result);
  console.log("id===",id);
  console.log("Selected Name:", name);
  console.log("Selected Price:", price);
  console.log("Selected Image:", image);
  
  // navigation.navigate('WishList', {
  //   itemId: id,
  //   itemName: name,
  //   itemPrice: price,
  //   itemImage: image,
  // });
      })
      .catch(error => console.log('error', error));
  };
  

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [images, setImages] = useState([]);
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [isModalVisible, setModalVisible] = useState(false);

  const [selectedId, setSelectedId] = useState(null);

  const [isHeartClicked, setIsHeartClicked] = useState(false);
 


  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        let data = new FormData();
        data.append('category_id', '13');
        data.append('store_id', '1');
        data.append('PageSize', '20');
        data.append('CurPage', '1');
        data.append('customer_id', '14');
        data.append('color', '');
        data.append('size', '');
        data.append('price_from', '');
        data.append('price_to', '');
        data.append('search', '');
        data.append('sort_by', 'position');
        data.append('sort_action', 'ASC');


        let config = {
          method: 'post',
          //url: `${Constant.URL}/rest/V1/api/${Constant.OtherURLs.Product}`,
          url: "https://alharamstores.com/rest/V1/api/getProductByCateId",
          headers: {
            'Content-Type': 'multipart/form-data', // Use multipart/form-data for form data
            'Cookie': 'PHPSESSID=edf28b2e04d2c33b10700eadd3750c6c; private_content_version=8d31e632dcc21934128bfc5aa0186b0d'
          },
          data: data // Form data is directly sent as the request body
        };

        console.log('Making API Request...');
        let response = await axios(config);
        console.log('API Response:', response.data);
        setImages(response.data.data);
      } catch (error) {
        console.error('API Error:', error);
      }
    };

    fetchData();
  }, []);

  const data = [
    { id: 1, label: 'Relevance' },
    { id: 2, label: 'New Arrivals' },
    { id: 3, label: 'Price Low-High' },
    { id: 4, label: 'Price High-Low' },
  ];


  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const renderItem = ({ item }) => {
    return (
      <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 8 }}>
        <RadioButton
          value={item.id}
          status={selectedId === item.id ? 'checked' : 'unchecked'}
          onPress={() => setSelectedId(item.id)}
        />
        <Text style={{ marginLeft: 8 }}>{item.label}</Text>
      </View>
    );
  };
  return (
    <View style={{ backgroundColor: "#fff" }}>
      <View style={styles.container1}>
        {/* Custom Drawer Bar */}
        <View style={styles.drawerBar}>
          {/* Left side */}
          <View style={styles.leftContainer}>
            <TouchableOpacity onPress={() => navigation.openDrawer()} style={{ marginHorizontal: 20 }}>
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


      </View>
      <View style={styles.container}>
        <TouchableOpacity onPress={toggleModal}>
          <Text style={styles.buttonText}>Sort</Text>
        </TouchableOpacity>
        <View style={styles.verticalLine}></View>
        <TouchableOpacity onPress={toggleDrawer} >
          <Text style={styles.buttonText}>Filter</Text>
        </TouchableOpacity>

      </View>


      <FlatList
        data={images}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (

          <TouchableOpacity onPress={() => handleImageClick(item.id,item.name,item.price,item.image)}>
            <View style={{ padding: 10 }}>
              <Image source={{ uri: item.image }} style={styles.image} />
              <Text style={{ fontSize: 12, marginLeft: 5, fontWeight: "500" }}>{item.name}</Text>
              <Text style={{ color: 'red', marginLeft: 10, fontSize: 13, fontWeight: 300 }}>SAR {item.price}</Text>

              <View style={{ position: 'absolute', bottom: 190, left: 15 }}>
                {selectedIds.includes(item.id) ? (
                  <Image source={require('../assets/iconHeart(s).png')} style={styles.heartIcon} />
                ) : (
                  <Image source={require('../assets/iconHeart.png')} style={styles.heartIcon} />
                )}
              </View>
              {item.special_offer && (
                <View style={{ position: 'absolute', top: 17, left: 125 }}>
                  <Image source={{ uri: item.special_offer }} style={styles.overlayImage} />
                </View>
              )}
            </View>
          </TouchableOpacity>
        )}
        numColumns={2} // Set the number of columns here
      />
      <Modal isVisible={isModalVisible} style={styles.modal} onBackdropPress={toggleModal} backdropOpacity={0.5}>
        <View style={styles.modalContent}>
          <Text style={{ fontSize: 20, color: "black" }}>SORT BY</Text>
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.label}
          />
        </View>
      </Modal>
      <Drawer isOpen={isDrawerOpen} onClose={toggleDrawer} />

    </View>
  );
};

const styles = StyleSheet.create({

  drawerContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
    height: '100%',
    width: '100%', // Adjust the width of the drawer as needed
    backgroundColor: 'white',
    padding: 20,
    zIndex: 0,
  },
  drawerItem: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  closeButtonText: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'normal',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,

  },
  button2: {
    left: "500%",
    backgroundColor: 'lightgray',
    borderRadius: 5,
    paddingHorizontal: 2,

  },
  button3: {

    left: "600%",
    backgroundColor: 'red',
    borderRadius: 5,
    paddingHorizontal: 2,

  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 1,
    borderRadius: 0,
    padding: 5,
    borderColor: 'gray', // Set the border color of the container to white
    borderWidth: 1, // Set the border width
    width: "100%",
    backgroundColor: "#fff"
  },
  verticalLine: {
    height: 100,
    width: 1,
    backgroundColor: 'gray',
  },
  verticalLine1: {
    height: "100%",
    width: 2,
    backgroundColor: 'lightgray',
  },
  buttonText: {
    color: 'gray',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: "200"

  },
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  modalContent: {
    backgroundColor: 'white',

    padding: 20,
  },
  image: {
    width: 160, // Adjust the width as needed based on your design
    height: 190, // Adjust the height as needed based on your design
    resizeMode: 'cover',
    marginBottom: 10,

    top: 0,
  },
  overlayImage: {
    width: 70, // Adjust the width of the overlay image as needed
    height: 70, // Adjust the height of the overlay image as needed
    resizeMode: 'cover',
    position: 'absolute',
    bottom: 170, // Adjust the top position of the overlay image within the special_offer image
    left: '71%', // Adjust the left position of the overlay image within the special_offer image
    transform: [{ translateX: -25 }, { translateY: -25 }], // Center the overlay image
  },
  buttonContainer: {

    width: '40%',
    marginBottom: 20,
  },
  button: {
    padding: 10,

    borderColor: 'black',
    width: "60%"
  },
  selectedButton: {
    backgroundColor: 'lightblue',
    width: "100%"
  },
  verticalLine: {
    height: 30,
    width: 1,
    backgroundColor: 'gray',
    marginHorizontal: 0,
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
    flex: 1,
    alignItems: 'center',
  },
  logoImage: {
    width: 100,
    height: 50,
    resizeMode: 'contain',
  },
  rightContainer: {
    right: 50
  },
});

export default App;








