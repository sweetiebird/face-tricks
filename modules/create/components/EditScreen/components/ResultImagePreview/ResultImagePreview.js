import React from 'react';
import PropTypes from 'prop-types';
import { Dimensions, View } from 'react-native';

import { colors, icons } from 'constants';

import { PreviewImage } from 'components';

import {
  TextWithTinyButton,
} from 'components';


const ResultImagePreview = ({ onSave, results }) => {
  const { width: size } = Dimensions.get('window');

  const saveViewPadding = (size * 0.1) + 10;

  return (
    <View
      style={{
        position: 'relative',
        width: size,
        height: size * 0.8,
        marginBottom: 10,
        marginTop: 10,
      }}
    >
      {results.length === 0 && (
        <PreviewImage
          key="placeholder-image"
          uri={null}
          style={{ zIndex: 1 }}
        />
      )}

      {results.length > 0 && results.map((uri, i) => (
        <React.Fragment key={uri}>
          {(i >= results.length - 1) && (
            <TextWithTinyButton
              buttonProps={{
                icon: icons.SAVE,
                iconColor: colors.white,
                isPrimary: true,
                onPress: () => {
                  onSave(uri);
                },
              }}
              textProps={{
                style: { color: colors.white, marginRight: 8 }
              }}
              viewProps={{
                flexEnd: true,
                style: {
                  position: 'absolute',
                  top: 10,
                  left: size * 0.1,
                  right: saveViewPadding,
                  zIndex: 10,
                },
              }}
            />
          )}

          <PreviewImage
            uri={uri}
            style={{ zIndex: 1 }}
          />
        </React.Fragment>
      ))}
    </View>
  );
};

ResultImagePreview.propTypes = {
  onSave: PropTypes.func.isRequired,
  results: PropTypes.arrayOf(PropTypes.string),
};

ResultImagePreview.defaultProps = {
  results: [],
};


export default ResultImagePreview;
