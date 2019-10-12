import React from 'react';

import { colors } from 'constants';

import { ImageWrapperStyled, ImageStyled } from './styled';


const PreviewImage = ({ uri }) => {
  return (
    <ImageWrapperStyled
      style={{
        borderWidth: 2,
        borderColor: colors.smoke,
        shadowColor: colors.smoke,
        shadowRadius: 8,
        shadowOpacity: 1.0,
        shadowOffset: { width: 0, height: 1 },
      }}
    >
      <ImageStyled source={{ uri }} />
    </ImageWrapperStyled>
  );
};


export default PreviewImage;
