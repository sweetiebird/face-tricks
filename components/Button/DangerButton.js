import React from 'react';

import { colors } from '../../constants';

import { propTypes, defaultProps } from './props';

import Button from './Button';


const DangerButton = ({ children, ...rest }) => {
  return (
    <Button
      {...rest}
      iconColor={colors.danger}
      isDanger
    >
      {children}
    </Button>
  );
};

DangerButton.propTypes = propTypes;

DangerButton.defaultProps = defaultProps;


export default DangerButton;
