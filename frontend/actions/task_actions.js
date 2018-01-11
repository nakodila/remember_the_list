import * as taskAPIUtil from '../util/task_api_util'

export const RECEIVE_TASKS = 'RECEIVE_TASKS';
export const RECEIVE_TASK = 'RECEIVE_TASK';
export const REMOVE_TASK = 'REMOVE_TASK';
export const RECEIVE_TASK_ERRORS = 'RECEIVE_TASK_ERRORS';
export const CLEAR_TASK_ERRORS = 'CLEAR_TASK_ERRORS';


const receiveTasks = (tasks) => {
  return {
    type: RECEIVE_TASKS,
    tasks
  }
};
const receiveTask = (payload) => {
  return {
    type: RECEIVE_TASK,
    task: payload.task
  }
}
const removeTask = (task) => {
  return {
    type: REMOVE_TASK,
    taskId: task.id
  }
};

export const receiveTaskErrors = errors => ({
  type: RECEIVE_TASK_ERRORS,
  errors
});

export const clearTaskErrors = () => (dispatch) => ({

});

export const fetchTasks = () => (dispatch) => {
  return taskAPIUtil.fetchTasks().then(tasks => { dispatch(receiveTasks(tasks)); dispatch(clearTaskErrors);
  }, (err) => {
    dispatch(receiveErrors(err.responseJSON));
  });
};

export const fetchTask = (id) => (dispatch) => {
  return taskAPIUtil.fetchTask(id).then(payload => { dispatch(receiveTask(payload)); dispatch(clearTaskErrors);
  }, (err) => {
    dispatch(receiveErrors(err.responseJSON));
  });
};

export const createTask = (task) => (dispatch) => {
  return taskAPIUtil.createTask(task).then(task => { dispatch(receiveTask(task)); dispatch(clearTaskErrors);
  }, (err) => {
    dispatch(receiveErrors(err.responseJSON));
  });
};

export const updateTask = (id) => (dispatch) => {
  return taskAPIUtil.updateTask(id).then(task => { dispatch(receiveTask(task)); dispatch(clearTaskErrors);
  }, (err) => {
    dispatch(receiveErrors(err.responseJSON));
  });
};

export const deleteTask = (id) => (dispatch) => {
  return taskAPIUtil.deleteTask(id).then(task => dispatch(removeTask(task)), (err) => {
    dispatch(receiveErrors(err.responseJSON));
  });
};
