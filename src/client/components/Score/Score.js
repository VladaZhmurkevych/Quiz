import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './_score.module.scss';

const Score = ({ rightAnswers, wrongAnswers }) => (
  <div className={styles.score}>
    <p className={styles.result}>
      Total:
      <span>{rightAnswers + wrongAnswers}</span>
    </p>
    <p className={styles.result}>
      Right:
      <span className={styles.rightAnswer}>{rightAnswers}</span>
    </p>
    <p className={styles.result}>
      Faults:
      <span className={styles.wrongAnswer}>{wrongAnswers}</span>
    </p>
  </div>

);

Score.propTypes = {
  rightAnswers: PropTypes.number.isRequired,
  wrongAnswers: PropTypes.number.isRequired,
};

const mapStateToProps = state => state.quizReducer;


export default connect(mapStateToProps,)(Score);
