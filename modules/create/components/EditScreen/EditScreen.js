import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { CameraRoll, Dimensions, View } from 'react-native';

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

const EditScreen = (props) => {
  const {
    editorIsFetching,
    editorValues,
    isFetching,
    iterateAgain,
    results,
    resultId,
    sendEditorValues,
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

        <ResultImagePreview
          onSave={CameraRoll.saveToCameraRoll}
          results={results}
        />

        {!isFetching && (
          <KeepLearningSection
            isFetching={isFetching}
            onPress={() => iterateAgain(resultId)}
          />
        )}
      </View>

      <ScrollViewStyled contentContainerStyle={{ height: height * 0.45 }}>
        <View style={{ marginTop: 20, width: '100%' }}>
          <EditorSlidersHeader
            editorIsFetching={editorIsFetching}
            editorValues={currentEditorValues}
            isFetching={isFetching}
            onCommit={() => setSlidersKey(slidersKey + 1)}
          />

          <EditorSliders
            editorValues={currentEditorValues}
            key={`editor-sliders-${slidersKey}`}
            onSendValues={sendEditorValues}
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
