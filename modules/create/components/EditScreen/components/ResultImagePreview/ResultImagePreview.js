import React from 'react';
import PropTypes from 'prop-types';
import { Dimensions, View } from 'react-native';

import { PreviewImage } from 'components';

import { CameraRoll } from 'react-native'

import { colors, create, editorKeys, icons } from 'constants';
import {
  TextWithTinyButton,
} from 'components';

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
        marginTop: 10,
        marginBottom: 20,
      }}
    >
      {results.map((uri, i) => (
        <React.Fragment>
          { (i >= results.length - 1) ? (
              <TextWithTinyButton
                buttonProps={{
                  icon: icons.CREATE,
                  iconColor: colors.white,
                  isPrimary: true,
                  onPress: () => {
                    console.log('saving', uri);
                    CameraRoll.saveToCameraRoll(uri);
                  },
                }}
                textProps={{
                  italic: true,
                  style: { marginRight: 8 }
                }}
              >
                Save Result
              </TextWithTinyButton>
            ) : null }
          { (i >= results.length - 1) ? (
              <PreviewImage
                key={uri}
                uri={uri}
              />
            ) : null }
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
