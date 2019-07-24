import {
  WRONG_ANSWER,
  RIGHT_ANSWER,
  NEXT_QUESTION,
  FINISH_QUIZ,
} from './types';

export const rightAnswer = index => ({
  type: RIGHT_ANSWER,
  payload: index
});

export const wrongAnswer = index => ({
  type: WRONG_ANSWER,
  payload: index
});

export const nextQuestion = index => ({
  type: NEXT_QUESTION,
  payload: index
});

export const finishQuiz = () => ({
  type: FINISH_QUIZ,
});
