import { connect } from 'react-redux';
import * as ListActions from '../../actions/list_actions';
import ListIndex from './list_component';

const mapStateToProps = (state) => {
    return {
      errors: state.errors.list,
      lists: Object.values(state.session.currentUser.lists)
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

export default connect(mapStateToProps, mapDispatchToProps)(ListIndex);
