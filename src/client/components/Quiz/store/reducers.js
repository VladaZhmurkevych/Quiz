import {
  WRONG_ANSWER,
  NEXT_QUESTION,
  RIGHT_ANSWER
} from './types';

const INITIAL_STATE = {
  activeQuestionIndex: 0,
  rightAnswers: 0,
  wrongAnswers: 0,
  isAnswered: false,
  activeAnswerIndex: -1
};

const quizReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RIGHT_ANSWER:
      return {
        ...state,
        isAnswered: true,
        rightAnswers: state.rightAnswers + 1,
        activeAnswerIndex: action.payload,
      };
    case WRONG_ANSWER:
      return {
        ...state,
        isAnswered: true,
        wrongAnswers: state.wrongAnswers + 1,
        activeAnswerIndex: action.payload,
      };
    case NEXT_QUESTION:
      return {
        ...state,
        isAnswered: false,
        activeQuestionIndex: state.activeQuestionIndex + 1,
        activeAnswerIndex: -1,
      };
    default:
      return state;
  }
};

export default quizReducer;
