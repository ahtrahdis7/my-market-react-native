import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import LoginScreen from './src/screens/login/login.js';
import AppContainer from './src/navigations/AppNavigation';

export default function App() {
  const [isloggedin, setIsLoggedin] = useState(true)

  if (isloggedin) {
    return (
      <AppContainer />
    );
  } else {
    return (
      < LoginScreen />
    );
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
