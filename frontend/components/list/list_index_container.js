import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as ListActions from '../../actions/list_actions';
import ListIndex from './list_index_component';

const mapStateToProps = (state) => {
    return {
      errors: state.errors.list,
      // currentUserLists: state.session.currentUser.listIds,
      lists: Object.values(state.lists)
    };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchLists: () => dispatch(ListActions.fetchLists()),
    fetchList: (id) => dispatch(ListActions.fetchList(id)),
    createList: (list) => dispatch(ListActions.createList(list)),
    updateList: (id) => dispatch(ListActions.updateList(id)),
    deleteList: (id) => dispatch(ListActions.deleteList(id)),
    clearListErrors: () => dispatch(ListActions.clearListErrors()),
  }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ListIndex));
