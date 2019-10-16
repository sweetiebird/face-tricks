import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Dimensions, View } from 'react-native';
import { startCase } from 'lodash';

import { colors, create, editorKeys, icons } from 'constants';

import {
  DefaultText,
  Progress,
  Slider,
  SuccessButton,
  TabBarIcon,
  TextWithTinyButton,
} from 'components';

import { ResultImagePreview } from './components';

import {
  ButtonViewStyled,
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

  const { width: size } = Dimensions.get('window');

  const [currentEditorValues, setCurrentEditorValues] = useState(editorKeyMap);

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
          <Progress progress={((100 / create.iterations + 1) * results.length) / 100} />
        )}

        <ResultImagePreview results={results} />

        <View
          style={{
            paddingLeft: size * 0.1,
            paddingRight: size * 0.1,
            marginTop: 10,
          }}
        >
          <TextWithTinyButton
            buttonProps={{
              icon: isFetching ? icons.HOURGLASS : icons.PLAY,
              iconColor: colors.white,
              isDisabled: isFetching,
              isPrimary: true,
              onPress: () => iterateAgain(resultId),
            }}
            textProps={{
              style: { marginRight: 8 }
            }}
          >
            Not quite right? Keep learning
          </TextWithTinyButton>
        </View>

        <ButtonViewStyled>
          <SuccessButton
            icon={icons.CREATE}
            isDisabled={editorIsFetching || isFetching}
            onPress={() => {
              sendEditorValues(currentEditorValues);
            }}
          >
            {editorIsFetching ? 'Updating...' : 'Update Features'}
          </SuccessButton>
        </ButtonViewStyled>

        <View>
          <View style={{ display: 'flex', flexDirection: 'row', paddingLeft: 20, marginBottom: 10 }}>
            <View style={{ paddingTop: 2, marginRight: 10 }}>
              <TabBarIcon color={colors.text} name={icons.SETTINGS} />
            </View>

            <DefaultText heading>
              Edit
            </DefaultText>
          </View>

          {editorKeys.map((key) => {
            return (
              <React.Fragment key={key}>
                <View style={{ display: 'flex', flexDirection: 'row' }}>
                  <View style={{ flex: 0.5 }}>
                    <DefaultText style={{ paddingLeft: 10, paddingRight: 5, textAlign: 'right' }}>
                      {startCase(key)}
                    </DefaultText>
                  </View>

                  <View style={{ flex: 1 }}>
                    <Slider
                      onComplete={(value) => {
                        console.log(value);
                        const values = {
                          ...currentEditorValues,
                          [key]: Math.round(value * 100) / 100,
                        }
                        setCurrentEditorValues(values);
                        sendEditorValues(values);
                        console.log(values);
                      }}
                    />
                  </View>
                </View>
              </React.Fragment>
            );
          })}
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
