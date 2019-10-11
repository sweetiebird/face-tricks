import React from 'react';
import { Ionicons } from '@expo/vector-icons';

import Colors from 'constants/Colors';

import { styles } from './styled';


const TabBarIcon = (props) => {
  return (
    <Ionicons
      name={props.name}
      size={26}
      style={styles}
      color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
    />
  );
};


export default TabBarIcon;

