import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Message from './message';

class Messages extends Component {
    render() {
        const messages = this.props.messages.map( (message) => {
            return <Message messageId={message.id}
                            key={message.id}
                            author={message.author}
                            text={message.text}
                            date={message.date}/>
        });
        return (
            <div className="messages">
                <h1 className="messages__title">{this.props.title}</h1>
                {messages}
                <Message />
            </div>
        );
    }
}

Messages.propTypes = {
    title: PropTypes.string.isRequired,
    messages: PropTypes.arrayOf(PropTypes.object)
};

Messages.defaultProps = {
    title: 'Recent 10 messages',
    messages: []
};

export default Messages;

