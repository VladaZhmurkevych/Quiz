import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from './_quiz.module.scss';
import AnswerButton from './AnswerButton';

const AnswersList = ({
  answers
}) => {
  const randomAnswers = answers.sort(() => 0.5 - Math.random());
  return (
    <ul className={styles.answerList}>
      {randomAnswers.map((item, i) => (
        <AnswerButton
          key={item.text}
          isRight={item.isRight}
          index={i}
        >
          {item.text}
        </AnswerButton>
      ))}
    </ul>
  );
};

AnswersList.propTypes = {
  answers: PropTypes.arrayOf(PropTypes.shape()).isRequired
};

const mapStateToProps = state => ({
  answers: state.appReducer.quiz[state.quizReducer.activeQuestionIndex].answers
});

export default connect(mapStateToProps)(AnswersList);
