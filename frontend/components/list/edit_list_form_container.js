import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchList, updateList } from '../../actions/list_actions';
import ListEdit from './edit_list_form';

const mapStateToProps = (state, ownProps) => {
  return {
    list: state.lists[ownProps.match.params.id]
  }
};

const mapDispatchToProps = dispatch => {
  return {
    fetchList: (id) => dispatch(fetchList(id)),
    updateList: (list) => dispatch(updateList(list)),
  }
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ListEdit));
