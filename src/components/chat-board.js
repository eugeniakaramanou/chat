import React from 'react';
import PropTypes from 'prop-types';

import Messages from './messages';
import ChatForm from './chat-form';

const ChatBoard = ({ messages, user, chatCallbacks }) => (
    <div className="chat-board">
        <h1 className="chat-board__title">Chat Room</h1>
        <Messages messages={messages} user={user} />
        <ChatForm chatCallbacks={chatCallbacks} />
    </div>
);

ChatBoard.propTypes = {
    chatCallbacks: PropTypes.object,
    messages: PropTypes.arrayOf(PropTypes.object),
    user: PropTypes.string.isRequired
};

ChatBoard.defaultProps = {
    messages: []
};

export default ChatBoard;

