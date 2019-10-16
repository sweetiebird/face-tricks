import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Dimensions, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

import { icons } from 'constants';

import { Navigation } from 'services';

import { FS } from 'utils';

import {
  InvertedButton,
  PreviewImage,
  SuccessButton,
} from 'components';

import {
  ButtonViewStyled,
  ContainerStyled,
  ScrollViewStyled,
} from './styled';


const CreateScreen = (props) => {
  const { imageAdded, isFetching, sendImage } = props;
  const [imageData, setImageData] = useState(null);

  const { width: size } = Dimensions.get('window');

  return (
    <ContainerStyled>
      <ScrollViewStyled contentContainerStyle={{ paddingTop: 30 }}>
        <ButtonViewStyled>
          <InvertedButton
            icon={icons.ADD_IMAGE}
            onPress={async () => {
              try {
                const result = await ImagePicker.launchImageLibraryAsync({
                  allowsEditing: true,
                  aspect: [1, 1],
                  exif: true,
                  mediaTypes: ImagePicker.MediaTypeOptions.Images,
                });
                const {cancelled, ...rest} = result;
                if (!cancelled) {
                  setImageData(rest);
                  imageAdded(rest.uri);
                }
              } catch (err) {
                console.log('error', err);
                console.log(err.message);
              }
            }}
          >
            Pick Photo
          </InvertedButton>
        </ButtonViewStyled>

        <ButtonViewStyled>
          <InvertedButton
            icon={icons.ADD_IMAGE}
            onPress={async () => {
              try {
                const result = await ImagePicker.launchCameraAsync({
                  allowsEditing: true,
                  aspect: [1, 1],
                  exif: true,
                  mediaTypes: ImagePicker.MediaTypeOptions.Images,
                });
                const {cancelled, ...rest} = result;
                if (!cancelled) {
                  setImageData(rest);
                  imageAdded(rest.uri);
                }
              } catch (err) {
                console.log('error', err);
                console.log(err.message);
              }
            }}
          >
            Snap Photo
          </InvertedButton>
        </ButtonViewStyled>


        {!!imageData && (
          <View
            style={{
              position: 'relative',
              width: size,
              height: size * 0.8,
            }}
          >
            <PreviewImage uri={imageData.uri} />
          </View>
        )}

        <ButtonViewStyled>
          <SuccessButton
            icon={icons.CREATE}
            isDisabled={!imageData || isFetching}
            onPress={async () => {
              const file = await FS.getFile(imageData.uri);
              sendImage(file);
              Navigation.navigate('Edit');
            }}
          >
            Start Learning
          </SuccessButton>
        </ButtonViewStyled>
      </ScrollViewStyled>
    </ContainerStyled>
  );
};

CreateScreen.propTypes = {
  imageAdded: PropTypes.func.isRequired,
  isFetching: PropTypes.bool,
  results: PropTypes.arrayOf(PropTypes.string),
  sendImage: PropTypes.func.isRequired,
};

CreateScreen.defaultProps = {
  isFetching: false,
  results: [],
};

CreateScreen.navigationOptions = {
  header: null,
};


export default CreateScreen;
