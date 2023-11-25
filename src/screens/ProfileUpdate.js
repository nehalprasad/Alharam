import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Button,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';

const Signin = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [repassword, setrePassword] = useState('');
  const [oldpassword, setoldPassword] = useState('');
  const [selectedTab, setSelectedTab] = useState('Edit Profile');

  const renderTab = tabName => {
    const isSelected = selectedTab === tabName;

    return (
      <TouchableOpacity
        key={tabName}
        style={[styles.tabButton, isSelected ? styles.selectedTab : null]}
        onPress={() => setSelectedTab(tabName)}>
        <Text style={[styles.tabText, isSelected ? {color: '#8b0000'} : null]}>
          {tabName}
        </Text>
      </TouchableOpacity>
    );
  };

  const renderTabContent = () => {
    const handleProfileUpdate = () => {
      var myHeaders = new Headers();
      myHeaders.append('Content-Type', 'application/json');
      myHeaders.append(
        'Cookie',
        'PHPSESSID=fb2616402c50fe9726a9e7475abfce18; PHPSESSID=fb2616402c50fe9726a9e7475abfce18',
      );

      var formdata = new FormData();
      formdata.append('email', email);
      formdata.append('firstname', firstName);
      formdata.append('lastname', lastName);
      formdata.append('customer_id', '970');
      formdata.append('store_id', '1');
      formdata.append('password', password);
      formdata.append('new_password', repassword);

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow',
      };

      fetch(
        'https://beta.alharamstores.com/rest/V1/api/customerProfileUpdateMethod',
        requestOptions,
      )
        .then(response => response.text())
        .then(result => {
          console.log(result); // Handle the API response here
          // You can also display a success message to the user if the API call is successful
          Alert.alert('Profile Updated Successfully');
        })
        .catch(error => {
          console.log('error', error);
          // Handle errors and display an error message to the user
          Alert.alert('Error updating profile. Please try again later.');
        });
    };

    const navigation = useNavigation();
    if (selectedTab === 'Edit Profile') {
      return (
        <View style={styles.tabContent}>
          <View style={styles.inputContainer}>
            <Image
              source={require('../assets/iconUser1.png')}
              style={styles.icon}
            />
            <TextInput
              style={styles.input}
              onChangeText={text => setFirstName(text)}
              value={firstName}
             
              placeholder=""
            />
          </View>
          <View style={styles.inputContainer}>
            <Image
              source={require('../assets/iconUser1.png')}
              style={styles.icon}
            />
            <TextInput
              style={styles.input}
              onChangeText={text => setLastName(text)}
              value={lastName}
           
              placeholder=""
            />
          </View>
          <View style={styles.inputContainer}>
            <Image
              source={require('../assets/iconEmail.png')}
              style={styles.icon}
            />
            <TextInput
              style={styles.input}
              placeholder=""
              keyboardType="email-address"
              autoCapitalize="none"
              onChangeText={text => setEmail(text)}
              value={email}
            />
          </View>
          <View style={styles.inputContainer}>
            <Image
              source={require('../assets/cellphone.png')}
              style={styles.icon}
            />
            <TextInput
              style={styles.input}
              placeholder=""
              keyboardType="email-address"
              autoCapitalize="none"
              onChangeText={text => setPhone(text)}
              value={phone}
            />
          </View>

          <TouchableOpacity
            style={styles.signInButton}
            onPress={handleProfileUpdate}>
            <Text style={styles.signInButtonText}>UPDATE</Text>
          </TouchableOpacity>
        </View>
      );
    } else if (selectedTab === 'Change Password') {
      return (
        <View style={styles.tabContent}>
          <View style={styles.inputContainer}>
            <Image
              source={require('../assets/iconPassword.png')}
              style={styles.icon}
            />
            <TextInput
              style={styles.input}
              placeholder="Your existing password"
              value={password}
            />
          </View>
          <View style={styles.inputContainer}>
            <Image
              source={require('../assets/iconPassword.png')}
              style={styles.icon}
            />
            <TextInput style={styles.input} placeholder="New password" />
          </View>
          <View style={styles.inputContainer}>
            <Image
              source={require('../assets/iconPassword.png')}
              style={styles.icon}
            />
            <TextInput
              style={styles.input}
              placeholder="Re-enter new password"
            />
          </View>

          <TouchableOpacity style={styles.signInButton} onPress={handleProfileUpdate}>
            <Text style={styles.signInButtonText}>Change Password</Text>
          </TouchableOpacity>
        </View>
      );
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerred}>
        <View style={styles.logocontainer}>
          <Image
            source={require('../assets/Logo.png')} // Replace with your splash image path
            style={styles.logo}
            resizeMode="contain"
          />
        </View>
      </View>
      <View style={{marginVertical: 90}}>
        <View style={styles.tabBar}>
          {renderTab('Edit Profile')}
          {renderTab('Change Password')}
        </View>
        {renderTabContent()}
      </View>
    </View>
  );
};

export default Signin;
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  buttonContainer: {
    top: 20,
    borderRadius: 20, // Set the border radius to 20
    overflow: 'hidden',
  },
  header: {
    height: '100%',
    //justifyContent: 'center',
    //alignItems: 'center',
  },
  headerred: {
    height: 170,
    backgroundColor: '#8b0000',
  },
  logocontainer: {
    borderColor: '#d3d3d3', // Set your desired border color
    borderWidth: 2,
    backgroundColor: '#fff',
    borderRadius: 40,
    width: '75%',
    alignSelf: 'center',
    marginVertical: 70,
    height: '100%',
  },
  logo: {
    alignItems: 'center',
    width: 230, // Set the width of the image as needed
    height: 160,
    marginHorizontal: 15,
  },
  container1: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },

  input: {
    width: '80%',
    marginBottom: 15,
    padding: 10,
    borderBottomWidth: 1,
  },
  headerContent: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 500,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
  },
  loginButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  loginButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginHorizontal: 10,
  },
  googleButton: {
    backgroundColor: 'red', // You can set your desired color
  },
  facebookButton: {
    backgroundColor: '#1877F2', // Facebook blue color
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'lightgray',
    height: 50,
    alignItems: 'center',
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedTab: {
    borderBottomWidth: 2,
    borderColor: '#8b0000',
    paddingVertical: 15,
  },
  tabText: {
    color: 'black',
    fontSize: 17,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1, // Border Bottom Width for the underline
    borderBottomColor: 'lightgray', // Border Bottom Color
    paddingHorizontal: 30,
    marginBottom: 60,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 20,
    marginVertical: 30,
  },

  icon: {
    width: 20,
    height: 20,
    marginRight: 50,
  },
  input: {
    flex: 1,
    height: 40,
  },
  tabContent: {
    width: '100%',
    marginVertical: 30,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1, // Border Bottom Width for the underline
    borderBottomColor: 'lightgray', // Border Bottom Color
    paddingHorizontal: 15,
    marginBottom: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  icon: {
    width: 30,
    height: 30,
    marginRight: 20,
  },
  input: {
    flex: 1,
    height: 40,
    fontSize: 16,
  },
  rememberMeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  rememberMeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  checkboxPlaceholder: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: '#007bff',
    marginRight: 10,
  },
  checkIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  rememberMeText: {
    fontSize: 14,
    color: '#000',
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
});
