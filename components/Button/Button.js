import React from 'react';
import { TouchableHighlight } from 'react-native';

import { colors } from 'constants';

import { ButtonStyled, ButtonTextStyled } from './styled';


const Button = ({ children, onPress }) => {
  return (
    <TouchableHighlight
      activeOpacity={0.75}
      onPress={onPress}
      style={{ borderRadius: 100 }}
      underlayColor={colors.white}
    >
      <ButtonStyled>
        <ButtonTextStyled>
          {children}
        </ButtonTextStyled>
      </ButtonStyled>
    </TouchableHighlight>
  );
};


export default Button;
