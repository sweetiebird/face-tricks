import React from 'react';
import PropTypes from 'prop-types';
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
      </ButtonStyled>
    </TouchableHighlight>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  icon: PropTypes.string,
  iconColor: PropTypes.string,
  iconColorFocused: PropTypes.string,
  iconStyles: PropTypes.shape(),
  isDisabled: PropTypes.bool,
  isFocused: PropTypes.bool,
  isInverted: PropTypes.bool,
  isPrimary: PropTypes.bool,
  isSuccess: PropTypes.bool,
  onPress: PropTypes.func,
};

Button.defaultProps = {
  children: undefined,
  icon: undefined,
  iconColor: undefined,
  iconColorFocused: undefined,
  iconStyles: undefined,
  isDisabled: false,
  isFocused: false,
  isInverted: false,
  isPrimary: false,
  isSuccess: false,
  onPress: undefined,
};


export default Button;
