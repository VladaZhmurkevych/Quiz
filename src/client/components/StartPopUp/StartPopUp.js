import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import PopUp from '../PopUp/PopUp';
import { toggleStartPopup } from '../store/actions';
import PopUpButton from '../sharedUI/PopUpButton/PopUpButton';
import styles from './_startPopUp.module.scss';

const StartPopUp = ({ close }) => (
  <PopUp close={close}>
    <div>
      <p className={styles.title}>Tutocky nazva viktolyny</p>
      <p className={styles.time}> Tutocky chas: chas</p>
    </div>

    <PopUpButton onClick={close}>Start the quiz</PopUpButton>
  </PopUp>
);

StartPopUp.propTypes = {
  close: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  close: () => dispatch(toggleStartPopup())
});

export default connect(null, mapDispatchToProps)(StartPopUp);
