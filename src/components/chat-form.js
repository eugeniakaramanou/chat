import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ChatForm extends Component {
    constructor() {
        super(...arguments);
        this.state = { chatInput: '' };
        this.submitHandler = this.submitHandler.bind(this);
        this.textChangeHandler = this.textChangeHandler.bind(this);
        this.checkInputKeyPress =this.checkInputKeyPress.bind(this);
    }
    
    submitHandler(event) {
        event.preventDefault();
        this.props.chatCallbacks.addMessage(this.state.chatInput);
        this.setState({ chatInput: '' });
    }

    textChangeHandler(event) {
        this.setState({ chatInput: event.target.value });
    }

    checkInputKeyPress(e) {
        if(e.key === 'Enter'){
            this.props.chatCallbacks.addMessage(e.target.value);
            this.setState({ chatInput: '' });
        }
    }

    render() {
        return (
            <div className="chat-form">
                <div className="chat-form__wrapper">
                    <input type="text"
                           className="add-message"
                           placeholder="Message"
                           value={this.state.chatInput}
                           onChange={this.textChangeHandler}
                           onKeyPress={this.checkInputKeyPress}/>
                    <button className="send-message" onClick={this.submitHandler}>
                        Send
                    </button>
                </div>
            </div>
        );
    }
}

ChatForm.propTypes = {
    chatCallbacks: PropTypes.object
};

export default ChatForm;

