import axios from 'axios';
import {
  FETCH_ERROR,
  FETCH_START,
  FETCH_SUCCESS,
} from './types';


export const fetchSuccess = data => ({
  type: FETCH_SUCCESS,
  payload: data
});

export const fetchError = error => ({
  type: FETCH_ERROR,
  payload: {
    error
  }
});

export const fetchStart = () => ({
  type: FETCH_START,
});

export const fetchQuiz = () => (dispatch) => {
  dispatch(fetchStart());
  axios.get('/api/quiz')
    .then(res => dispatch(fetchSuccess(res.data)))
    .catch(err => dispatch(fetchError(err)));
};
