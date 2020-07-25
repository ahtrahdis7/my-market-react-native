import React, { useState } from "react";
import styles from "./style";
import logo from '../../../assets/logo.jpg';
import { Keyboard, Text, View, TextInput, TouchableWithoutFeedback, Alert, KeyboardAvoidingView, ImageBackground } from 'react-native';
import { Button } from 'react-native-elements';
import AppContainer from '../../navigations/AppNavigation';

export default function LoginScreen(props) {
  console.log(props)
  const onOtpPress = () => {
    if(phoneNumber.length == 10){
      fetch('http://192.168.43.72:3000/api/login/init', 
      {
        method: 'POST',
        headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "phone": '+91'+phoneNumber
        })
      })
      .then(res => res.json())
      .then(function(res) {
        if(res.status == 200){
          alert("OTP sent successfully")
        }
      })
      .catch(function (error) {
        alert(error);
      });
    }else{
      alert('Invalid Phone Number')
    }
  }
  const onSubmit = () => {
      fetch('http://192.168.43.72:3000/api/login/verify', 
      {
        method: 'POST',
        headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "phone": '+91'+phoneNumber,
          "otp": otpVal
        })
      })
      .then(res => res.json())
      .then(function(res) {
        if(res.status == 200) {
          alert('success');
          props.navigation.navigate('Home')
        }else{
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
            {/* <TextInput
              keyboardType="numeric"
              onChangeText={value => {
                if (isNaN(value)) {
                  return;
                }
                if (value.length > 4) {
                  return;
                }
                let val =
                  value + '----'.substr(0, 4 - value.length);
                let a = [...val];
                setOtpVal(a);
                setOtp(value);
              }}
              style={{ height: 0 }}
              autoFocus={false}
            />
            <View style={styles.otpBoxesContainer}>
              {[0, 1, 2, 3].map((item, index) => (
                <Text style={styles.otpBox} key={index}>
                  {otp[item]}
                </Text>
              ))}
            </View> */}
            <TextInput
              maxLength={6}
              keyboardType="numeric"
              placeholder="OTP"
              placeholderColor="#c4c3cb"
              style={styles.otpBoxesContainer}
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
              onPress={onSubmitPartner}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
