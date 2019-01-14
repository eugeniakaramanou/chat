import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ChatForm extends Component {
    checkInputKeyPress(e) {
        if(e.key === 'Enter'){
            this.props.chatCallbacks.addMessage(this.props.author || 'me', e.target.value);
            e.target.value = '';
        }
    }

    render() {
        return (
            <div className="chat-form">
                <div className="chat-form__wrapper">
                    <input type="text" className="add-message" placeholder="Message"
                           onKeyPress={this.checkInputKeyPress.bind(this)}/>
                    <button className="send-message">
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

