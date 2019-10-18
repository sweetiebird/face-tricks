import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { startCase } from 'lodash';

import { colors, icons } from 'constants';

import { Button, DefaultText, FlexRow, Slider } from 'components';


const editorValueStyles = {
  width: '50%',
};

const editorValueLeftStyles = {
  ...editorValueStyles,
  textAlign: 'left',
};

const editorValueRightStyles = {
  ...editorValueStyles,
  textAlign: 'right',
};

const ListItem = (props) => {
  const {
    editorValues,
    item,
    onSendValues,
    setEditorValues,
  } = props;

  const [weight, key, name] = item;
  const adjustedWeight = (Math.round((2 - editorValues[key]) * 100) / 100) * -1;
  const displayWeight = adjustedWeight < 0
    ? adjustedWeight
    : `+${adjustedWeight}`;

  return (
    <View
      style={{
        position: 'relative',
        paddingLeft: 10,
        paddingRight: 10,
      }}
    >
      <FlexRow
        spaceBetween
        style={{
          position: 'absolute',
          left: 10,
        }}
      >
        <DefaultText style={editorValueLeftStyles}>
          {startCase(name)}
        </DefaultText>
        <DefaultText style={editorValueRightStyles}>
          {displayWeight}
        </DefaultText>
      </FlexRow>

      <View
        style={{
          marginTop: 8,
        }}
      >
        <Slider
          initialValue={weight}
          onComplete={(value) => {
            console.log(value);
            const values = {
              ...editorValues,
              [key]: Math.round(value * 100) / 100,
            };
            console.log(values);
            setEditorValues(values);
            onSendValues(values);
            console.log(values);
          }}
        />
      </View>
    </View>
  );
};

ListItem.propTypes = {
  editorValues: PropTypes.shape().isRequired,
  item: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  ).isRequired,
  onSendValues: PropTypes.func.isRequired,
  setEditorValues: PropTypes.func.isRequired,
};


export default ListItem;
