import React from 'react';
import PropTypes from 'prop-types';
import { Dimensions, View } from 'react-native';

import { PreviewImage } from 'components';

const ResultImagePreview = ({ results }) => {
  const { width: size } = Dimensions.get('window');

  if (!results.length) {
    return null;
  }

  return (
    <View
      style={{
        position: 'relative',
        width: size,
        height: size * 0.8,
        marginBottom: 20,
        marginTop: 10,
      }}
    >
      {results.map(uri => (
        <PreviewImage
          key={uri}
          uri={uri}
        />
      ))}
    </View>
  );
};

ResultImagePreview.propTypes = {
  results: PropTypes.arrayOf(PropTypes.string),
};

ResultImagePreview.defaultProps = {
  results: [],
};


export default ResultImagePreview;
