import React from 'react';
import PropTypes from 'prop-types';

import { editorKeys } from 'constants';

import { ListItem } from './components';


const EditorSliders = (props) => {
  const {
    editorValues,
    onSendValues,
    setEditorValues,
  } = props;

  return (
    <React.Fragment>
      {editorKeys.map(item => (
        <ListItem
          key={item[1]}
          editorValues={editorValues}
          item={item}
          onSendValues={onSendValues}
          setEditorValues={setEditorValues}
        />
      ))}
    </React.Fragment>
  );
};

EditorSliders.propTypes = {
  editorValues: PropTypes.shape().isRequired,
  onSendValues: PropTypes.func.isRequired,
  setEditorValues: PropTypes.func.isRequired,
};


export default EditorSliders;
