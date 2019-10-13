import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native';

import { Auth } from 'services';

import { DefaultText } from 'components';


const LoginScreen = () => {
  const [loginTried, setLoginTried] = useState(false);

  useEffect(() => {
    if (!loginTried) {
      Auth.login().then(result => console.log(result));
    }
    setLoginTried(true);
  });

  return (
    <SafeAreaView>
      <DefaultText>Login pls</DefaultText>
    </SafeAreaView>
  );
};

LoginScreen.navigationOptions = {
  title: 'Login',
};


export default LoginScreen;
