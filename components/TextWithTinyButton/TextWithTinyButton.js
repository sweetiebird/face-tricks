import React from 'react';
import PropTypes from 'prop-types';

import { propTypes, defaultProps } from '../../components/commonProps';

import Button from '../Button';
import DefaultText from '../DefaultText';
import { FlexRow } from '../layout';


const TextWithTinyButton = ({ children, buttonProps, textProps, viewProps }) => {
  return (
    <FlexRow center {...viewProps}>
      {!!children && (
        <DefaultText {...textProps}>
          {children}
        </DefaultText>
      )}

      <Button iconSize={16} {...buttonProps} size="T" />
    </FlexRow>
  );
};

TextWithTinyButton.propTypes = {
  ...propTypes,
  children: PropTypes.string,
  buttonProps: PropTypes.shape(),
  textProps: PropTypes.shape(),
  viewProps: PropTypes.shape(),
};

TextWithTinyButton.defaultProps = {
  ...defaultProps,
  children: undefined,
  buttonProps: {},
  textProps: {},
  viewProps: {},
};


export default TextWithTinyButton;
