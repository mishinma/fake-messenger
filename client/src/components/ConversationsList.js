import React from 'react';
import { Conversation } from './Conversation';

export class ConversationsList extends React.Component {

    handleClick = _id => {
        this.props.onSelectConversation(_id);
    }

    render() {
        let list = <div className="no-content-message">Nothing to show</div>;
        if (this.props.conversations && this.props.conversations.map) {
            list = this.props.conversations.map(c =>
            <Conversation
              key={c._id} id={c._id}
              participantNames={c.participantNames}
              onClick={this.handleClick}/>);
        }
        return (
            <div className='conversations-list'>
                {list}
            </div>);
    }
}