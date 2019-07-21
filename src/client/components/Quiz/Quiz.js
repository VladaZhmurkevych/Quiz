import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { nextQuestion, rightAnswer, wrongAnswer } from './store/actions';
import styles from './_quiz.module.scss';
import AnswersList from './AnswersList';


const Quiz = ({
  next, quiz, isAnswered
}) => (
  <div className={styles.quiz}>
    <p className={styles.title}>{quiz.title}</p>
    <div className={styles.container}>
      <div className={styles.pictureContainer}>
        <img
          className={styles.picture}
          src={quiz.picture}
          alt={quiz.title}
        />
      </div>
      <div className={styles.answerContainer}>
        <AnswersList />
        <button disabled={!isAnswered} className={styles.nextButton} type="button" onClick={next}>Next</button>

      </div>

    </div>

  </div>
);

Quiz.propTypes = {
  next: PropTypes.func.isRequired,
  quiz: PropTypes.shape().isRequired,
  isAnswered: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  ...state.quizReducer,
  quiz: state.appReducer.quiz[state.quizReducer.activeQuestionIndex]
});

const mapDispatchToProps = dispatch => ({
  addRight: () => dispatch(rightAnswer()),
  addWrong: () => dispatch(wrongAnswer()),
  next: () => dispatch(nextQuestion()),
});


export default connect(mapStateToProps, mapDispatchToProps)(Quiz);
