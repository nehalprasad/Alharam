import axios from 'axios';
import FormData from 'form-data';
import {
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SignIn = ({navigation}) => {
  const [FirstName, setFirstName] = useState('');
  const [LastName, setLastName] = useState('');
  const [Email, setEmail] = useState('');
  const [MobileNo, setMobileNo] = useState('');
  const [Password, setPassword] = useState('');
  const [ConfirmPassword, setConfirmPassword] = useState();
  const [error, setError] = useState('');

  const storeData = async userInfo => {
    try {
      await AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
      navigation.replace('Home', userInfo);
    } catch (e) {
      console.error(e);
    }
  };

  const handleSignIn = () => {
    setError('');
    try {
      let data = new FormData();
      data.append('mobile', `+966550${MobileNo}`);
      data.append('password', Password);
      data.append('firstname', FirstName);
      data.append('lastname', LastName);
      data.append('email', Email);
      data.append('otptype', 'register');
      data.append('store_id', '1');
      data.append('resend', 'register');

      console.log(data);
      let config = {
        method: 'post',
        url: 'https://alharamstores.com/rest/arabic/V1/api/mobileOtpRegistrationMethod',
        data: data,
      };
      console.log(data, '2');
      axios
        .request(config)
        .then(response => {
            console.log(response.data);
          if (!!response.data.otp) {
            let data = new FormData();
            data.append('mobilenumber', `+966550${MobileNo}`);
            data.append('otptype', 'register');
            data.append('otpcode', response.data.otp);
            data.append('oldmobile', '');

            let config = {
              method: 'post',
              url: 'https://alharamstores.com//rest/arabic/V1/api/mobileOtpVerifyCreateMethod',
              data: data,
            };

            axios
              .request(config)
              .then(response => {
                if (response.data.message === 'success!') {
                  storeData(response.data.data);
                } else {
                  setError('Something Went Wrong');
                }
              })
              .catch(error => {
                console.log(error);
              });
          } else {
            setError('Something Went Wrong');
          }
        })
        .catch(error => {
          console.log(error);
          setError('Something Went Wrong');
        });
    } catch (error) {
      setError('Something Went Wrong');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <Image
            source={require('../../../assets/Logo.png')}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>
      </View>
      <ScrollView>
        <View style={[styles.tabContent, {backgroundColor: 'white'}]}>
          <View style={{marginBottom: 10}}>
            <Text
              style={{
                fontSize: 25,
                textAlign: 'center',
                fontWeight: '700',
                color: 'black',
              }}>
              CREATE
            </Text>
            <Text
              style={{
                margin: 0,
                fontSize: 25,
                textAlign: 'center',
                fontWeight: '700',
                color: 'black',
                textDecorationLine: 'underline',
              }}>
              YOUR ACCOUNT
            </Text>
          </View>
          <View style={styles.inputContainer}>
            <Image
              source={require('../../../assets/iconUser1.png')}
              style={styles.icon}
            />
            <TextInput
              style={[styles.input, {color: 'black'}]}
              placeholder="First name"
              keyboardType="default"
              onChangeText={setFirstName}
              placeholderTextColor={'black'}
            />
          </View>
          <View style={styles.inputContainer}>
            <Image
              source={require('../../../assets/iconUser1.png')}
              style={styles.icon}
            />
            <TextInput
              style={[styles.input, {color: 'black'}]}
              placeholder="Last name"
              keyboardType="default"
              onChangeText={setLastName}
              placeholderTextColor={'black'}
            />
          </View>
          <View style={styles.inputContainer}>
            <Image
              source={require('../../../assets/iconEmail.png')}
              style={styles.icon}
            />
            <TextInput
              style={[styles.input, {color: 'black'}]}
              placeholder="Email"
              keyboardType="email-address"
              onChangeText={setEmail}
              placeholderTextColor={'black'}
            />
          </View>
          <View style={styles.inputContainer}>
            <Image
              source={require('../../../assets/cellphone.png')}
              style={styles.icon}
            />
            <TextInput
              style={[styles.input, {color: 'black'}]}
              placeholder="Mobile number"
              keyboardType="phone-pad"
              maxLength={6}
              onChangeText={setMobileNo}
              placeholderTextColor={'black'}
            />
          </View>
          <View style={styles.inputContainer}>
            <Image
              source={require('../../../assets/iconPassword.png')}
              style={styles.icon}
            />
            <TextInput
              style={[styles.input, {color: 'black'}]}
              placeholder="Password"
              secureTextEntry
              onChangeText={setPassword}
              placeholderTextColor={'black'}
            />
          </View>
          <View style={styles.inputContainer}>
            <Image
              source={require('../../../assets/iconPassword.png')}
              style={styles.icon}
            />
            <TextInput
              style={[styles.input, {color: 'black'}]}
              placeholder="Re-enter password"
              //   secureTextEntry
              onChangeText={setConfirmPassword}
              placeholderTextColor={'black'}
            />
          </View>
          <TouchableOpacity
            style={[
              styles.signInButton,
              {
                backgroundColor: !(
                  !!FirstName &&
                  !!LastName &&
                  !!Email &&
                  !!MobileNo &&
                  !!Password &&
                  !!ConfirmPassword
                )
                  ? 'grey'
                  : 'green',
              },
            ]}
            onPress={handleSignIn}
            disabled={
              !(
                !!FirstName &&
                !!LastName &&
                !!Email &&
                !!MobileNo &&
                !!Password &&
                !!ConfirmPassword
              )
            }>
            <Text style={styles.signInButtonText}>Register</Text>
          </TouchableOpacity>
          {(!!error )&& <Text style={{color:'red', textAlign:'center'}}>{error}</Text>}
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: 100,
            }}>
            <Text style={{color: 'black', fontSize: 17}} onPress={() => navigation.navigate("SignUp")}>Already a Customer?</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  buttonContainer: {
    top: 20,
    borderRadius: 20,
    overflow: 'hidden',
  },
  header: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    height: 170,
    backgroundColor: '#8b0000',
  },
  logoContainer: {
    borderColor: '#d3d3d3',
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
    color: 'black',
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
  tabContent: {
    width: '100%',
    marginVertical: 80,
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
    fontSize: 18,
  },
});
