import React, { useEffect, useState } from 'react';
import { Animated, Dimensions } from 'react-native';

import { colors } from 'constants';

import { ImageWrapperStyled, ImageStyled } from './styled';


const PreviewImage = ({ uri }) => {
  const [fadeAnim] = useState(new Animated.Value(0));
  const { width } = Dimensions.get('window');

  useEffect(() => {
    Animated.timing(
      fadeAnim, {
        toValue: 1,
        duration: 800,
      }
    ).start();
  }, []);

  return (
    <Animated.View style={{ opacity: fadeAnim }}>
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
    </Animated.View>
  );
};


export default PreviewImage;
