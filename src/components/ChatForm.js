import React, { Component } from 'react';

class ChatForm extends Component {
    checkInputKeyPress(e) {
        if(e.key === 'Enter'){
            this.props.taskCallbacks.add(this.props.cardId, e.target.value);
            e.target.value = '';
        }
    }

    render() {
        return (
            <div className="chat-form">
                <div className="chat-form__wrapper">
                    <input type="text" className="add-message" placeholder="Message"
                           onKeyPress={this.checkInputKeyPress.bind(this)}/>
                    <button className="send-message">Send</button>
                </div>
            </div>
        );
    }
}

ChatForm.defaultProps = {

};

export default ChatForm;

