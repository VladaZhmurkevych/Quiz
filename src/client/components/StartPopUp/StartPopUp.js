import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import PopUp from '../PopUp/PopUp';
import { toggleStartPopup } from '../store/actions';

const StartPopUp = ({ close }) => (
  <PopUp close={close}><p>hren</p></PopUp>
);

StartPopUp.propTypes = {
  close: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  close: () => dispatch(toggleStartPopup())
});

export default connect(null, mapDispatchToProps)(StartPopUp);
