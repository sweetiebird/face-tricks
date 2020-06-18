import React from 'react';
import PropTypes from 'prop-types';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { Ionicons  } from '@expo/vector-icons';
import { StatusBar } from 'react-native';

import { Navigation } from 'services';

import { AppNavigator } from 'modules/nav/components';

import { MainView } from './styled';


class AppMain extends React.Component {
  state = {
    isLoadingComplete: false,
  };

  loadFonts = async () => Promise.all([
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
  ]);

  componentDidUpdate(prevProps) {
    const { isAuthenticated } = this.props;
    const { isAuthenticated: wasAuthenticated } = prevProps;
    if (!wasAuthenticated && isAuthenticated) {
      Navigation.navigate('Main');
    } else if (wasAuthenticated && !isAuthenticated) {
      Navigation.navigate('Auth');
    }
  }

  setLoadingComplete = () => {
    this.setState({ isLoadingComplete: true });
  };

  render() {
    const { isAuthenticated, skipLoadingScreen } = this.props;
    const { isLoadingComplete } = this.state;

    if (isAuthenticated === undefined
      || (!isLoadingComplete && !skipLoadingScreen)
    ) {
      return (
        <AppLoading
          startAsync={this.loadFonts}
          onError={global.bugsnagClient.notify}
          onFinish={() => this.setLoadingComplete(true)}
        />
      );
    }

    return (
      <MainView>
        <StatusBar />

        <AppNavigator ref={Navigation.setTopLevelNavigator} />
      </MainView>
    );
  }
}

AppMain.propTypes = {
  isAuthenticated: PropTypes.bool,
  skipLoadingScreen: PropTypes.bool,
};

AppMain.defaultProps = {
  isAuthenticated: undefined,
  skipLoadingScreen: false,
};


export default AppMain;
