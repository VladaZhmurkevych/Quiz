import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Score from './Score/Score';
import Quiz from './Quiz/Quiz';
import { fetchQuiz } from './store/actions';
import StartPopUp from './StartPopUp/StartPopUp';
import FinishPopUp from './FinishPopUp/FinishPopUp';

class App extends Component {
  componentDidMount() {
    const { fetchQuiz } = this.props;
    fetchQuiz();
  }

  render() {
    const { quiz, finishPopup, startPopup } = this.props;
    const blur = finishPopup || startPopup;
    return (
      <React.Fragment>
        {startPopup && <StartPopUp />}
        {finishPopup && <FinishPopUp />}
        <div style={{ filter: blur ? 'blur(15px)' : '' }}>
          <Score />
          {(quiz.length) && <Quiz />}
        </div>

      </React.Fragment>
    );
  }
}

App.propTypes = {
  startPopup: PropTypes.bool.isRequired,
  finishPopup: PropTypes.bool.isRequired,
  fetchQuiz: PropTypes.func.isRequired,
  quiz: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

const mapStateToProps = state => state.appReducer;

const mapDispatchToProps = dispatch => ({
  fetchQuiz: () => dispatch(fetchQuiz())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
