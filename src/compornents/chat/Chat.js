import React from 'react';

import ChatInput from './ChatInput';
import Message from './Message.js';

import './Chat.scss';

export default class Chat extends React.Component {
    render() {
        return (
            <div className='chat'>
                <div className='chat__message-list'>
                    {
                        this.props.messages.map((message) => (
                            <Message message={message.message} key={message.messageId}/>
                        ))
                    }
                </div>
                <div className='chat__input'>
                    <ChatInput sendMessage={this.props.sendMessage} currentRoomId={this.props.currentRoomId}/>
                </div>
            </div>
        )
    }
}