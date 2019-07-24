import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import PopUp from '../PopUp/PopUp';
import { toggleFinishPopup, toggleStartPopup } from '../store/actions';
import { finishQuiz } from '../Quiz/store/actions';
import PopUpButton from '../sharedUI/PopUpButton/PopUpButton';
import styles from './_finishPopUp.module.scss';
import { formatTime } from '../../utils';

const FinishPopUp = ({
  close, rightAnswers, wrongAnswers, questionsCount, timer, time
}) => (
  <PopUp close={close}>
    <div className={styles.scoreInfo}>
      <p className={styles.text}>
        Right answers:
        {' '}
        {rightAnswers}
        {' '}

      </p>
      <p className={styles.text}>
        Wrong answers:
        {' '}
        {wrongAnswers}
      </p>
      <p className={styles.text}>
        Total score:
        {' '}
        {(rightAnswers / questionsCount) * 100}
        %
      </p>
    </div>

    <p className={styles.time}>
    Time:
      {' '}
      {formatTime(time - timer)}
    </p>
    <PopUpButton onClick={close}>Try again</PopUpButton>
  </PopUp>
);

FinishPopUp.propTypes = {
  close: PropTypes.func.isRequired,
  rightAnswers: PropTypes.number.isRequired,
  wrongAnswers: PropTypes.number.isRequired,
  questionsCount: PropTypes.number.isRequired,
  timer: PropTypes.number.isRequired,
  time: PropTypes.number.isRequired,
};

const mapStateToProps = state => ({
  ...state.quizReducer,
  questionsCount: state.appReducer.quiz.length,
  timer: state.appReducer.timer,
  time: state.appReducer.time,
});

const mapDispatchToProps = dispatch => ({
  close: () => {
    dispatch(finishQuiz());
    dispatch(toggleFinishPopup());
    dispatch(toggleStartPopup());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(FinishPopUp);
