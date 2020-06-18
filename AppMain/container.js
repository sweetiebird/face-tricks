import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectors as userSelectors } from 'modules/user';

import presenter from './AppMain';


const mapStateToProps = createStructuredSelector({
  isAuthenticated: userSelectors.getIsAuthenticated,
});


export default connect(mapStateToProps)(presenter);
