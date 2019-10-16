import React from 'react';

import { propTypes, defaultProps } from 'components/commonProps';

import { DefaultTextStyled } from './styled';


const DefaultText = (props) => {
  return (
    <DefaultTextStyled {...props} />
  );
};

DefaultText.propTypes = propTypes;

DefaultText.defaultProps = defaultProps;


export default DefaultText;
