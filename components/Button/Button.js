import React from 'react';
import { TouchableHighlight } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { colors } from 'constants';

import { ButtonStyled, ButtonTextStyled } from './styled';


const Button = (props) => {
  const {
    children,
    icon,
    iconColor,
    iconColorFocused,
    iconStyles,
    isDisabled,
    isFocused,
    isInverted,
    isPrimary,
    onPress,
  } = props;

  return (
    <TouchableHighlight
      activeOpacity={0.75}
      onPress={onPress}
      style={{ borderRadius: 100 }}
      underlayColor={colors.white}
    >
      <ButtonStyled
        disabled={isDisabled}
        inverted={isInverted}
        primary={isPrimary}
      >
        {!!icon && (
          <Ionicons
            name={icon}
            size={26}
            style={{
              marginRight: 8,
              ...(iconStyles || {}),
            }}
            color={isFocused ? iconColorFocused : iconColor}
          />
        )}

        <ButtonTextStyled
          disabled={isDisabled}
          inverted={isInverted}
          primary={isPrimary}
        >
          {children}
        </ButtonTextStyled>
      </ButtonStyled>
    </TouchableHighlight>
  );
};


export default Button;
