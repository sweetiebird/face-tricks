import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

import { colors, icons } from 'constants';

import {
  DefaultText,
  SuccessButton,
  TabBarIcon,
} from 'components';


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

const editButtonViewStyles = {
  width: '60%',
  flexDirection: 'row',
  justifyContent: 'flex-end',
};

const EditorSlidersHeader = (props) => {
  const {
    editorIsFetching,
    isFetching,
    onUpdate,
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
        <SuccessButton
          iconSize={16}
          isDisabled={editorIsFetching || isFetching}
          onPress={onUpdate}
          size="S"
        >
          {editorIsFetching ? 'Updating...' : 'Update Features'}
        </SuccessButton>
      </View>
    </View>
  );
};

EditorSlidersHeader.propTypes = {
  editorIsFetching: PropTypes.bool,
  isFetching: PropTypes.bool,
  onUpdate: PropTypes.func.isRequired,
};

EditorSlidersHeader.defaultProps = {
  editorIsFetching: false,
  isFetching: false,
};


export default EditorSlidersHeader;
