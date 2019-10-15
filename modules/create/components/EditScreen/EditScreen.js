import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Dimensions, View } from 'react-native';
import { startCase } from 'lodash';

import { colors, editorKeys, icons } from 'constants';

import {
  DefaultText,
  PreviewImage,
  Progress,
  Slider,
  SuccessButton,
  TabBarIcon,
} from 'components';

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
    results,
    sendEditorValues,
  } = props;

  const [currentEditorValues, setCurrentEditorValues] = useState(editorKeyMap);

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
              marginTop: 10,
              marginBottom: 20,
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

        <ButtonViewStyled>
          <SuccessButton
            icon={icons.CREATE}
            isDisabled={editorIsFetching || isFetching}
            onPress={() => {
              sendEditorValues(currentEditorValues);
            }}
          >
            {isFetching ? 'Working...' : 'Keep Learning'}
          </SuccessButton>
        </ButtonViewStyled>

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
                        setCurrentEditorValues({
                          ...currentEditorValues,
                          [key]: Math.round(value * 100) / 100,
                        });
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
  sendEditorValues: PropTypes.func.isRequired,
  sendImage: PropTypes.func.isRequired,
};

EditScreen.defaultProps = {
  editorIsFetching: false,
  isFetching: false,
  imageUri: null,
  results: [],
};


export default EditScreen;
