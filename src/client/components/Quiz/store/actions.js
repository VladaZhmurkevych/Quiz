import {
  WRONG_ANSWER,
  RIGHT_ANSWER,
  NEXT_QUESTION,
  FINISH_QUIZ
} from './types';

export const rightAnswer = () => ({
  type: RIGHT_ANSWER
});

export const wrongAnswer = () => ({
  type: WRONG_ANSWER
});

export const nextQuestion = () => ({
  type: NEXT_QUESTION
});

export const finishQuiz = () => ({
  type: FINISH_QUIZ
});
