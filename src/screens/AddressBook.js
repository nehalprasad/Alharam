import {Modal, StyleSheet, Text, View,Image,TouchableOpacity,TextInput, ScrollView,FlatList} from 'react-native'
import React,{ useState, useEffect } from 'react'
import axios from 'axios';
import FormData from 'form-data';
import CheckBox from '@react-native-community/checkbox';
import { useNavigation } from '@react-navigation/native';

const AddressBook = () => {
  const handleSave = () => {
    // Implement logic to save the entered data
    // For now, let's just log the entered data
    const savedData = {
      PhoneNumber,
      Lastname,
      First,
      Street,
      add1,
      add2,
      pincode,
      contry,
      state,
      city,
     
      selectedState,
    };

    // Implement navigation to the next page
    // Replace the following line with your navigation logic
    // navigation.navigate('NextPage');
    navigation.navigate('Address', { savedData });
  };
  const navigation = useNavigation();
  const [isChecked, setChecked] = useState(false);

  const handleCheckBoxChange = () => {
    setChecked(!isChecked);
  };
  const [PhoneNumber, setPhoneNumber] = useState('');
  const [Lastname,setLastname] = useState('');
  const [First, setFirstname] = useState('');
  const [Street, setStreet] = useState('');
  const [add1, setadd1] = useState('');
  const [add2, setadd2] = useState('');
  const [pincode, setpincode] = useState('');
  const [contry, setcontry] = useState('');
  const [state, setstate] = useState('');
  const [city, setcity] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const handleInputClick = () => {
    setModalVisible(true);
  };
  const handleInputClick2 = () => {
    setModalVisible2(true);
  };
  const [states, setStates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [stateData, setStateData] = useState([]);
  const [selectedState, setSelectedState] = useState('');
  const [cities, setCities] = useState([]);
    useEffect(() => {
    const fetchData2 = async () => {
      try {
        const data = new FormData();
        data.append('state_code', '704');
        data.append('store_id', '1');

        const response = await axios.post(
          'https://alharamstores.com/rest/V1/api/stateToCityMethod',
          data,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
              'Cookie': 'PHPSESSID=1da88fa95df0234dde8d94adbeb58186; private_content_version=8d31e632dcc21934128bfc5aa0186b0d',
            },
            maxBodyLength: Infinity,
          }
        );

        // Log the entire response for inspection
        

        // Accessing and logging the value of "entity_id"
       
        response.data.data.forEach(cityObj => {
          
          const extractedCities = response.data.data;
          setCities(extractedCities);
        });
        
      } catch (error) {
        console.error(error);
      }
    };

    // Call the function to make the API request
    fetchData2();
  }, []); // Empty dependency array ensures the effect runs once when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = new FormData();
        data.append('country_code', 'sa');
        data.append('store_id', '1');

        const response = await axios.post(
          'https://alharamstores.com/rest/V1/api/countryToStateMethod',
          data,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
              'Cookie': 'PHPSESSID=1e2d24296a5655b424e6c050de176e77; private_content_version=8d31e632dcc21934128bfc5aa0186b0d',
            },
            maxBodyLength: Infinity,
          }
        );

        const responseData = response.data;

        if (responseData && responseData.data && Array.isArray(responseData.data)) {
          // Set the state with the received data
         
          setStateData(responseData.data);
        } else {
          console.log("Invalid response format. Expected an array.");
          console.log("Response Data:", responseData);
        }
      } catch (error) {
        console.error(error);
        // Handle errors appropriately (e.g., show an error message to the user)
      }
    };

    // Call the function to make the API request
    fetchData();
  }, []); // Empty dependency array ensures the effect runs once when the component mounts
  const filteredData = stateData.filter(item => item.default_name.includes(searchQuery));
  
  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => {
        setModalVisible2(false);
        setcity(item.city); // Set the selected city when an item is pressed
      }}
    >
      <View style={{ alignItems: "center", paddingVertical: 8, borderBottomWidth: 0.5, borderBottomColor: 'lightgray' }}>
        <Text style={{ fontSize: 17, color: "black" }}>
          {item.city}
        </Text>
      </View>
    </TouchableOpacity>
  );
  return (
    <View style={styles.container1}>

    <View style={styles.container}>
   <TouchableOpacity style={styles.headerContainer} >
      <Image
        source={require('../assets/iconBack.png')}
        style={styles.backIcon}
      />
      
    </TouchableOpacity>
    <Text style={styles.title}>AddressBook</Text>
    </View>
    <ScrollView>

    <View style={styles.inputContainer}>
          
          <TextInput
            style={styles.input}
            placeholder="First name"
            keyboardType="default"
        onChangeText={text => setFirstname(text)}
          />
        </View>
        <View style={styles.inputContainer}>
          
          <TextInput
            style={styles.input}
            placeholder="Last name"
            keyboardType="default"
        onChangeText={text => setLastname(text)}
          />
        </View>
        <View style={styles.inputContainer}>
          
          <TextInput
            style={styles.input}
            placeholder="Phone number"
            keyboardType="default"
        onChangeText={text => setPhoneNumber(text)}
          />
        </View>
        <View style={styles.inputContainer}>
          
          <TextInput
            style={styles.input}
            placeholder="Street Address"
            keyboardType="default"
        onChangeText={text => setStreet(text)}
          />
        </View>
        <View style={styles.inputContainer}>
          
          <TextInput
            style={styles.input}
            placeholder="AddressLine 1"
            keyboardType="default"
        onChangeText={text => setadd1(text)}
          />
        </View>
        <View style={styles.inputContainer}>
          
          <TextInput
            style={styles.input}
            placeholder="AddressLine 2"
            keyboardType="default"
        onChangeText={text => setadd2(text)}
          />
        </View>
        <View style={styles.inputContainer}>
          
          <TextInput
            style={styles.input}
            placeholder="Pincode"
            keyboardType="default"
        onChangeText={text => setpincode(text)}
          />
        </View>
        <View style={styles.inputContainer}>
          
         <Text style={{fontSize:18,padding:10,color:"black"}}>Saudi Arabia</Text>
        </View>
        <View style={styles.inputContainer}>
        <TextInput
  style={styles.input}
  placeholder="State/Province"
  keyboardType="default"
  onChangeText={text => setstate(text)}
  onFocus={handleInputClick}
  value={selectedState} // Set the value of the TextInput to the selected state
/>
         
        </View>
        <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <View style={styles.modalContainer}>
            <View style={{backgroundColor:"#fff",width:"80%",height:"40%",borderRadius:20}}>
<View style={{alignItems:"center",backgroundColor:"red",borderTopRightRadius:20,borderTopLeftRadius: 20,}}>

          <Text style={styles.modalText}>State/Province</Text>
</View>

  <View style={styles.searchContainer}>
  <TextInput
    style={styles.input}
    placeholder="Search"
    onChangeText={(text) => setSearchQuery(text)}
    value={searchQuery}
  />
</View>
<ScrollView>
  {filteredData.length > 0 ? (
    <FlatList
  data={filteredData}
  keyExtractor={(item, index) => index.toString()}
  renderItem={({ item, index }) => (
    <TouchableOpacity
      onPress={() => {
        setModalVisible(false);
        setSelectedState(item.default_name);
      }}
    >
      <View style={{ alignItems: "center", paddingVertical: 8, borderBottomWidth: 0.5, borderBottomColor: 'lightgray' }}>
        <Text style={{ fontSize: 17, color: "black" }}>
          {item.default_name}
        </Text>
      </View>
    </TouchableOpacity>
  )}
/>
  ) : (
    <Text style={{ textAlign: "center", marginTop: 20,color:"black" }}>
      No Match Found
    </Text>
  )}
</ScrollView>

    <View style={{flexDirection:"row",justifyContent:"space-around"}}>

          <TouchableOpacity onPress={() => setModalVisible(false)}>
            <View style={{backgroundColor:"red",padding:8.3,borderBottomLeftRadius:20,right:3}}>

            <Text style={styles.closeButton}>Cancel</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setModalVisible(false)}>
            <View style={{backgroundColor:"red",padding:8.3,borderBottomRightRadius:20,left:3}}>

            <Text style={styles.closeButton}>Clear</Text>
            </View>
          </TouchableOpacity>
    </View>
            </View>
        </View>
      </Modal>
      <View style={styles.inputContainer}>
  <TextInput
    style={styles.input}
    placeholder="City"
    keyboardType="default"
    onChangeText={text => setcity(text)}
    onFocus={handleInputClick2}
    value={city}
  />
