import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import PopUp from '../PopUp/PopUp';
import { toggleFinishPopup, toggleStartPopup } from '../store/actions';
import { finishQuiz } from '../Quiz/store/actions';
import PopUpButton from '../sharedUI/PopUpButton/PopUpButton';

const FinishPopUp = ({ close, rightAnswers, wrongAnswers }) => (
  <PopUp close={close}>
    <div>
      <p>
        Right answers:
        {rightAnswers}
        {' '}

      </p>
      <p>
        Wrong answers:
        {wrongAnswers}
      </p>
      <p>
        Total score:
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
