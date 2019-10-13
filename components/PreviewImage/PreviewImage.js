import React from 'react';
import { Dimensions } from 'react-native';

import { colors } from 'constants';

import { ImageWrapperStyled, ImageStyled } from './styled';


const PreviewImage = ({ uri }) => {
  const { width } = Dimensions.get('window');

  return (
    <ImageWrapperStyled
      size={width}
      style={{
        borderWidth: 2,
        borderColor: colors.smoke,
        shadowColor: colors.smoke,
        shadowRadius: 8,
        shadowOpacity: 1.0,
        shadowOffset: { width: 0, height: 1 },
      }}
    >
      <ImageStyled
        size={width}
        source={{ uri }}
      />
    </ImageWrapperStyled>
  );
};


export default PreviewImage;
