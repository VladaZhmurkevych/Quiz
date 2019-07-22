import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './_score.module.scss';
import Timer from '../Timer/Timer';

const Score = ({ rightAnswers, wrongAnswers, displayTimer }) => (
  <div className={styles.score}>
    <p className={styles.result}>
      Total:
      <span className={styles.number}>{rightAnswers + wrongAnswers}</span>
    </p>
    <p className={styles.result}>
      Right:
      <span className={[styles.rightAnswer, styles.number].join(' ')}>{rightAnswers}</span>
    </p>
    <p className={styles.result}>
      Faults:
      <span className={[styles.wrongAnswer, styles.number].join(' ')}>{wrongAnswers}</span>
    </p>
    {displayTimer && <Timer />}
  </div>

);

Score.propTypes = {
  rightAnswers: PropTypes.number.isRequired,
  wrongAnswers: PropTypes.number.isRequired,
  displayTimer: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  ...state.quizReducer,
  displayTimer: !state.appReducer.startPopup && !state.appReducer.finishPopup
});


export default connect(mapStateToProps,)(Score);
