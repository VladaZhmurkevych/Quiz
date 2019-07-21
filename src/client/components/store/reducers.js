import {
  FETCH_ERROR,
  FETCH_START,
  FETCH_SUCCESS,
} from './types';

const INITIAL_STATE = {
  error: null,
  loading: false,
  quiz: null,
};

const appReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        quiz: action.payload.quiz
      };
    case FETCH_START:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default appReducer;
