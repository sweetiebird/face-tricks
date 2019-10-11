import React, { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import { View } from 'react-native';

import { Button, DefaultText } from 'components';

import { ContainerStyled, ScrollViewStyled } from './styled';


const CreateScreen = () => {
  const [imageUri, setImageUri] = useState(null);

  return (
    <ContainerStyled>
      <ScrollViewStyled contentContainerStyle={{ paddingTop: 30 }}>
        <View>
          <DefaultText>Create</DefaultText>
          <Button
            onPress={() => {
              ImagePicker.launchImageLibraryAsync({
                allowsEditing: true,
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
              }).then((result) => {
                if (result.uri) setImageUri(result.uri);
              })
            }}
          >
            Choose Image
          </Button>
        </View>
      </ScrollViewStyled>
    </ContainerStyled>
  );
};

CreateScreen.navigationOptions = {
  header: null,
};


export default CreateScreen;
