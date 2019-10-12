import React, { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';

import { icons } from 'constants';

import { InvertedButton, PreviewImage } from 'components';

import {
  ButtonViewStyled,
  ContainerStyled,
  ScrollViewStyled,
} from './styled';


const CreateScreen = () => {
  const [imageData, setImageData] = useState(null);

  console.log(imageData);

  return (
    <ContainerStyled>
      <ScrollViewStyled contentContainerStyle={{ paddingTop: 30 }}>
        <ButtonViewStyled>
          <InvertedButton
            icon={icons.ADD_IMAGE}
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
        </ButtonViewStyled>

        {!!imageData && <PreviewImage uri={imageData.uri} />}
      </ScrollViewStyled>
    </ContainerStyled>
  );
};

CreateScreen.navigationOptions = {
  header: null,
};


export default CreateScreen;
