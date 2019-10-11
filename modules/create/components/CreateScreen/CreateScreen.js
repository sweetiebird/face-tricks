import React from 'react';
import { View } from 'react-native';

import { DefaultText } from 'components';

import { ContainerStyled, ScrollViewStyled } from './styled';


const CreateScreen = () => {
  return (
    <ContainerStyled>
      <ScrollViewStyled contentContainerStyle={{ paddingTop: 30 }}>
        <View>
          <DefaultText>Create</DefaultText>
        </View>
      </ScrollViewStyled>
    </ContainerStyled>
  );
};

CreateScreen.navigationOptions = {
  header: null,
};


export default CreateScreen;
