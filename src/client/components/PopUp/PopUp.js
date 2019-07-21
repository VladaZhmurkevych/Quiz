import React from 'react';
import PropTypes from 'prop-types';
import styles from './_popUp.module.scss';

class PopUp extends React.Component {
  constructor(props) {
    super(props);
    this.popUp = React.createRef();
  }


  handleClickOutside = (event) => {
    const element = event.target;
    const { close } = this.props;
    if (element === this.popUp) close();
  };


  render() {
    const { close, children } = this.props;

    return (
      <div className={styles.popUp} ref={this.popUp} onClick={this.handleClickOutside}>
        <div className={styles.popUpContainer}>
          <button type="button" className={styles.popUpClose} onClick={close}>X</button>
          {children}
        </div>
      </div>
    );
  }
}


PopUp.propTypes = {
  close: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default PopUp;
