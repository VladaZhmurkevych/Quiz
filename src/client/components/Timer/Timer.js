import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { timerTick, toggleFinishPopup } from '../store/actions';
import { formatTime, SECOND } from '../../utils';
import styles from './_timer.module.scss';

class Timer extends Component {
  interval = null;

  componentDidMount() {
    this.timerStart();
  }

  componentWillUnmount() {
    this.clearInterval();
  }

  timerStart = () => {
    this.interval = setInterval(this.timerTick, SECOND);
  };

  timerTick = () => {
    const { timer, tickTimer } = this.props;
    if (timer <= 0) return this.finishGame();
    tickTimer();
  };

  finishGame = () => {
    const { finishGame } = this.props;
    this.clearInterval();
    finishGame();
  };

  clearInterval = () => {
    clearInterval(this.interval);
  };

  render() {
    const { timer } = this.props;
    return (
      <div className={styles.timer}>
        {formatTime(timer)}
      </div>
    );
  }
}

Timer.propTypes = {
  timer: PropTypes.number.isRequired,
  finishGame: PropTypes.func.isRequired,
  tickTimer: PropTypes.func.isRequired,
};

const mapStateToProps = state => state.appReducer;

const mapDispatchToProps = dispatch => ({
  tickTimer: () => dispatch(timerTick()),
  finishGame: () => dispatch(toggleFinishPopup()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Timer);
