import React, { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import { View } from 'react-native';

import { InvertedButton, PreviewImage } from 'components';

import { ContainerStyled, ScrollViewStyled } from './styled';


const CreateScreen = () => {
  const [imageData, setImageData] = useState(null);

  console.log(imageData);

  return (
    <ContainerStyled>
      <ScrollViewStyled contentContainerStyle={{ paddingTop: 30 }}>
        <View style={{ width: '60%', marginLeft: '20%', marginRight: '20%', marginBottom: 40 }}>
          <InvertedButton
            icon="md-cloud-upload"
            onPress={() => {
              ImagePicker.launchImageLibraryAsync({
                allowsEditing: true,
                aspect: [1, 1],
                exif: true,
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
              }).then((result) => {
                const { cancelled, ...rest } = result;
                if (!cancelled) setImageData(rest);
              })
            }}
          >
            Add Image
          </InvertedButton>
        </View>

        {!!imageData && (
          <PreviewImage
            uri={imageData.uri}
          />
        )}
      </ScrollViewStyled>
    </ContainerStyled>
  );
};

CreateScreen.navigationOptions = {
  header: null,
};


export default CreateScreen;
