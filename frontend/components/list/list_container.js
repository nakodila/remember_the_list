import { connect } from 'react-redux';

import * from '../../actions/list_actions';
import ListComp from './list_component';

const mapStateToProps = (state) => {
  return{

  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchLists: () => dispatch(fetchLists()),
    fetchList: (id) => dispatch(fetchList(id)),
    createList: (list) => dispatch(createList(list)),
    updateList: (id) => dispatch(updateList(id)),
    deleteList: (id) => dispatch(deleteList(id)),
  }
}
