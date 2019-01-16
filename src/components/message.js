import React, { Component } from 'react';
import PropTypes from 'prop-types';
import dateUtils from 'date-and-time';

const DATE_FORMAT = 'ddd MMM DD YYYY HH:mm';

class Message extends Component {
    render() {
        const personalMessage = this.props.personalMessage ? 'message--personal' : '';
        const date = new Date(this.props.date);
        return (
            <div className={`message ${personalMessage}`}>
                <div className="author">{this.props.author}</div>
                <div className="text">{this.props.text}</div>
                <div className="date">{dateUtils.format(date, DATE_FORMAT)}</div>
            </div>
        );
    }
}
Message.propTypes = {
    author: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    date: PropTypes.number.isRequired,
    personalMessage: PropTypes.bool.isRequired
};

Message.defaultProps = {
    author: 'Random Author',
    text: 'hellooo',
    date: 1547464499488,
    personalMessage: false
};

export default Message;

