import React, { useState } from 'react';
import AppContainer from './src/navigations/AppNavigation';
import { AppLoading } from 'expo';

import * as Font from 'expo-font';

const getFonts = () => Font.loadAsync({
  'comic-regular': require('./assets/fonts/ComicNeue-Regular.ttf'),
  'comic-bold': require('./assets/fonts/ComicNeue-Bold.ttf'),
  'lilita-regular': require('./assets/fonts/LilitaOne-Regular.ttf')
});

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded) {
    return (
      <AppContainer />
    );
  } else {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)}
      />
    )
  }
};

