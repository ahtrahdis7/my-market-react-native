import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import LoginScreen from './src/screens/login/login.js'
import AppContainer from './src/navigations/AppNavigation';

export default class App extends React.Component {
  constructor(props){
    super(props);
    // this.state = {
    //   pass = "0"
    // };
  }

  // checkPass(){

  // }

  render() {
    if(0){
      return (
        <LoginScreen />
      );
    } else {
      return (
        <AppContainer />
     );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
