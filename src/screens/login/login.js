import React, { useState } from "react";

import styles from "./style";
import { Keyboard, Text, View, TextInput, TouchableWithoutFeedback, Alert, KeyboardAvoidingView } from 'react-native';
import { Button } from 'react-native-elements';

export default function LoginScreen() {
  const onOtpPress = () => {
    setloginbtn("Login");
    alert("OTP sent successfully")
  }
  const [loginbtn, setloginbtn] = useState('Get OTP');
  const [otp, setOtp] = useState(['1', '2', '3', '4']);
  const [otpVal, setOtpVal] = useState('');

  return (
    <KeyboardAvoidingView style={styles.containerView} behavior="padding">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.loginScreenContainer}>
          <View style={styles.loginFormView}>
            <Text style={styles.logoText}>My Store</Text>
            <TextInput
              maxLength={10}
              keyboardType="numeric"
              placeholder="Phone Number"
              placeholderColor="#c4c3cb"
              style={styles.loginFormTextInput}
            />

            <TextInput
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
            </View>
            <Button
              buttonStyle={styles.otpButton}
              onPress={onOtpPress}
              title={loginbtn}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
