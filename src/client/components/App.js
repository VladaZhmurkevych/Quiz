import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Score from './Score/Score';
import Quiz from './Quiz/Quiz';
import { fetchQuiz } from './store/actions';

class App extends Component {
  componentDidMount() {
    const { fetchQuiz } = this.props;
    fetchQuiz();
  }

  render() {
    return (
      <div>
        <Score />
        <Quiz />
      </div>
    );
  }
}

App.propTypes = {
  fetchQuiz: PropTypes.func.isRequired
};

const mapStateToProps = state => state.appReducer;

const mapDispatchToProps = dispatch => ({
  fetchQuiz: () => dispatch(fetchQuiz())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
