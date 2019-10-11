import React, { useState } from 'react';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { Ionicons  } from '@expo/vector-icons';
import { StatusBar } from 'react-native';

import { AppNavigator } from 'modules/nav/components';

import { MainView } from './styled';


const AppMain = ({ skipLoadingScreen }) => {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  if (!isLoadingComplete && !skipLoadingScreen) {
    return (
      <AppLoading
        startAsync={async () => {
          await Promise.all([
            Font.loadAsync({
              ...Ionicons.font,
              'roboto-black': require('assets/fonts/Roboto-Black.ttf'),
              'roboto-black-italic': require('assets/fonts/Roboto-BlackItalic.ttf'),
              'roboto-italic': require('assets/fonts/Roboto-Italic.ttf'),
              'roboto-light': require('assets/fonts/Roboto-Light.ttf'),
              'roboto-light-italic': require('assets/fonts/Roboto-LightItalic.ttf'),
              'roboto-medium': require('assets/fonts/Roboto-Medium.ttf'),
              'roboto-regular': require('assets/fonts/Roboto-Regular.ttf'),
              'roboto-thin': require('assets/fonts/Roboto-Thin.ttf'),
            }),
          ])
        }}
        onError={global.bugsnagClient.notify}
        onFinish={() => setLoadingComplete(true)}
      />
    );
  } else {
    return (
      <MainView>
        <StatusBar barStyle="dark-content" />
        <AppNavigator />
      </MainView>
    );
  }
};


export default AppMain;
