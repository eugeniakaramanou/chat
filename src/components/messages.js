import React from 'react';
import PropTypes from 'prop-types';

import Message from './message';

const Messages = ({ messages, title, user }) => (
    <div className="messages">
        <h1 className="messages__title">{title}</h1>
        {
            messages.map( (message, index) =>
                <Message key={index}
                    author={message.author}
                    text={message.message}
                    date={message.timestamp}
                    personalMessage={user === message.author} />
            )
        }
    </div>
);

Messages.propTypes = {
    messages: PropTypes.arrayOf(PropTypes.object),
    title: PropTypes.string.isRequired,
    user: PropTypes.string.isRequired
};

Messages.defaultProps = {
    messages: [],
    title: 'Recent 10 messages'
};

export default Messages;

