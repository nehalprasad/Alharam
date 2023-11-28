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
import axios from 'axios';
import FormData from 'form-data';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import AsyncStorage from '@react-native-async-storage/async-storage';


const SignUp = () => {
  const [FirstName, setFirstName] = useState('');
  const [LastName, setLastName] = useState('');
  const [Email, setEmail] = useState('');
  const [MobileNo, setMobileNo] = useState('');
  const [Password, setPassword] = useState('');
  const [ConfirmPassword, setConfirmPassword] = useState();
  const [error, setError] = useState('');

  const storeData = async (userInfo) => {
    try {
      await AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
      navigation.replace("Home", userInfo)
    } catch (e) {
      console.error(e);
    }
  };

  const handleSignUp = () => {
    setError('');
    try {
      let data = new FormData();
      // data.append('mobile', `+966550${MobileNo}`);
      data.append('password', Password);
      // data.append('firstname', FirstName);
      // data.append('lastname', LastName);
      data.append('email', Email);
      data.append('otptype', 'login');
      data.append('store_id', '1');
      data.append('resend', 'login');

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
    <View>
      <Text>SignUp</Text>
    </View>
  )
}

export default Signup

const styles = StyleSheet.create({})