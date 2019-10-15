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
    iconStyles,
    isDisabled,
    isFocused,
    isInverted,
    isLoading,
    isPrimary,
    isSuccess,
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
        success={isSuccess}
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
          success={isSuccess}
        >
          {children}
        </ButtonTextStyled>

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
