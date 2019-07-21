import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import PopUp from '../PopUp/PopUp';
import { toggleFinishPopup, toggleStartPopup } from '../store/actions';
import { finishQuiz } from '../Quiz/store/actions';
import PopUpButton from '../sharedUI/PopUpButton/PopUpButton';
import styles from './_finishPopUp.module.scss';

const FinishPopUp = ({ close, rightAnswers, wrongAnswers }) => (
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
        {(rightAnswers / (rightAnswers + wrongAnswers)) * 100}
        %
      </p>
    </div>

    <PopUpButton onClick={close}>Try again</PopUpButton>
  </PopUp>
);

FinishPopUp.propTypes = {
  close: PropTypes.func.isRequired,
  rightAnswers: PropTypes.number.isRequired,
  wrongAnswers: PropTypes.number.isRequired,
};

const mapStateToProps = state => state.quizReducer;

const mapDispatchToProps = dispatch => ({
  close: () => {
    dispatch(finishQuiz());
    dispatch(toggleFinishPopup());
    dispatch(toggleStartPopup());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(FinishPopUp);
