import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { rightAnswer, wrongAnswer, nextQuestion } from './store/actions';
// import styles from  './_quiz.module.scss';

class Quiz extends Component {
  state = {};

  render() {
    const { addRight, addWrong, next } = this.props;
    return (
      <div>
        <div> This is quiz</div>
        <button type="button" onClick={addRight}>Right</button>
        <button type="button" onClick={addWrong}>Wrong</button>
        <button type="button" onClick={next}>Next</button>
      </div>

    );
  }
}

Quiz.propTypes = {
  addRight: PropTypes.func.isRequired,
  addWrong: PropTypes.func.isRequired,
  next: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  ...state.quizReducer,
  quiz: state.appReducer.quiz
});

const mapDispatchToProps = dispatch => ({
  addRight: () => dispatch(rightAnswer()),
  addWrong: () => dispatch(wrongAnswer()),
  next: () => dispatch(nextQuestion()),
});


export default connect(mapStateToProps, mapDispatchToProps)(Quiz);
