import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  nextQuestion, rightAnswer, wrongAnswer
} from './store/actions';

import { toggleFinishPopup } from '../store/actions';
import styles from './_quiz.module.scss';
import AnswersList from './AnswersList';


class Quiz extends React.Component {
  handleNextButton = () => {
    const {
      activeQuestionIndex, quizLenght, next, finishQuiz
    } = this.props;
    if (activeQuestionIndex === quizLenght - 1) {
      finishQuiz();
    } else next();
  }

  render() {
    const { quiz, isAnswered } = this.props;

    return (
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
            <button disabled={!isAnswered} className={styles.nextButton} type="button" onClick={this.handleNextButton}>Next</button>

          </div>

        </div>

      </div>
    );
  }
}


Quiz.propTypes = {
  next: PropTypes.func.isRequired,
  quiz: PropTypes.shape().isRequired,
  quizLenght: PropTypes.number.isRequired,
  isAnswered: PropTypes.bool.isRequired,
  finishQuiz: PropTypes.func.isRequired,
  activeQuestionIndex: PropTypes.number.isRequired
};

const mapStateToProps = state => ({
  ...state.quizReducer,
  quizLenght: state.appReducer.quiz.length,
  quiz: state.appReducer.quiz[state.quizReducer.activeQuestionIndex]
});

const mapDispatchToProps = dispatch => ({
  addRight: () => dispatch(rightAnswer()),
  addWrong: () => dispatch(wrongAnswer()),
  next: () => dispatch(nextQuestion()),
  finishQuiz: () => dispatch(toggleFinishPopup()),
});


export default connect(mapStateToProps, mapDispatchToProps)(Quiz);
