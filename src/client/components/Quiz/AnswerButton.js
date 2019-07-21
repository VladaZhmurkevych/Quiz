import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { wrongAnswer, rightAnswer } from './store/actions';
import styles from './_quiz.module.scss';

class AnswerButton extends Component {
  handleAnswer = () => {
    const {
      isAnswered, addRight, addWrong, isRight, index
    } = this.props;
    if (isAnswered) return;
    if (isRight) addRight(index);
    else addWrong(index);
  }

  render() {
    const {
      isAnswered, children, isRight, activeAnswerIndex, index
    } = this.props;
    const clicked = activeAnswerIndex === index;
    return (
      <li
        className={[
          styles.answerButton,
          isAnswered ? styles.answerButtonInactive : '',
          clicked && isAnswered && isRight ? styles.answerButtonRight : '',
          clicked && isAnswered && !isRight ? styles.answerButtonWrong : ''
        ].join(' ')}
        onClick={this.handleAnswer}
      >
        {children}
      </li>
    );
  }
}

AnswerButton.propTypes = {
  index: PropTypes.number.isRequired,
  activeAnswerIndex: PropTypes.number.isRequired,
  isRight: PropTypes.bool.isRequired,
  isAnswered: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  addRight: PropTypes.func.isRequired,
  addWrong: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  activeAnswerIndex: state.quizReducer.activeAnswerIndex,
  isAnswered: state.quizReducer.isAnswered,
});

const mapDispatchToProps = dispatch => ({
  addRight: index => dispatch(rightAnswer(index)),
  addWrong: index => dispatch(wrongAnswer(index)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AnswerButton);
