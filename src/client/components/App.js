import React, { Component } from 'react';
import Score from './Score/Score';
import Quiz from './Quiz/Quiz';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
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

export default App;
