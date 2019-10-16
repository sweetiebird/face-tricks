import React from 'react';
import PropTypes from 'prop-types';

import { propTypes, defaultProps } from 'components/commonProps';

import Button from '../Button';
import DefaultText from '../DefaultText';
import { FlexRow } from '../layout';


const TextWithTinyButton = ({ children, buttonProps, textProps }) => {
  return (
    <FlexRow center>
      <DefaultText {...textProps}>
        {children}
      </DefaultText>

      <Button iconSize={16} {...buttonProps} size="T" />
    </FlexRow>
  );
};

TextWithTinyButton.propTypes = {
  ...propTypes,
  children: PropTypes.string,
  buttonProps: PropTypes.shape(),
  textProps: PropTypes.shape(),
};

TextWithTinyButton.defaultProps = {
  ...defaultProps,
  children: undefined,
  buttonProps: {},
  textProps: {},
};


export default TextWithTinyButton;
