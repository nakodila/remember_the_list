import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ListForm from './list_form';
import { fetchList, createList, updateList } from '../../actions/list_actions';

const mapStateToProps = (state, ownProps) => {
  let list = { title: "" };
  let formType = "new";
  if (ownProps.match.path == "/lists/:id/edit") {
    // debugger
    list = state.lists[ownProps.match.params.id];
    formType = "edit";
  }
  return { list, formType };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const action = ownProps.match.path === "/" ? createList : updateList;
  return {
    fetchList: id => dispatch(fetchList(id)),
    action: list => dispatch(action(list))
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ListForm));
