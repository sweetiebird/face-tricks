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
    isDanger,
    isDisabled,
    isFocused,
    isInverted,
    isLoading,
    isPrimary,
    isSuccess,
    isTiny,
    noBorder,
    onPress,
    size,
    style = {},
    textProps,
  } = props;

  const highlightStyle = { borderRadius: 100, ...style };

  return (
    <TouchableHighlight
      activeOpacity={0.75}
      disabled={isDisabled}
      onPress={onPress}
      style={highlightStyle}
      underlayColor={colors.smoke}
    >
      <ButtonStyled
        danger={isDanger}
        disabled={isDisabled}
        inverted={isInverted}
        large={size === 'L'}
        medium={size === 'M'}
        noBorder={noBorder}
        primary={isPrimary}
        small={size === 'S'}
        success={isSuccess}
        tiny={size === 'T'}
      >
        {!!icon && (
          <Ionicons
            name={icon}
            size={iconSize}
            style={{
              marginRight: children ? 8 : 0,
              ...(iconStyles || {}),
            }}
            color={isDisabled ? colors.smoke : iconColor}
          />
        )}

        {!!children && (
          <ButtonTextStyled
            danger={isDanger}
            disabled={isDisabled}
            inverted={isInverted}
            large={size === 'L'}
            medium={size === 'M'}
            primary={isPrimary}
            small={size === 'S'}
            success={isSuccess}
            textProps={textProps}
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
