import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Dimensions, View } from 'react-native';
import { startCase } from 'lodash';

import { editorKeys } from 'constants';

import {
  DefaultText,
  PreviewImage,
  Progress,
  Slider,
} from 'components';

import {
  ContainerStyled,
  ScrollViewStyled,
} from './styled';


const editorKeyMap = editorKeys.reduce((obj, key) => ({
  ...obj,
  [key]: 0.5,
}), {});

const EditScreen = (props) => {
  const { isFetching, results } = props;

  const [editorValues, setEditorValues] = useState(editorKeyMap);

  const { width: size } = Dimensions.get('window');

  return (
    <ContainerStyled>
      <ScrollViewStyled contentContainerStyle={{ paddingTop: 30 }}>
        {isFetching && (
          <DefaultText
            italic
            style={{
              marginTop: 20,
              marginBottom: 20,
              width: '100%',
              textAlign: 'center',
            }}
          >
            Learning your face (this can take a minute)...
          </DefaultText>
        )}

        {isFetching && (
          <Progress progress={results.length ? results.length * 0.1 : 0} />
        )}

        {results.length > 0 && (
          <View
            style={{
              position: 'relative',
              width: size,
              height: size * 0.8,
              marginTop: 20,
            }}
          >
            {results.map(uri => (
              <PreviewImage
                key={uri}
                uri={uri}
              />
            ))}
          </View>
        )}

        {!isFetching && (
          <View>
            {editorKeys.map((key) => (
              <>
                <DefaultText style={{ paddingLeft: 20, paddingRight: 20 }}>
                  {startCase(key)}
                </DefaultText>
                <Slider
                  key={key}
                  onComplete={(value) => {
                    setEditorValues({
                      ...editorValues,
                      [key]: value,
                    });
                  }}
                />
              </>
            ))}
          </View>
        )}
      </ScrollViewStyled>
    </ContainerStyled>
  );
};

EditScreen.propTypes = {
  isFetching: PropTypes.bool,
  imageUri: PropTypes.string,
  results: PropTypes.arrayOf(PropTypes.string),
  sendImage: PropTypes.func.isRequired,
};

EditScreen.defaultProps = {
  isFetching: false,
  imageUri: null,
  results: [],
};


export default EditScreen;
