import React from 'react';
import PropTypes from 'prop-types';
import { Dimensions, View } from 'react-native';

import { colors, icons } from 'constants';

import { PreviewImage } from 'components';

import {
  TextWithTinyButton,
} from 'components';


const ResultImagePreview = ({ onSave, onEye, results }) => {
  const { height, width } = Dimensions.get('window');

  const maxImageSize = (height * 0.5) - 60;
  const imageSize = Math.min(width * 0.8, maxImageSize);
  const imageMarginH = (width - imageSize) * 0.5;

  const saveViewPadding = imageMarginH + 10;
  const buttonViewSize = imageSize * 0.5;

  return (
    <View
      style={{
        position: 'relative',
        width: imageSize,
        height: imageSize + 60,
        // marginBottom: 10,
        marginTop: 10,
      }}
    >
      {results.length === 0 && (
        <PreviewImage
          hasBorder
          isBase
          key="placeholder-image"
          uri={null}
          style={{ zIndex: 1 }}
          size={imageSize}
          marginH={imageMarginH}
        />
      )}

      {results.length > 0 && results.filter(uri => !!uri).map((uri, i) => (
        <React.Fragment key={uri}>
          {(i >= results.length - 1) && (
            <TextWithTinyButton
              buttonProps={{
                icon: icons.EYE,
                iconColor: colors.white,
                isPrimary: true,
                onPress: async () => {
                  console.log('onEye', uri);
                  await onEye(uri);
                },
              }}
              textProps={{
                style: { color: colors.white, marginRight: 8 }
              }}
              viewProps={{
                flexStart: true,
                style: {
                  left: saveViewPadding,
                  position: 'absolute',
                  right: buttonViewSize,
                  top: 10,
                  zIndex: 20,
                },
              }}
            />
          )}

          {(i >= results.length - 1) && (
            <TextWithTinyButton
              buttonProps={{
                icon: icons.SAVE,
                iconColor: colors.white,
                isPrimary: true,
                onPress: async () => {
                  await onSave(uri);
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
                  left: buttonViewSize,
                  right: saveViewPadding,
                  zIndex: 10,
                },
              }}
            />
          )}

          <PreviewImage
            isBase={i === 0}
            uri={uri}
            style={{ zIndex: 1 }}
            size={imageSize}
            marginH={imageMarginH}
          />
        </React.Fragment>
      ))}
    </View>
  );
};

ResultImagePreview.propTypes = {
  onSave: PropTypes.func.isRequired,
  onEye: PropTypes.func.isRequired,
  results: PropTypes.arrayOf(PropTypes.string),
};

ResultImagePreview.defaultProps = {
  results: [],
};


export default ResultImagePreview;
