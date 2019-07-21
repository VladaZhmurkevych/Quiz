import {
  WRONG_ANSWER,
  NEXT_QUESTION,
  RIGHT_ANSWER
} from './types';

const INITIAL_STATE = {
  activeQuestionIndex: 0,
  rightAnswers: 0,
  wrongAnswers: 0,
};

const quizReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RIGHT_ANSWER:
      return {
        ...state,
        rightAnswers: state.rightAnswers + 1
      };
    case WRONG_ANSWER:
      return {
        ...state,
        wrongAnswers: state.wrongAnswers + 1
      };
    case NEXT_QUESTION:
      return {
        ...state,
        activeQuestionIndex: state.activeQuestionIndex + 1
      };
    default:
      return state;
  }
};

export default quizReducer;
