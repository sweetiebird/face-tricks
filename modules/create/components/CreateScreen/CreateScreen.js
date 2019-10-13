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
  const { result, sendImage } = props;
  const [imageData, setImageData] = useState(null);

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
        {!!result && <PreviewImage uri={result} />}

        <ButtonViewStyled>
          <SuccessButton
            icon={icons.CREATE}
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
  sendImage: PropTypes.func.isRequired,
  result: PropTypes.any,
};

CreateScreen.defaultProps = {
  result: null,
};

CreateScreen.navigationOptions = {
  header: null,
};


export default CreateScreen;
