import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {
  compose,
  lifecycle,
  branch,
  renderComponent,
} from 'recompose';

import Component from './component';
import {HugeLoader} from '../../components/loader';
import {fetchSchedule} from '../../reducers/actions';

export const mapStateToProps = (state, ownProps) => ({
  ...state.schedule,
});

export const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    fetchSchedule,
  }, dispatch);
}

export const componentDidMount = function () {
  this.props.fetchSchedule();
}

const isLoading = (props) => (props.isLoading || props.data === null);

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({componentDidMount}),
  branch(
    isLoading,
    renderComponent(HugeLoader)
  ),
)(Component);
