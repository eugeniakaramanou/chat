import React, { Component } from 'react';
import update from 'react-addons-update';
import ChatBoard from './chat-board';
import fetch from 'cross-fetch';

const API_URL= 'https://chatty.kubernetes.doodle-test.com/api/chatty/v1.0';
const API_HEADERS = {
    'Content-Type': 'application/json',
    'token': '6bMaqT4jsfNY'
};

class ChatBoardContainer extends Component {
    constructor() {
        super(...arguments);
        this.state = {
            messages: []
        };
    }

    componentDidMount() {
        const currentTime = Date.now();
        this.timer = setInterval(() =>
            fetch(`${API_URL}?since=${currentTime}&limit=10`, {headers: API_HEADERS})
            .then((response) => response.json())
                .then((responseData) => {
                    this.setState({messages: responseData});
                    window.state = this.state;
                })
                .catch((error) => {
                    console.log('Error fetching the messages from api', error);
                }),
        1000);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
        this.timer = null;
    }

    render() {
        return <ChatBoard messages={this.state.messages}
                          user={this.props.user}
                          chatCallbacks={{addMessage: this.addMessage.bind(this)}} />
    }

    addMessage(text) {
        let prevState = this.state;
        let newMessage = {
            author: this.props.user,
            message: text,
            timestamp: Date.now()
        };
        let nextState = update(this.state.messages, {
            $push: [newMessage]
        });

        this.setState({messages:nextState});

        fetch(API_URL, {
            method: 'POST',
            headers: API_HEADERS,
            body: JSON.stringify(newMessage)
        }).then(response => {
            if (response.ok) {
                return response.json()
            } else {
                throw new  Error('Server responded with Error')
            }
        }).then( responseData => {
            newMessage.message = responseData.message;
            this.setState({messages:nextState});
        }).catch(error => {
            console.error("Fetch error:", error);
            this.setState(prevState);
        });
    }
}

export default ChatBoardContainer;