</View>
       
        <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible2}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <View style={styles.modalContainer}>
            <View style={{backgroundColor:"#fff",width:"80%",height:"40%",borderRadius:20}}>
<View style={{alignItems:"center",backgroundColor:"red",borderTopRightRadius:20,borderTopLeftRadius: 20,}}>

          <Text style={styles.modalText}>City</Text>
</View>

  <View style={styles.searchContainer}>
  <TextInput
    style={styles.input}
    placeholder="Search"
    onChangeText={(text) => setSearchQuery(text)}
    value={searchQuery}
  />
</View>
<ScrollView>
<FlatList
        data={cities}
        keyExtractor={(item) => item.entity_id}
        renderItem={renderItem}
      />
</ScrollView>

<View style={{flexDirection:"row",justifyContent:"space-around"}}>
  <TouchableOpacity onPress={() => setModalVisible2(false)}>
    <View style={{backgroundColor:"red",padding:8.3,borderBottomLeftRadius:20,right:3}}>
      <Text style={styles.closeButton}>Cancel</Text>
    </View>
  </TouchableOpacity>
  <TouchableOpacity onPress={() => setModalVisible2(false)}>
    <View style={{backgroundColor:"red",padding:8.3,borderBottomRightRadius:20,left:3}}>
      <Text style={styles.closeButton}>Clear</Text>
    </View>
  </TouchableOpacity>
