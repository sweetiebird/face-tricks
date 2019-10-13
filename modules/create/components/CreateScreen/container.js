import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { actions, selectors } from 'modules/create';

import presenter from './CreateScreen';


const mapStateToProps = createStructuredSelector({
  isFetching: selectors.getIsFetching,
  result: selectors.getResult,
});

const mapDispatchToProps = {
  sendImage: actions.sendImageRequest,
};


export default connect(mapStateToProps, mapDispatchToProps)(presenter);

