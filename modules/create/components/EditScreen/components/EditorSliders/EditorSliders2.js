import React from 'react';
import PropTypes from 'prop-types';
import { SectionList, View } from 'react-native';
import { startCase } from 'lodash';

import { editorKeys, sections } from 'constants';

import { DefaultText, Slider } from 'components';

import { ListItem } from './components';


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

  const renderSectionHeader = ({ section }) => {
    const { title } = section;
    console.log('section', section);
    return (
      <View>
        <DefaultText>{title}</DefaultText>
      </View>
    );
  };

  const renderItem = ({ index, item, section }) => {
    return (
      <ListItem
        editorValues={editorValues}
        index={index}
        item={item}
        onSendValues={onSendValues}
        section={section}
        setEditorValues={setEditorValues}
      />
    );
  };

  return (
    <SectionList
      keyExtractor={item => item[1]}
      renderItem={renderItem}
      renderSectionHeader={renderSectionHeader}
      sections={sections}
      stickySectionHeadersEnabled={true}
    />
  );
};

EditorSliders.propTypes = {
  editorValues: PropTypes.shape().isRequired,
  onSendValues: PropTypes.func.isRequired,
  setEditorValues: PropTypes.func.isRequired,
};


export default EditorSliders;
