import PropTypes from 'prop-types';


export const propTypes = {
  css: PropTypes.any,
  style: PropTypes.shape(),
};

export const defaultProps = {
  css: undefined,
  style: {},
};
