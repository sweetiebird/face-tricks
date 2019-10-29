import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { CameraRoll, Dimensions, View, StatusBar, SafeAreaView } from 'react-native';

import { create, editorKeys } from 'constants';

import { Convert, System } from 'utils';

import { Error } from 'services';

import {
  Actions,
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
    imageUri,
    isFetching,
    results,
    sendEditorValues,
    sendEval,
  } = props;

  const { width } = Dimensions.get('window');

  const imageSize = width;
  const imageMarginH = (width - imageSize) * 0.5;
  const topSectionHeight = imageSize + 60;

  const [currentEditorValues, setCurrentEditorValues] = useState(editorKeyMap);
  const [slidersKey, setSlidersKey] = useState(0);

  const firstIdx = results.length < 3 ? 0 : results.length - 3;
  const displayResults = results.slice(firstIdx, results.length);

  return (
    <SafeAreaView style={{ flex: 1, height: '100%' }}>
      <View style={{ flex: 1, height: '100%' }}>
        <StatusBar hidden />
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
            original={imageUri}
            results={displayResults}
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
                sendEval(`(do (set-latent (optimize-latent optimize-latent-steps*)) (w/size ${create.imageSize} ${create.imageSize} (grab-image ${grabLatentExpression(currentEditorValues)})))`);
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
          onReset={() => {
            setSlidersKey(slidersKey + 1);
            setCurrentEditorValues(editorKeyMap);
            sendEditorValues(editorKeyMap);
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
      </View>
    </SafeAreaView>
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

EditScreen.navigationOptions = {
  header: null,
};


export default EditScreen;
