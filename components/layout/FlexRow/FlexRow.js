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
  spaceBetween: PropTypes.bool,
  wrap: PropTypes.bool,
};

FlexRow.defaultProps = {
  center: false,
  children: undefined,
  spaceBetween: true,
  wrap: true,
};


export default FlexRow;
