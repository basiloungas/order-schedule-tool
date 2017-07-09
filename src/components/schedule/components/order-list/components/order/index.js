import {connect} from 'react-redux';

import Component from './component';

export const mapStateToProps = (state, ownProps) => {
  return {
    shopper: state.shoppers.find(item => item.id === ownProps.data.shopper)
  };
};

export const mapDispatchToProps = (dispatch, ownProps)  => {
  return {
    markAsDelivered: (orderId) => {
      const {
        timeslotId,
        deliveryGroupId,
      } = ownProps;

      const data = {
        timeslotId,
        deliveryGroupId,
        orderId,
      };

      console.log(data);

      // dispatch(new markAsDelivered(data))
    },
  };
}



export default connect(mapStateToProps, mapDispatchToProps)(Component);
