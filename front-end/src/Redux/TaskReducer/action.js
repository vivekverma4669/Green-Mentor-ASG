import axios from 'axios';
import {
  FETCH_TASKS_REQUEST,
  FETCH_TASKS_SUCCESS,
  FETCH_TASKS_FAILURE,
  ADD_TASK_REQUEST,
  ADD_TASK_SUCCESS,
  ADD_TASK_FAILURE,
  DELETE_TASK_REQUEST,
  DELETE_TASK_SUCCESS,
  DELETE_TASK_FAILURE,
  UPDATE_TASK_REQUEST,
  UPDATE_TASK_SUCCESS,
  UPDATE_TASK_FAILURE
} from './actionTypes';

export const fetchTasksRequest = () => ({
  type: FETCH_TASKS_REQUEST
});

export const fetchTasksSuccess = (tasks) => ({
  type: FETCH_TASKS_SUCCESS,
  payload: tasks
});

export const fetchTasksFailure = (error) => ({
  type: FETCH_TASKS_FAILURE,
  payload: error
});

export const addTaskRequest = () => ({
  type: ADD_TASK_REQUEST
});

export const addTaskSuccess = () => ({
  type: ADD_TASK_SUCCESS
});

export const addTaskFailure = (error) => ({
  type: ADD_TASK_FAILURE,
  payload: error
});

export const deleteTaskRequest = () => ({
  type: DELETE_TASK_REQUEST
});

export const deleteTaskSuccess = (taskId) => ({
  type: DELETE_TASK_SUCCESS,
  payload: taskId
});

export const deleteTaskFailure = (error) => ({
  type: DELETE_TASK_FAILURE,
  payload: error
});

export const updateTaskRequest = () => ({
  type: UPDATE_TASK_REQUEST
});

export const updateTaskSuccess = (updatedTask) => ({
  type: UPDATE_TASK_SUCCESS,
  payload: updatedTask
});

export const updateTaskFailure = (error) => ({
  type: UPDATE_TASK_FAILURE,
  payload: error
});

export const fetchTasks = () => {
  return async (dispatch) => {
    dispatch(fetchTasksRequest());
    try {
      const response = await axios.get('https://green-mentor-asg.onrender.com/tasks');
      dispatch(fetchTasksSuccess(response.data));
    } catch (error) {
      dispatch(fetchTasksFailure(error.message));
    }
  };
};
