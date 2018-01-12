import * as listAPIUtil from '../util/list_api_util'

export const RECEIVE_LISTS = 'RECEIVE_LISTS';
export const RECEIVE_LIST = 'RECEIVE_LIST';
export const REMOVE_LIST = 'REMOVE_LIST';
export const RECEIVE_LIST_ERRORS = 'RECEIVE_LIST_ERRORS';
export const CLEAR_LIST_ERRORS = 'CLEAR_LIST_ERRORS';
export const RECEIVE_TASKS_LISTS = 'RECEIVE_TASKS_LISTS';


const receiveLists = (lists) => {
  return {
    type: RECEIVE_LISTS,
    lists
  }
};

const receiveListsTasks = (tasks) => {
  return {
    type: RECEIVE_TASKS_LISTS,
    tasks
  }
};

const receiveList = (payload) => {
  return {
    type: RECEIVE_LIST,
    list: payload.list
  }
}
const removeList = (payload) => {
  return {
    type: REMOVE_LIST,
    listId: payload.list.id
  }
};

export const receiveListErrors = errors => ({
  type: RECEIVE_LIST_ERRORS,
  errors
});

export const clearListErrors = () => ({
  type: CLEAR_LIST_ERRORS,
});

export const fetchListsTasks = (listId) => (dispatch) => {
  return taskAPIUtil.fetchListsTasks(listId).then(payload => {
    dispatch(receiveListsTasks(payload)); dispatch(clearTaskErrors);
  }, (err) => {
    dispatch(receiveErrors(err.responseJSON));
  });
};

export const fetchLists = () => (dispatch) => {
  return listAPIUtil.fetchLists().then(lists => dispatch(receiveLists(lists)));
};

export const fetchList = (id) => (dispatch) => {
  return listAPIUtil.fetchList(id).then(payload => dispatch(receiveList(payload)));
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
