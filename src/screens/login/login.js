import React, { useState } from "react";
import styles from "./style";
import logo from '../../../assets/logo.jpg';
import { Keyboard, Text, View, TextInput, TouchableWithoutFeedback, Alert, KeyboardAvoidingView, ImageBackground } from 'react-native';
import { Button } from 'react-native-elements';
import { AsyncStorage } from 'react-native';

export default function LoginScreen(props) {
  // console.log(props)
  const onOtpPress = () => {
    if (phoneNumber.length == 10) {
      fetch('http://testdeployment-env.eba-eqdcmu3a.us-east-2.elasticbeanstalk.com/api/login/init',
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            "phone": '+91' + phoneNumber
          })
        })
        .then(res => res.json())
        .then(function (res) {
          if (res != undefined) {
            alert("OTP sent successfully")
          }
        })
        .catch(function (error) {
          alert("Something went wrong");
        });
    } else {
      alert('Invalid Phone Number')
    }
  }
  const onSubmit = () => {
    fetch('http://testdeployment-env.eba-eqdcmu3a.us-east-2.elasticbeanstalk.com/api/login/verify',
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "phone": '+91' + phoneNumber,
          "otp": otpVal
        })
      })
      .then(res => res.json())
      .then(async function (res) {
        if (res != null) {
          alert('success');
          console.log(res);
          AsyncStorage.setItem('user', JSON.stringify(res));

          var user = await AsyncStorage.getItem('user');
          var parsed = JSON.parse(user);

          // console.log('fetched user');
          // console.log(parsed);


          props.navigation.navigate('Home')
        } else {
          alert('try again')
        }
      })
      .catch(function (error) {
        alert(error);
      });

  }
  const onSubmitPartner = () => {
    console.log("submit form");
  }
  const [phoneNumber, onChangeNumber] = useState('')
  const [loginbtn, setloginbtn] = useState('Get OTP');
  const [otp, setOtp] = useState(['1', '2', '3', '4']);
  const [otpVal, setOtpVal] = useState('');

  return (
    <KeyboardAvoidingView style={styles.containerView} behavior="padding">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.loginScreenContainer}>
          <View style={styles.loginFormView}>
            <View style={styles.head}>
              <ImageBackground source={logo} style={styles.header} >
              </ImageBackground>
            </View>
            <TextInput
              maxLength={13}
              keyboardType="numeric"
              placeholder="Phone Number"
              placeholderColor="#c4c3cb"
              style={styles.loginFormTextInput}
              value={phoneNumber}
              onChangeText={text => onChangeNumber(text)}
            />
            <Button
              buttonStyle={styles.otpButton}
              onPress={onOtpPress}
              title={loginbtn}
            />
            <TextInput
              maxLength={6}
              keyboardType="numeric"
              placeholder="Enter OTP"
              placeholderColor="#c4c3cb"
              style={styles.OtpInput}
              value={otpVal}
              onChangeText={text => setOtpVal(text)}
            />
            <Button
              buttonStyle={styles.submitButton}
              title="Submit"
              onPress={onSubmit}
            />
            <Button
              buttonStyle={styles.submitPartnerButton}
              title="Login as Partner"
              onPress={() => props.navigation.navigate('OrderDetails')}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}