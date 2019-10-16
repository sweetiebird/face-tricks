import React from 'react';
import PropTypes from 'prop-types';
import { Dimensions, View } from 'react-native';

import { PreviewImage } from 'components';

import { CameraRoll } from 'react-native'

import { colors, icons } from 'constants';

import {
  TextWithTinyButton,
} from 'components';

const ResultImagePreview = ({ results }) => {
  const { width: size } = Dimensions.get('window');

  if (!results.length) {
    return (
      <PreviewImage
        key="placeholder-image"
        uri={null}
        style={{ zIndex: 1, marginTop: 10 }}
      />
    );
  }

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
      {results.map((uri, i) => (
        <React.Fragment>
          {(i >= results.length - 1) && (
            <TextWithTinyButton
              buttonProps={{
                icon: icons.SAVE,
                iconColor: colors.white,
                isPrimary: true,
                onPress: () => {
                  console.log('saving', uri);
                  CameraRoll.saveToCameraRoll(uri);
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
            key={uri}
            uri={uri}
            style={{ zIndex: 1 }}
          />
        </React.Fragment>
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
