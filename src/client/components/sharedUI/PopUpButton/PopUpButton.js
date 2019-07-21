import React from 'react';
import PropTypes from 'prop-types';
import styles from './_popUpButton.module.scss';

const PopUpButton = ({ onClick, children }) => (
  <button type="button" onClick={onClick} className={styles.button}>{children}</button>
);

PopUpButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default PopUpButton;
