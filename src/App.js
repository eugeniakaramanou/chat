import React, { Component } from 'react';
import ChatBoardContainer from './components/chat-board-container';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="app">
        <ChatBoardContainer />
      </div>
    );
  }
}

export default App;
