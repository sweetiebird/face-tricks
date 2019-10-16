import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { startCase } from 'lodash';

import { editorKeys } from 'constants';

import { DefaultText, Slider } from 'components';


const editorValueTextStyles = {
  paddingLeft: 10,
  paddingRight: 5,
  textAlign: 'left',
};

const EditorSliders = (props) => {
  const {
    editorValues,
    onSendValues,
    setEditorValues,
  } = props;

  return (
    <React.Fragment>
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
                      ...editorValues,
                      [key]: Math.round(value * 100) / 100,
                    };
                    setEditorValues(values);
                    onSendValues(values);
                    console.log(values);
                  }}
                />
              </View>
            </View>
          </React.Fragment>
        );
      })}
    </React.Fragment>
  );
};

EditorSliders.propTypes = {
  editorValues: PropTypes.shape().isRequired,
  onSendValues: PropTypes.func.isRequired,
  setEditorValues: PropTypes.func.isRequired,
};


export default EditorSliders;
