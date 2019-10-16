import React from 'react';
import PropTypes from 'prop-types';

import { FlexRowStyled } from './styled';


const FlexRow = ({ children, ...rest }) => {
  return (
    <FlexRowStyled {...rest}>
      {children}
    </FlexRowStyled>
  );
};

FlexRow.propTypes = {
  center: PropTypes.bool,
  children: PropTypes.node,
  flexEnd: PropTypes.bool,
  spaceBetween: PropTypes.bool,
  wrap: PropTypes.bool,
};

FlexRow.defaultProps = {
  center: false,
  children: undefined,
  flexEnd: false,
  spaceBetween: true,
  wrap: true,
};


export default FlexRow;
