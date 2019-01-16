import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Messages from './messages';
import ChatForm from './chat-form';

class ChatBoard extends Component {
    render() {
        return (
            <div className="chat-board">
                <h1 className="chat-board__title">Chat Room</h1>
                <Messages messages={this.props.messages} user={this.props.user} />
                <ChatForm chatCallbacks={this.props.chatCallbacks} />
            </div>
        );
    }
}

ChatBoard.propTypes = {
    chatCallbacks: PropTypes.object,
    messages: PropTypes.arrayOf(PropTypes.object),
    user: PropTypes.string.isRequired
};

ChatBoard.defaultProps = {
    messages: []
};

export default ChatBoard;

