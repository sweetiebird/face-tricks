import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

import { colors, icons } from '../../../../../../constants';

import {
  DangerButton,
  DefaultText,
  SuccessButton,
  TabBarIcon,
}from '../../../../../../components';


const editTitleViewStyles = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginBottom: 10,
  paddingLeft: 10,
  paddingRight: 20,
};

const textIconViewStyles = {
  display: 'flex',
  flexDirection: 'row',
  paddingTop: 2,
  width: '30%',
};

const iconViewStyles = {
  marginRight: 10,
  paddingTop: 1,
};

const editButtonViewStyles = {
  width: '70%',
  flexDirection: 'row',
  justifyContent: 'flex-end',
};

const EditorSlidersHeader = (props) => {
  const {
    editorIsFetching,
    isFetching,
    onCommit,
    onReset
  } = props;

  return (
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
        <DangerButton
          iconSize={16}
          isDisabled={editorIsFetching || isFetching}
          onPress={onReset}
          size="S"
          style={{ marginRight: 12 }}
        >
          Reset
        </DangerButton>

        <SuccessButton
          iconSize={16}
          isDisabled={editorIsFetching || isFetching}
          onPress={onCommit}
          size="S"
        >
          Apply
        </SuccessButton>
      </View>
    </View>
  );
};

EditorSlidersHeader.propTypes = {
  editorIsFetching: PropTypes.bool,
  isFetching: PropTypes.bool,
  onCommit: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
};

EditorSlidersHeader.defaultProps = {
  editorIsFetching: false,
  isFetching: false,
};


export default EditorSlidersHeader;
