import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { CameraRoll, Dimensions, View } from 'react-native';

import { create, editorKeys } from 'constants';

import { System } from 'utils';

import { Error } from 'services';

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

const editorKeyMap = editorKeys.reduce((obj, [weight, key]) => ({
  ...obj,
  [key]: weight,
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

  return `(grab-latent nil 1.0 (quote (${result})))`;
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

  const { height, width } = Dimensions.get('window');

  const maxImageSize = (height * 0.5) - 60;
  const imageSize = Math.min(width * 0.8, maxImageSize);
  const imageMarginH = (width - imageSize) * 0.5;
  const topSectionHeight = imageSize + 60;

  const [currentEditorValues, setCurrentEditorValues] = useState(editorKeyMap);
  const [slidersKey, setSlidersKey] = useState(0);

  return (
    <ContainerStyled>
      <View style={{ height: topSectionHeight }}>
        <ResultImagePreview
          onSave={async (uri) => {
            try {
              const granted = await System.requestCameraRollPermissions();

              if (granted) {
                CameraRoll.saveToCameraRoll(uri);
              }
            } catch (err) {
              console.log(err, err.message);
              Error.log(err, { message: err.message, location: 'onSave to camera roll' });
            }
          }}
          onEye={() => {
            sendEval(`(grab-target)`);
          }}
          results={results}
          size={imageSize}
          marginH={imageMarginH}
        />

        {isFetching && (
          <LearningTextLoader />
        )}

        {!isFetching && (
          <KeepLearningSection
            isFetching={isFetching}
            onPress={() => {
              sendEval(`(do (set-latent (optimize-latent 4)) (w/size ${create.imageSize} ${create.imageSize} (grab-image ${grabLatentExpression(currentEditorValues)})))`);
            }}
          />
        )}
      </View>

      <EditorSlidersHeader
        editorIsFetching={editorIsFetching}
        editorValues={currentEditorValues}
        isFetching={isFetching}
        onCommit={() => {
          setCurrentEditorValues(editorKeyMap);
          sendEval(
            `(do (set-latent ${grabLatentExpression(currentEditorValues)}) (w/size ${create.imageSize} ${create.imageSize} (grab-image)))`
          );
          setSlidersKey(slidersKey + 1);
        }}
      />

      <ScrollViewStyled contentContainerStyle={{ paddingBottom: 10 }}>
        <View style={{ width: '100%' }}>
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
