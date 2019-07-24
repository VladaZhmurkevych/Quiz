import {
  FETCH_ERROR,
  FETCH_START,
  FETCH_SUCCESS,
  TOGGLE_FINISH_POPUP,
  TOGGLE_START_POPUP,
  TIMER_TICK,
} from './types';
import { SECOND } from '../../utils';
import { FINISH_QUIZ } from '../Quiz/store/types';

const INITIAL_STATE = {
  error: null,
  loading: false,
  quiz: [],
  startPopup: true,
  finishPopup: false,
  timer: 0,
  time: 0,
};

const appReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TIMER_TICK:
      return {
        ...state,
        timer: state.timer - SECOND
      };
    case TOGGLE_FINISH_POPUP:
      return {
        ...state,
        finishPopup: !state.finishPopup,
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
        quiz: action.payload.quiz.questions,
        title: action.payload.quiz.title,
        time: action.payload.quiz.time,
        timer: action.payload.quiz.time,
      };
    case FETCH_START:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FINISH_QUIZ:
      return {
        ...state,
        timer: state.time
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
