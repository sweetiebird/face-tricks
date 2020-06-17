import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

import { colors, icons } from '../../../../../../constants';

import { PreviewImage } from '../../../../../../components';

import {
  TextWithTinyButton,
} from '../../../../../../components';


const ResultImagePreview = ({ onSave, onEye, results, size, marginH }) => {
  return (
    <View
      style={{
        position: 'relative',
        width: size,
        height: size,
        marginBottom: 10,
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
          size={size}
          marginH={marginH}
        />
      )}

      {results.length > 0 && results.filter(uri => !!uri).map((uri, i) => (
        <React.Fragment key={uri}>
          {(i >= results.length - 1) && (
            <View
              style={{ bottom: 10, zIndex: 10, width: size, marginLeft: marginH, position: 'absolute', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}
            >
              <TextWithTinyButton
                buttonProps={{
                  icon: icons.EYE,
                  iconColor: colors.white,
                  isPrimary: true,
                  noBorder: true,
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
                }}
              />

              <TextWithTinyButton
                buttonProps={{
                  icon: icons.SAVE,
                  iconColor: colors.white,
                  isPrimary: true,
                  noBorder: true,
                  onPress: async () => {
                    await onSave(uri);
                  },
                }}
                textProps={{
                  style: { color: colors.white, marginRight: 8 }
                }}
                viewProps={{
                  flexEnd: true,
                }}
              />
            </View>
          )}

          <PreviewImage
            isBase={i === 0}
            uri={uri}
            style={{ zIndex: 1 }}
            size={size}
            marginH={marginH}
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
