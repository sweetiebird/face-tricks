import React from 'react';
import PropTypes from 'prop-types';

import { FlexColStyled } from './styled';


const FlexCol = ({ children, ...rest }) => {
  return (
    <FlexColStyled {...rest}>
      {children}
    </FlexColStyled>
  );
};

FlexCol.propTypes = {
  center: PropTypes.bool,
  children: PropTypes.node,
  spaceBetween: PropTypes.bool,
};

FlexCol.defaultProps = {
  center: false,
  children: undefined,
  spaceBetween: true,
};


export default FlexCol;
