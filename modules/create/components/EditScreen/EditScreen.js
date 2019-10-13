import React from 'react';
import PropTypes from 'prop-types';
import { Dimensions, View } from 'react-native';

import {
  DefaultText,
  PreviewImage,
  Progress,
} from 'components';

import {
  ContainerStyled,
  ScrollViewStyled,
} from './styled';


const EditScreen = (props) => {
  const { isFetching, results } = props;

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

EditScreen.navigationOptions = {
  header: null,
};


export default EditScreen;
