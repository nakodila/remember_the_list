import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ListShow from './list_show_component';
import { fetchList } from '../../actions/list_actions';

const mapStateToProps = (state, ownProps) => {
  return {
  list: state.lists[ownProps.match.params.id] || {}
}};

const mapDispatchToProps = dispatch => ({
  fetchList: (id) => dispatch(fetchList(id))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ListShow));
