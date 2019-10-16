import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Dimensions, View } from 'react-native';

import { editorKeys } from 'constants';

import {
  EditorSliders,
  EditorSlidersHeader,
  KeepLearningSection,
  LearningTextLoader,
  ResultImagePreview,
} from './components';

import {
  ContainerStyled,
  ScrollViewStyled,
} from './styled';

const editorKeyMap = editorKeys.reduce((obj, key) => ({
  ...obj,
  [key]: 2,
}), {});

import { Convert } from 'utils';

const grabLatentExpression = (rawValues) => {
  const mappedValues = Object.keys(rawValues).reduce((obj, key) => {
    const mappedVal = (2 - rawValues[key]) * -1;
    return {
      ...obj,
      [key]: mappedVal,
    };
  }, {});
  const values = Object.entries(mappedValues).map(([k, v]) => [v, k]);
  const result = Convert.mapconcat(null, values, " ");

  const message = `(grab-latent nil 1.0 (quote (${result})))`;
  return message;
};

const EditScreen = (props) => {
  const {
    editorIsFetching,
    editorValues,
    isFetching,
    iterateAgain,
    results,
    resultId,
    sendEditorValues,
    sendEval,
  } = props;

  const { height } = Dimensions.get('window');

  const [currentEditorValues, setCurrentEditorValues] = useState(editorKeyMap);
  const [slidersKey, setSlidersKey] = useState(0);

  return (
    <ContainerStyled>
      <View style={{ height: height * 0.55 }}>
        {isFetching && (
          <LearningTextLoader />
        )}

        <ResultImagePreview results={results} />

        {!isFetching && (
          <KeepLearningSection
            isFetching={isFetching}
            onPress={() => {
              sendEval(`(do (set-latent (optimize-latent 4)) (grab-image ${grabLatentExpression(currentEditorValues)}))`);
            }}
          />
        )}
      </View>

      <ScrollViewStyled contentContainerStyle={{ height: height * 0.45 }}>
        <View style={{ marginTop: 20, width: '100%' }}>
          <EditorSlidersHeader
            editorIsFetching={editorIsFetching}
            editorValues={currentEditorValues}
            isFetching={isFetching}
            onCommit={() => {
              sendEval(
                `(do (set-latent ${grabLatentExpression(currentEditorValues)}) (grab-image))`,
                editorKeyMap,
              );
              setSlidersKey(slidersKey + 1);
            }}
          />

          <EditorSliders
            editorValues={currentEditorValues}
            key={`editor-sliders-${slidersKey}`}
            onSendValues={() => sendEditorValues(currentEditorValues)}
            setEditorValues={setCurrentEditorValues}
          />
        </View>
      </ScrollViewStyled>
    </ContainerStyled>
  );
};

EditScreen.propTypes = {
  editorValues: PropTypes.shape().isRequired,
  editorIsFetching: PropTypes.bool,
  isFetching: PropTypes.bool,
  imageUri: PropTypes.string,
  results: PropTypes.arrayOf(PropTypes.string),
  resultId: PropTypes.string,
  iterateAgain: PropTypes.func.isRequired,
  sendEditorValues: PropTypes.func.isRequired,
  sendEval: PropTypes.func.isRequired,
  sendImage: PropTypes.func.isRequired,
};

EditScreen.defaultProps = {
  editorIsFetching: false,
  isFetching: false,
  imageUri: null,
  results: [],
  resultId: undefined,
};


export default EditScreen;
