import PropTypes from 'prop-types';


export const propTypes = {
  children: PropTypes.node,
  icon: PropTypes.string,
  iconColor: PropTypes.string,
  iconColorFocused: PropTypes.string,
  iconSize: PropTypes.number,
  iconStyles: PropTypes.shape(),
  isDisabled: PropTypes.bool,
  isFocused: PropTypes.bool,
  isInverted: PropTypes.bool,
  isLoading: PropTypes.bool,
  isPrimary: PropTypes.bool,
  isSuccess: PropTypes.bool,
  isTiny: PropTypes.bool,
  onPress: PropTypes.func,
};

export const defaultProps = {
  children: undefined,
  icon: undefined,
  iconColor: undefined,
  iconColorFocused: undefined,
  iconSize: 26,
  iconStyles: undefined,
  isDisabled: false,
  isFocused: false,
  isInverted: false,
  isLoading: false,
  isPrimary: false,
  isSuccess: false,
  isTiny: false,
  onPress: undefined,
};
