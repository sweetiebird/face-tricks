import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { actions, selectors } from 'modules/create';

import presenter from './EditScreen';


const mapStateToProps = createStructuredSelector({
  editorValues: selectors.getEditorValues,
  editorIsFetching: selectors.getEditorIsFetching,
  imageUri: selectors.getImageUri,
  isFetching: selectors.getIsFetching,
  results: selectors.getResults,
});

const mapDispatchToProps = {
  sendEditorValues: actions.sendEditorValuesRequest,
  sendImage: actions.sendImageRequest,
};


export default connect(mapStateToProps, mapDispatchToProps)(presenter);

