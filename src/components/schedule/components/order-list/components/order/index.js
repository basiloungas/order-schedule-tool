import {connect} from 'react-redux';

import Component from './component';
import {markAsDelivered} from '../../../../../../reducers/schedule/actions';

export const mapStateToProps = (state, ownProps) => {
  return {
    shopper: state.shoppers.find(item => item.id === ownProps.data.shopper)
  };
};

export const mapDispatchToProps = (dispatch, ownProps)  => ({
  markAsDelivered: (orderId) => {
    const {
      timeslotId,
      deliveryGroupId,
    } = ownProps;

    dispatch(markAsDelivered({
      timeslotId,
      deliveryGroupId,
      orderId,
    }));
  }
});



export default connect(mapStateToProps, mapDispatchToProps)(Component);
