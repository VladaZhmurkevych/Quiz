import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import PopUp from '../PopUp/PopUp';
import { toggleFinishPopup, toggleStartPopup } from '../store/actions';
import { finishQuiz } from '../Quiz/store/actions';

const FinishPopUp = ({ close }) => (
  <PopUp close={close}><p>bye</p></PopUp>
);

FinishPopUp.propTypes = {
  close: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  close: () => {
    dispatch(finishQuiz());
    dispatch(toggleFinishPopup());
    dispatch(toggleStartPopup());
  }
});

export default connect(null, mapDispatchToProps)(FinishPopUp);