</View>
            </View>
        </View>
      </Modal>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <CheckBox
        value={isChecked}
        onValueChange={handleCheckBoxChange}
        tintColors={{ true: 'red', false: 'red' }} // Set the checkbox color
      />
      <Text style={{ color: 'red', marginLeft: 10 }}>Use as my default billing address</Text>
    </View>
    <TouchableOpacity style={styles.signInButton} onPress={handleSave}>
            <Text style={styles.signInButtonText}>Save</Text>
          </TouchableOpacity>
    </ScrollView>
    </View>
  )
}

export default AddressBook

const styles = StyleSheet.create({
  container1:{
  backgroundColor:"#fff",
  flex:1
  },
    container: {
       backgroundColor:"#fff", 
        justifyContent:"space-between",
        flexDirection:"row",
        paddingVertical:5
      },
      headerContainer: {
        flexDirection: 'row',
        marginLeft:10
      },
      backIcon: {
        width: 20,
        height: 30,
        resizeMode: 'contain',
      },
    
      title: {
        fontSize: 18,
        color: 'black',
        fontWeight: '900',
        marginRight:100
      },
      inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 2, // Border Bottom Width for the underline
        borderBottomColor: 'lightgray', // Border Bottom Color
        paddingHorizontal: 15,
        marginBottom: 20,
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20,
        
      },
      searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1, // Border Bottom Width for the underline
        borderBottomColor: 'black', // Border Bottom Color
        paddingHorizontal: 15,
        marginBottom: 20,
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20,
      },
      input:{
      fontSize:18
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',

      },
      modalText: {
        fontSize: 22,
        marginVertical:10,
        color:"#fff"
      },
      closeButton: {
        fontSize: 18,
        color: '#fff',
        marginHorizontal:37
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
        fontSize: 20,
      },
})




