import * as listAPIUtil from '../util/list_api_util'

export const RECEIVE_LISTS = 'RECEIVE_LISTS';
export const RECEIVE_LIST = 'RECEIVE_LIST';
export const REMOVE_LISTS = 'REMOVE_LIST';
export const RECEIVE_LIST_ERRORS = 'RECEIVE_LIST_ERRORS';


const receiveLists = (lists) => {
  return {
    type: 'RECEIVE_LISTS',
    lists
  }
};
const receiveList = (list) => {
  return {
    type: 'RECEIVE_LIST',
    list
  }
}
const removeList = (list) => {
  return {
    type: 'REMOVE_LIST',
  listId: list.id
  }
};

export const receiveErrors = errors => ({
  type: RECEIVE_LIST_ERRORS,
  errors
});

export const fetchLists = () => (dispatch) => {
  return listAPIUtil.fetchLists().then(lists => dispatch(receiveLists(lists)));
};

export const fetchList = (id) => (dispatch) => {
  return listAPIUtil.fetchList(id).then(list => dispatch(receiveList(list)));
};

export const createList = (list) => (dispatch) => {
  return listAPIUtil.createList(list).then(list => dispatch(receiveList(list)));
};
export const updateList = (id) => (dispatch) => {
  return listAPIUtil.updateList(id).then(list => dispatch(receiveList(list)));
};
export const deleteList = (id) => (dispatch) => {
  return listAPIUtil.deleteList(id).then(list => dispatch(removeList(list)));
};
