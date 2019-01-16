import React, { Component } from 'react';
import ChatBoardContainer from './components/chat-board-container';
import './App.scss';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { user: "" };
        this.userSubmitHandler = this.userSubmitHandler.bind(this);
        this.userChangeHandler = this.userChangeHandler.bind(this);
    }
    userChangeHandler(event) {
        this.setState({ user: event.target.value });
    }
    userSubmitHandler(event) {
        event.preventDefault();
        this.setState({ submitted: true, user: this.state.user });
    }
    render() {
        if (this.state.submitted) {
            return (
                <div className="app">
                    <ChatBoardContainer user={this.state.user}/>
                </div>
            )
        }
        return (
            <form onSubmit={this.userSubmitHandler} className="user-container">
                <h1 className="heading">Chat Room</h1>
                <div>
                    <input type="text"
                        className="username-input"
                        onChange={this.userChangeHandler}
                        placeholder="Enter your name..."
                        required />
                </div>
                <input type="submit"
                       value="Submit"
                       className="username-submit"
                />
            </form>
        );
    }
}

export default App;
