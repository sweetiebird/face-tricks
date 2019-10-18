import React from 'react';

import { colors } from 'constants';

import { propTypes, defaultProps } from './props';

import Button from './Button';


const SuccessButton = ({ children, ...rest }) => {
  return (
    <Button
      {...rest}
      iconColor={colors.success}
      isSuccess
    >
      {children}
    </Button>
  );
};

SuccessButton.propTypes = propTypes;

SuccessButton.defaultProps = defaultProps;


export default SuccessButton;
