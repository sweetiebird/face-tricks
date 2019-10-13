import React, { useState } from 'react';
import PropTypes from 'prop-types';
import * as ImagePicker from 'expo-image-picker';

import { icons } from 'constants';

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
  const { isFetching, result, sendImage } = props;
  const [imageData, setImageData] = useState(null);

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

        {!!imageData && <PreviewImage uri={imageData.uri} />}

        {result.map(uri => (
          <PreviewImage
            key={uri}
            uri={uri}
          />
        ))}

        <ButtonViewStyled>
          <SuccessButton
            icon={icons.CREATE}
            isDisabled={isFetching}
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
  sendImage: PropTypes.func.isRequired,
  result: PropTypes.arrayOf(PropTypes.string),
};

CreateScreen.defaultProps = {
  isFetching: false,
  result: [],
};

CreateScreen.navigationOptions = {
  header: null,
};


export default CreateScreen;
