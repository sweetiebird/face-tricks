import React from 'react';

import { colors } from 'constants';

import { propTypes, defaultProps } from './props';

import Button from './Button';


const PrimaryButton = ({ children, ...rest }) => {
  return (
    <Button
      {...rest}
      iconColor={colors.white}
      isPrimary
    >
      {children}
    </Button>
  );
};

PrimaryButton.propTypes = propTypes;

PrimaryButton.defaultProps = defaultProps;


export default PrimaryButton;
