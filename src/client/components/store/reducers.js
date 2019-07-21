import {
  FETCH_ERROR,
  FETCH_START,
  FETCH_SUCCESS,
  TOGGLE_FINISH_POPUP,
  TOGGLE_START_POPUP,
} from './types';

const INITIAL_STATE = {
  error: null,
  loading: false,
  quiz: [],
  startPopup: true,
  finishPopup: false,
};

const appReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_FINISH_POPUP:
      return {
        ...state,
        finishPopup: !state.finishPopup
      };
    case TOGGLE_START_POPUP:
      return {
        ...state,
        startPopup: !state.startPopup
      };
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
