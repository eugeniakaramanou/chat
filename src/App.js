import React, { Component } from 'react';
import ChatBoard from './components/ChatBoard';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="app">
        <ChatBoard/>
      </div>
    );
  }
}

export default App;
