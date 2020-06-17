import React, { useEffect, useState } from 'react';
import { Animated } from 'react-native';

import { colors } from '../../constants';

import { ImageWrapperStyled, ImageStyled } from './styled';


const PreviewImage = ({ hasBorder, isBase, uri, style, size, marginH }) => {
  const [fadeAnim] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(
      fadeAnim, {
        toValue: 1,
        duration: 800,
      }
    ).start();
  }, []);

  const frameStyles = {};

  if (hasBorder) {
    frameStyles.borderWidth = 2;
    frameStyles.borderColor = colors.smoke
  }

  if (isBase) {
    frameStyles.shadowRadius = 8;
    frameStyles.shadowColor = colors.smoke;
    frameStyles.shadowOpacity = 1.0;
    frameStyles.shadowOffset = { width: 0, height: 1 };
  }
  return (
    <Animated.View style={{ ...style, opacity: fadeAnim }}>
      <ImageWrapperStyled
        size={size}
        marginH={marginH}
        style={frameStyles}
      >
        {!!uri && (
          <ImageStyled
            size={size}
            source={{ uri }}
          />
        )}
      </ImageWrapperStyled>
    </Animated.View>
  );
};


export default PreviewImage;
