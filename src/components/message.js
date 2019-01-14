import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Message extends Component {
    render() {
        return (
            <div className="message" key={this.props.messageId}>
                <div className="author">{this.props.author}</div>
                <div className="text">{this.props.text}</div>
                <div className="date">{this.props.date}</div>
            </div>
        );
    }
}
Message.propTypes = {
    messageId: PropTypes.number,
    author: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    date: PropTypes.number.isRequired
};

Message.defaultProps = {
    author: 'Skouirmi',
    text: 'helloo',
    date: 2
};

export default Message;

