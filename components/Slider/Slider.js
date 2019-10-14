import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Slider as RNSlider, View } from 'react-native';

import { colors } from 'constants';


const Slider = (props) => {
  const {
    initialValue,
    max,
    min,
    onChange,
    onComplete,
    step,
  } = props;

  return (
    <View style={{ width: '100%', padding: 10 }}>
      <RNSlider
        maximumValue={max}
        minimumValue={min}
        minimumTrackTintColor={colors.primary}
        onValueChange={(val) => {
          if (onChange) {
            onChange(val);
          }
        }}
        onSlidingComplete={(val) => {
         if (onComplete) {
           onComplete(val);
         }
        }}
        thumbTintColor={colors.primaryHover}
        step={step}
        style={{ width: '100%' }}
        value={initialValue}
      />
    </View>
  );
};

Slider.propTypes = {
  initialValue: PropTypes.number,
  max: PropTypes.number,
  min: PropTypes.number,
  onChange: PropTypes.func,
  onComplete: PropTypes.func,
  step: PropTypes.number,
};

Slider.defaultProps = {
  initialValue: 0.5,
  max: 1,
  min: 0,
  onChange: undefined,
  onComplete: undefined,
  step: 0.05,
};


export default Slider;
