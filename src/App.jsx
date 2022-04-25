import React from 'react';
import './App.css';
import Board from './Board';

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     history: [
  //       {
  //         squares: [null, null, null, null, null, null, null, null, null],
  //       },
  //     ],
  //     xIsNext: true,
  //   };
  // }
  render() {
    return <Board />;
  }
}

export default App;
