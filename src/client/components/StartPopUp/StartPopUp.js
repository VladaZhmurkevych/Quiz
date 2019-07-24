import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import PopUp from '../PopUp/PopUp';
import { toggleStartPopup } from '../store/actions';
import PopUpButton from '../sharedUI/PopUpButton/PopUpButton';
import styles from './_startPopUp.module.scss';
import { formatTime } from '../../utils';

const StartPopUp = ({ close, title, time }) => (
  <PopUp close={close}>
    <div>
      <p className={styles.title}>{title}</p>
      <p className={styles.time}>
        {' '}
        Time for quiz:
        {' '}
        {time}
      </p>
    </div>

    <PopUpButton onClick={close}>Start the quiz</PopUpButton>
  </PopUp>
);

StartPopUp.propTypes = {
  close: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  title: state.appReducer.title,
  time: formatTime(state.appReducer.time)
});

const mapDispatchToProps = dispatch => ({
  close: () => dispatch(toggleStartPopup())
});

export default connect(mapStateToProps, mapDispatchToProps)(StartPopUp);
