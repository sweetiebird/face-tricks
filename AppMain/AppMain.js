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
