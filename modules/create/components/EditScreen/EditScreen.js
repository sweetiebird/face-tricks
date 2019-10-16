import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Dimensions, View, ActivityIndicator } from 'react-native';
import { startCase } from 'lodash';

import { colors, create, editorKeys, icons } from 'constants';

import {
  DefaultText,
  Progress,
  Slider,
  SuccessButton,
  TabBarIcon,
  TextWithTinyButton,
  FlexRow,
} from 'components';

import { ResultImagePreview } from './components';

import {
  ContainerStyled,
  ScrollViewStyled,
} from './styled';


const editorKeyMap = editorKeys.reduce((obj, key) => ({
  ...obj,
  [key]: 2,
}), {});

const editTitleViewStyles = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginBottom: 10,
  paddingLeft: 20,
  paddingRight: 20,
};

const textIconViewStyles = {
  display: 'flex',
  flexDirection: 'row',
  paddingTop: 2,
  width: '40%',
};

const iconViewStyles = {
  marginRight: 10,
  paddingTop: 2,
};

const learningTextStyle = {
  marginTop: 10,
  marginRight: 8,
  textAlign: 'right',
};

const editButtonViewStyles = {
  width: '60%',
  flexDirection: 'row',
  justifyContent: 'flex-end',
};

const editorValueTextStyles = {
  paddingLeft: 10,
  paddingRight: 5,
  textAlign: 'left',
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
  } = props;

  const { width: size, height } = Dimensions.get('window');

  const [currentEditorValues, setCurrentEditorValues] = useState(editorKeyMap);

  return (
    <ContainerStyled>
      <View style={{ height: height * 0.55 }}>
        {isFetching && (
          <FlexRow center>
            <DefaultText
              italic
              style={learningTextStyle}
            >
              Learning your face! This can take a minute.
            </DefaultText>

            <ActivityIndicator style={{ top: 4 }} />
          </FlexRow>
        )}

        <ResultImagePreview results={results} />

        {!isFetching && (
          <View
            style={{
              paddingLeft: size * 0.1,
              paddingRight: size * 0.1,
            }}
          >
            <TextWithTinyButton
              buttonProps={{
                icon: isFetching ? icons.HOURGLASS : icons.CREATE,
                iconColor: colors.white,
                isDisabled: isFetching,
                isPrimary: true,
                onPress: () => iterateAgain(resultId),
              }}
              textProps={{
                italic: true,
                style: { marginRight: 8 }
              }}
            >
              Not quite right? Keep learning
            </TextWithTinyButton>
          </View>
        )}
      </View>

      <ScrollViewStyled contentContainerStyle={{ height: height * 0.45 }}>
        <View style={{ marginTop: 20, width: '100%' }}>
          <View style={editTitleViewStyles}>
            <View style={textIconViewStyles}>
              <View style={iconViewStyles}>
                <TabBarIcon color={colors.text} name={icons.SETTINGS} />
              </View>

              <DefaultText heading>
                Edit
              </DefaultText>
            </View>

            <View style={editButtonViewStyles}>
              <SuccessButton
                iconSize={16}
                isDisabled={editorIsFetching || isFetching}
                onPress={() => {
                  sendEditorValues(currentEditorValues);
                }}
                size="S"
              >
                {editorIsFetching ? 'Updating...' : 'Update Features'}
              </SuccessButton>
            </View>
          </View>

          {editorKeys.map((key) => {
            return (
              <React.Fragment key={key}>
                <View style={{ display: 'flex', flexDirection: 'row' }}>
                  <View style={{ flex: 0.5 }}>
                    <DefaultText style={editorValueTextStyles}>
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
                        };
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
