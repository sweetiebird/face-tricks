import React from 'react';
import { ActivityIndicator, TouchableHighlight, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { colors } from 'constants';

import { propTypes, defaultProps } from './props';

import { ButtonStyled, ButtonTextStyled } from './styled';


const Button = (props) => {
  const {
    children,
    icon,
    iconColor,
    iconColorFocused,
    iconSize,
    iconStyles,
    isDisabled,
    isFocused,
    isInverted,
    isLoading,
    isPrimary,
    isSuccess,
    isTiny,
    onPress,
  } = props;

  const highlightStyle = { borderRadius: 100 };

  return (
    <TouchableHighlight
      activeOpacity={0.75}
      onPress={onPress}
      style={highlightStyle}
      underlayColor={colors.white}
    >
      <ButtonStyled
        disabled={isDisabled}
        inverted={isInverted}
        primary={isPrimary}
        success={isSuccess}
        tiny={isTiny}
      >
        {!!icon && (
          <Ionicons
            name={icon}
            size={iconSize}
            style={{
              marginRight: children ? 8 : 0,
              ...(iconStyles || {}),
            }}
            color={isFocused ? iconColorFocused : iconColor}
          />
        )}

        {!!children && (
          <ButtonTextStyled
            disabled={isDisabled}
            inverted={isInverted}
            primary={isPrimary}
            success={isSuccess}
          >
            {children}
          </ButtonTextStyled>
        )}

        {isLoading && (
          <View
            style={{
              position: 'absolute',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
            }}
          >
            <ActivityIndicator size="small" />
          </View>
        )}
      </ButtonStyled>
    </TouchableHighlight>
  );
};

Button.propTypes = propTypes;

Button.defaultProps = defaultProps;


export default Button;
