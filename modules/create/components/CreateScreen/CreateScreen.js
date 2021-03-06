import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Dimensions, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

import { icons } from 'constants';

import { Error, Navigation } from 'services';

import { FS, System } from 'utils';

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

  const { height, width } = Dimensions.get('window');

  const maxImageSize = (height * 0.5) - 60;
  const imageSize = Math.min(width * 0.8, maxImageSize);
  const imageMarginH = (width - imageSize) * 0.5;

  return (
    <ContainerStyled>
      <ScrollViewStyled contentContainerStyle={{ paddingTop: 30 }}>
        <ButtonViewStyled>
          <InvertedButton
            icon={icons.ADD_IMAGE}
            onPress={async () => {
              try {
                const granted = await System.requestCameraRollPermissions();

                if (granted) {
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
                }
              } catch (err) {
                Error.log(err, { message: err.message, location: 'onPress pick photo' });
              }
            }}
          >
            Pick Photo
          </InvertedButton>
        </ButtonViewStyled>

        <ButtonViewStyled>
          <InvertedButton
            icon={icons.TAKE_IMAGE}
            onPress={async () => {
              try {
                const granted = await System.requestCameraPermissions();

                if (granted) {
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
                }
              } catch (err) {
                Error.log(err, { message: err.message, location: 'onPress snap photo' });
              }
            }}
          >
            Snap Photo
          </InvertedButton>
        </ButtonViewStyled>

        <View
          style={{
            position: 'relative',
            width: width,
            height: imageSize,
            marginTop: 10,
            marginBottom: 10,
          }}
        >
          <PreviewImage
            uri={imageData && imageData.uri}
            size={imageSize}
            marginH={imageMarginH}
          />
        </View>

        <ButtonViewStyled>
          <SuccessButton
            icon={icons.CREATE}
            isDisabled={!imageData || isFetching}
            onPress={async () => {
              const file = await FS.getFile(imageData.uri);
              sendImage(file, true);
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
