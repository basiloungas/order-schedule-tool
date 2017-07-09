import {connect} from 'react-redux';

import Component from './component';

export const mapStateToProps = (state, ownProps) => {
  return {
    store: state.stores.find(item => item.id === ownProps.data.stores[0])
  };
};

export default connect(mapStateToProps)(Component);
