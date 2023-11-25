import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
const Profile = () => {
  const navigation = useNavigation();
  const handleProfileDetailsPress = () => {
    // Navigate to the ProfileUpdate page
    //navigation.navigate('ProfileUpdate');
    navigation.navigate('WishList');
  };
  const handleAddressBookClick = () => {
    // Navigate to the AddressBook screen when clicked
    navigation.navigate('Address'); // Replace 'AddressBook' with the actual screen name for your AddressBook screen
  };
  return (
    <View>
      <View>

      <View style={styles.drawerBar}>
        
        {/* Left side */}
        <View style={styles.leftContainer}>
          <TouchableOpacity style={{ marginHorizontal: 20 }}>
            <Icon name="bars" size={24} color="black" />
          </TouchableOpacity>
          <View style={styles.logoContainer}>
            <Image
              source={require('../../assets/Logo.png')} // Replace with the actual path to your logo image
              style={styles.logoImage}
            />
          </View>
        </View>
        <View style={styles.rightContainer}>
        
          <TouchableOpacity>
            <Image
              source={require('../../assets/iconCart.png')} // Replace with the actual path to your logo image
              style={styles.cart}
            />

          </TouchableOpacity>

        </View>
      </View>
      <View>
      </View>
        <View style={{ alignItems: "center",backgroundColor:"#fff" }}>

          <View style={styles.circle}>
            <Image
              source={require('../../assets/iconUser1.png')}
              style={{ width: 30, height: 30, marginVertical: 10 }}
            />
          </View>
        </View>


        <View style={{ alignItems: "center",backgroundColor:"#fff",height:60 }}>
          <Text style={{ fontSize: 20, color: "black" }}>Mitul Patel</Text>
          <Text style={{ fontSize: 15, color: "black",}}>mitul1.setblue@gmail.com</Text>
        </View>
      
      </View>
      

      <ScrollView style={{backgroundColor:"#F4F8FA"}}>
      <View style={{ flexDirection: "row", justifyContent: "space-between",  backgroundColor: "#F4F8FA",marginVertical:10 }}>
        <Image
          source={require('../../assets/ukflg.png')} // Replace with the actual path to your logo image
          style={{
            width: 25,
            height: 40,
            resizeMode: 'contain', marginHorizontal: 10
          }}
        />
        <View style={{ right: 70 }}>

          <Text style={{ fontSize: 18, color: "black", fontWeight: "900" }}>Change Language</Text>
          <Text style={{ fontSize: 14, color: "gray" }}>Change Language</Text>
        </View>
        <Image
          source={require('../../assets/iconRoundLeft.png')} // Replace with the actual path to your logo image
          style={{
            width: 20,
            height: 30,
            resizeMode: 'contain', right: 20, marginVertical: 10
          }}
        />
      </View>

      <View style={{ flexDirection: "row", justifyContent: "space-between", backgroundColor: "#F4F8FA" }}>
       <View style={{padding:5,left:5}}>

        <Image
          source={require('../../assets/iconHeart.png')} // Replace with the actual path to your logo image
          style={{
            width: 25,
            height: 30,
            resizeMode: 'contain', 
          }}
        />
       </View>
       <TouchableOpacity style={{}} onPress={handleProfileDetailsPress}>
        <View style={{ right: 65 }}>
          <Text style={{ fontSize: 18, color: "black", fontWeight: "900" }}>WishList</Text>
          <Text style={{ fontSize: 14, color: "gray" }}>You must love this style</Text>
        </View>
      </TouchableOpacity>
        <Image
          source={require('../../assets/iconRoundLeft.png')} // Replace with the actual path to your logo image
          style={{
            width: 20,
            height: 30,
            resizeMode: 'contain', right: 20, marginVertical: 10
          }}
        />
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-between", backgroundColor: "#F4F8FA",marginVertical:5 }}>
         <View style={{padding:5,left:7}}>

<Image
  source={require('../../assets/iconwallet.png')} // Replace with the actual path to your logo image
  style={{
    width: 24,
    height: 30,
    resizeMode: 'contain', 
  }}
/>
</View>
        <View style={{ right: 95 }}>

          <Text style={{ fontSize: 18, color: "black", fontWeight: "900" }}>My Wallet</Text>
          <Text style={{ fontSize: 15, color: "gray" }}>My Wallet</Text>
        </View>
        <Image
          source={require('../../assets/iconRoundLeft.png')} // Replace with the actual path to your logo image
          style={{
            width: 20,
            height: 30,
            resizeMode: 'contain', right: 20, marginVertical: 10
          }}
        />
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-between", backgroundColor: "#F4F8FA", }}>
      <View style={{padding:5,left:5}}>

<Image
  source={require('../../assets/iconCart.png')} // Replace with the actual path to your logo image
  style={{
    width: 25,
    height: 30,
    resizeMode: 'contain', 
  }}
/>
</View>
        <View style={{ right: 55 }}>

          <Text style={{ fontSize: 18, color: "black", fontWeight: "900" }}>My Order</Text>
          <Text style={{ fontSize: 15, color: "gray" }}>Check your order status</Text>
        </View>
        <Image
          source={require('../../assets/iconRoundLeft.png')} // Replace with the actual path to your logo image
          style={{
            width: 20,
            height: 30,
            resizeMode: 'contain', right: 20, marginVertical: 10
          }}
        />
      </View>
     <TouchableOpacity onPress={handleAddressBookClick}>
      <View style={styles.container}>
        <View style={styles.iconContainer}>
          <Image
            source={require('../../assets/iconAddress1.png')}
            style={styles.icon}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>Address Book</Text>
          <Text style={styles.subtitle}>Shipping & Billing addresses</Text>
        </View>
        <View style={styles.arrowContainer}>
          <Image
            source={require('../../assets/iconRoundLeft.png')}
            style={styles.arrowIcon}
          />
        </View>
      </View>
    </TouchableOpacity>
      <View style={{ flexDirection: "row", justifyContent: "space-between",  backgroundColor: "#F4F8FA" }}>
        
         <View style={{padding:8,left:5}}>

<Image
  source={require('../../assets/iconHelp.png')} // Replace with the actual path to your logo image
  style={{
    width: 25,
    height: 30,
    resizeMode: 'contain', 
  }}
/>
</View>
        <View style={{ right:35 }}>

          <Text style={{ fontSize: 18, color: "black", fontWeight: "900" }}>Customer Service</Text>
          <Text style={{ fontSize: 13, color: "gray" }}>Help regarding your recent purchase</Text>
        </View>
        <Image
          source={require('../../assets/iconRoundLeft.png')} // Replace with the actual path to your logo image
          style={{
            width: 20,
            height: 30,
            resizeMode: 'contain', right: 20, marginVertical: 10
          }}
        />
      </View>
      <TouchableOpacity style={{backgroundColor:"red"}} onPress={handleProfileDetailsPress}>

      <View style={{ flexDirection: "row", justifyContent: "space-between", backgroundColor: "#F4F8FA" }}>
        {/* <Image
          source={require('../../assets/iconDocument.png')} // Replace with the actual path to your logo image
          style={{
            width: 40,
            height: 30,
            resizeMode: 'contain', marginHorizontal: 10
          }}
        /> */}
        <View style={{padding:8,left:5}}>

<Image
  source={require('../../assets/iconDocument.png')} // Replace with the actual path to your logo image
  style={{
    width: 25,
    height: 30,
    resizeMode: 'contain', 
  }}
/>
</View>
        <View style={{ right:80 }}>

          <Text style={{ fontSize: 18, color: "black", fontWeight: "900" }}>Profile Details</Text>
          <Text style={{ fontSize: 15, color: "gray" }}>Profile Details</Text>
        </View>
        <Image
          source={require('../../assets/iconRoundLeft.png')} // Replace with the actual path to your logo image
          style={{
            width: 20,
            height: 30,
            resizeMode: 'contain', right: 20, marginVertical: 10
          }}
        />
      </View>
      </TouchableOpacity>
      <View style={{ flexDirection: "row", justifyContent: "space-between", backgroundColor: "#F4F8FA" }}>
       
         <View style={{padding:8,left:5}}>

<Image
  source={require('../../assets/iconLogout.png')} // Replace with the actual path to your logo image
  style={{
    width: 25,
    height: 30,
    resizeMode: 'contain', 
  }}
/>
</View>
        <View style={{ right: 110 }}>

          <Text style={{ fontSize: 18, color: "black", fontWeight: "900" }}>Logout</Text>
          <Text style={{ fontSize: 15, color: "gray" }}>Logout</Text>
        </View>
        <Image
          source={require('../../assets/iconRoundLeft.png')} // Replace with the actual path to your logo image
          style={{
            width: 20,
            height: 30,
            resizeMode: 'contain', right: 20, marginVertical: 10
          }}
        />
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-between", backgroundColor: "#F4F8FA" }}>
        
        <View style={{padding:8,left:5}}>

<Image
  source={require('../../assets/iconBin.png')} // Replace with the actual path to your logo image
  style={{
    width: 25,
    height: 30,
    resizeMode: 'contain', 
  }}
/>
</View>
        <View style={{ right: 70 }}>

          <Text style={{ fontSize: 18, color: "black", fontWeight: "900" }}>Delete Account</Text>
          <Text style={{ fontSize: 15, color: "gray" }}>Delete Your Account</Text>
        </View>
        <Image
          source={require('../../assets/iconRoundLeft.png')} // Replace with the actual path to your logo image
          style={{
            width: 20,
            height: 30,
            resizeMode: 'contain', right: 20, marginVertical: 10
          }}
        />
      </View>
      {/* Add more menu items as needed */}
      
      {/* Repeat the above pattern for each menu item */}
      
  <View style={{marginVertical:100}}>

  </View>
  <View></View>
      
    </ScrollView>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({

  drawerBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 0,
    backgroundColor: '#fff',

  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoContainer: {
    flex: 1,
    alignItems: 'center',
   
    right:30
  },
  logoImage: {
    width: 100,
    height: 50,
    resizeMode: 'contain',
  },
  cart: {
    width: 30,
    height: 50,
    resizeMode: 'contain',
  },
  rightContainer: {
    right: 50
  },
  circle: {

    borderWidth: 4,
    borderColor: '#8b0000',


    width: 60,
    height: 60,
    borderRadius: 50,

    alignItems: "center"
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#F4F8FA',
    marginVertical: 5,
  },
  iconContainer: {
    padding: 8,
    left: 5,
  },
  textContainer: {
    right: 45,
  },
  arrowContainer: {
    right: 20,
    marginVertical: 10,
  },
  icon: {
    width: 20,
    height: 30,
    resizeMode: 'contain',
  },
  arrowIcon: {
    width: 20,
    height: 30,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 18,
    color: 'black',
    fontWeight: '900',
  },
  subtitle: {
    fontSize: 15,
    color: 'gray',
  }, 
})