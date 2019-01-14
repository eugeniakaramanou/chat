import React, { Component } from 'react';
import update from 'react-addons-update';
import ChatBoard from './chat-board';
import 'whatwg-fetch';

const API_URL= 'https://chatty.kubernetes.doodle-test.com/api/chatty/v1.0';
const API_HEADERS = {
    'Content-Type': 'application/json',
    'token': '4QhmRwHwwrgFqXULXNtx4d'
};

class ChatBoardContainer extends Component {
    constructor() {
        super(...arguments);
        this.state = {
            messages: []
        };
    }

    componentDidMount() {
        fetch(`${API_URL}`, {headers: API_HEADERS})
            .then((response) => response.json())
            .then((responseData) => {
                console.log('if ever', responseData);
                this.setState({messages: responseData});
                window.state = this.state;
            })
            .catch((error) => {
                console.log('Error fetching the messages from api', error);
            });
    }

    render() {
        return <ChatBoard messages={this.state.messages}
                          chatCallbacks={{
                              addMessage: this.addMessage.bind(this)}} />
    }

    addMessage(author, text) {
        let prevState = this.state;
        let newMessage = {
            author,
            message: text
            // date: Date.now() // TODO check for error here
        };
        let nextState = update(this.state.messages, {
            $push: [newMessage] // TODO check for error here
        });

        this.setState({messages:nextState});

        fetch(`${API_URL}`, {
            method: 'post',
            headers: API_HEADERS,
            credentials: 'include',
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
            this.setState(prevState)
        });
    }
}

export default ChatBoardContainer;
