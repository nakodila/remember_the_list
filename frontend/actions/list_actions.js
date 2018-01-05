import * as listAPIUtil from '../util/list_api_util'

export const RECEIVE_LISTS = 'RECEIVE_LISTS';
export const RECEIVE_LIST = 'RECEIVE_LIST';
export const REMOVE_LISTS = 'REMOVE_LIST';


export const fetchLists = () => (dispatch) => {
  return listAPIUtil.fetchLists().then(lists => dispatch(receiveLists(lists)));
}

export const fetchList = (id) => (dispatch) => {
  return listAPIUtil.fetchList(id).then(list => dispatch(receiveList(list)));
}

export const createList = (list) => (dispatch) => {
  return listAPIUtil.createList(list).then(list => dispatch(receiveList(list)));
}
export const updateList = (id) => (dispatch) => {
  return listAPIUtil.updateList(id).then(list => dispatch(receiveList(list)));
}
export const deleteList = (id) => (dispatch) => {
  return listAPIUtil.deleteList(id).then(list => dispatch(removeList(list)));
}


const receiveLists = (lists) => {
  type: 'RECEIVE_LISTS',
  lists
}
const receiveLis = (lis) => {
  type: 'RECEIVE_LIS',
  lis
}
const removeList = (list) => {
  type: 'REMOVE_LIST',
  list
}
