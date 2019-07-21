import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './_score.module.scss';

const Score = ({ rightAnswers, wrongAnswers, activeQuestionIndex }) => (
  <div className={styles.score}>
    <p>
      Total:
      {activeQuestionIndex}
      {' '}

    </p>
    <p>
      Right:
      {rightAnswers}
    </p>
    <p>
      Faults:
      {wrongAnswers}
    </p>
  </div>

);

Score.propTypes = {
  rightAnswers: PropTypes.number.isRequired,
  wrongAnswers: PropTypes.number.isRequired,
  activeQuestionIndex: PropTypes.number.isRequired
};

const mapStateToProps = state => state.quizReducer;


export default connect(mapStateToProps,)(Score);
