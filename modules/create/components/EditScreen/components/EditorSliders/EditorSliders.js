import React from 'react';
import PropTypes from 'prop-types';
import { FlatList } from 'react-native';

import { editorKeys } from 'constants';

import { ListItem } from './components';


const EditorSliders = (props) => {
  const {
    editorValues,
    onSendValues,
    setEditorValues,
  } = props;

  const sum = Object.keys(editorValues).reduce((sum, key) => editorValues[key] + sum, 0);

  return (
    <FlatList
      data={editorKeys}
      extraData={sum}
      keyExtractor={item => item[1]}
      renderItem={({ item }) => (
        <ListItem
          editorValues={editorValues}
          item={item}
          onSendValues={onSendValues}
          setEditorValues={setEditorValues}
        />
      )}
    />
  );
};

EditorSliders.propTypes = {
  editorValues: PropTypes.shape().isRequired,
  onSendValues: PropTypes.func.isRequired,
  setEditorValues: PropTypes.func.isRequired,
};


export default EditorSliders;
