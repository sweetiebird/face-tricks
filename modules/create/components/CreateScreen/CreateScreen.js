import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Dimensions, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

import { icons } from 'constants';

import { FS } from 'utils';

import {
  DefaultText,
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
  const { isFetching, results, sendImage } = props;
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
                if (!cancelled) setImageData(rest);
              } catch (err) {
                console.log('error', error);
                console.log(error.message);
              }
            }}
          >
            Add Image
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

        {isFetching && (
          <DefaultText
            italic
            style={{
              marginTop: 20,
              width: '100%',
              textAlign: 'center',
            }}
          >
            Learning your face...
          </DefaultText>
        )}

        {results.length > 0 && (
          <View
            style={{
              position: 'relative',
              width: size,
              height: size * 0.8,
            }}
          >
            {results.map(uri => (
              <PreviewImage
                key={uri}
                uri={uri}
              />
            ))}
          </View>
        )}

        <ButtonViewStyled>
          <SuccessButton
            icon={icons.CREATE}
            isDisabled={isFetching || !imageData}
            isLoading={isFetching}
            onPress={async () => {
              const file = await FS.getFile(imageData.uri);
              sendImage(file);
            }}
          >
            Generate
          </SuccessButton>
        </ButtonViewStyled>
      </ScrollViewStyled>
    </ContainerStyled>
  );
};

CreateScreen.propTypes = {
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
