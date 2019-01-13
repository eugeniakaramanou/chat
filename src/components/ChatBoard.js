import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Messages from './Messages';
import ChatForm from './ChatForm';

class ChatBoard extends Component {
    render() {
        const messages = [
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
        ];
        return (
            <div className="chat-board">
                <h1 className="chat-board__title">Chat Room</h1>
                <Messages messages={messages}/>
                <ChatForm />
            </div>
        );
    }
}

ChatBoard.defaultProps = {

};

ChatBoard.propTypes = {

};

export default ChatBoard;

