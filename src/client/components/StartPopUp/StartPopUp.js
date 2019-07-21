import React from 'react';
import { connect } from 'react-redux';
import PopUp from '../PopUp/PopUp';
import { toggleStartPopup } from '../store/actions';
import PropTypes from "prop-types";

const StartPopUp = ({ close }) => (
  <PopUp close={close}>hren'</PopUp>
);

StartPopUp.propTypes = {
  close: PropTypes.func.isRequired,
}

const mapDispatchToProps = dispatch => ({
  close: () => dispatch(toggleStartPopup())
});

export default connect(null, mapDispatchToProps)(StartPopUp);
