import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Messages from './messages';
import ChatForm from './chat-form';

class ChatBoard extends Component {
    render() {
        return (
            <div className="chat-board">
                <h1 className="chat-board__title">Chat Room</h1>
                <Messages messages={this.props.messages} />
                <ChatForm chatCallbacks={this.props.chatCallbacks} />
            </div>
        );
    }
}

ChatBoard.propTypes = {
    messages: PropTypes.arrayOf(PropTypes.object),
    chatCallbacks: PropTypes.object
};

ChatBoard.defaultProps = {
    messages: [
        {
            id: 1,
            author: 'skouirmi',
            text: 'hello',
            date: '2 hours before'
        },
        {
            id: 2,
            author: 'tap dancer',
            text: 'hey',
            date: '1 hours before'
        }
    ]
};

export default ChatBoard;

