import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Message from './message';

class Messages extends Component {
    // componentDidUpdate() { TODO disable the scrolling for now.. maybe later
    //     // get the messagelist container and set the scrollTop to the height of the container
    //     const objDiv = document.getElementsByClassName('messages');
    //     objDiv.scrollTop = objDiv.scrollHeight;
    // }
    
    render() {
        const messages = this.props.messages.map( (message) => {
            return <Message key={message._id}
                            author={message.author}
                            text={message.message}
                            date={message.timestamp}
                            personalMessage={this.props.user === message.author} />
        });
        return (
            <div className="messages">
                <h1 className="messages__title">{this.props.title}</h1>
                {messages}
            </div>
        );
    }
}

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

