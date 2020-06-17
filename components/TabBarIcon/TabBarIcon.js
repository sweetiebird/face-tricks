import React from 'react';
import { Ionicons } from '@expo/vector-icons';

import { colors } from '../../constants';

import { styles } from './styled';


const TabBarIcon = (props) => {
  return (
    <Ionicons
      name={props.name}
      size={26}
      style={styles}
      color={props.color || (props.isFocused ? colors.primaryHover : colors.tabIconDefault)}
    />
  );
};


export default TabBarIcon;

