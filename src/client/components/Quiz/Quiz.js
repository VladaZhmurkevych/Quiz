import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { rightAnswer, wrongAnswer, nextQuestion } from './store/actions';
import styles from './_quiz.module.scss';

class Quiz extends Component {
  state = {};

  render() {
    const {
      addRight, addWrong, next, quiz, activeQuestionIndex
    } = this.props;
    return (
      <div className={styles.quiz}>
        <p className={styles.title}>{quiz[activeQuestionIndex].title}</p>
        <div className={styles.container}>
          <div className={styles.pictureContainer}>
            <img
              className={styles.picture}
              src={quiz[activeQuestionIndex].picture}
              alt={quiz[activeQuestionIndex].title}
            />
          </div>

          <ul className={styles.answerList}>
            {quiz[activeQuestionIndex].answers.map(item => (
              <li key={item.text} className={styles.answerButton}>
                {item.text}
              </li>
            ))}
          </ul>
        </div>

        <div> This is quiz</div>
        <button type="button" onClick={addRight}>Right</button>
        <button type="button" onClick={addWrong}>Wrong</button>
        <button type="button" onClick={next}>Next</button>
      </div>

    );
  }
}

Quiz.propTypes = {
  addRight: PropTypes.func.isRequired,
  addWrong: PropTypes.func.isRequired,
  next: PropTypes.func.isRequired,
  quiz: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  activeQuestionIndex: PropTypes.number.isRequired,
};

const mapStateToProps = state => ({
  ...state.quizReducer,
  quiz: state.appReducer.quiz
});

const mapDispatchToProps = dispatch => ({
  addRight: () => dispatch(rightAnswer()),
  addWrong: () => dispatch(wrongAnswer()),
  next: () => dispatch(nextQuestion()),
});


export default connect(mapStateToProps, mapDispatchToProps)(Quiz);
