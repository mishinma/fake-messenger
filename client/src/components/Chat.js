import React from 'react';
import ChatAPI from '../api/ChatAPI';

import { ConversationsList } from './ConversationsList';
import './Chat.scss';
import { MessagesPanel } from './MessagesPanel';

// let MOCK_STATE = {
//     conversations: [
//        {id: 0,
//         name: "Bob",
//         participantNames: ["Alice", "Bob"],
//         messages: [
//           {id: 0, senderName: "Alice", text: "Hi"},
//           {id: 1, senderName: "Bob", text: "Hello"},
//           {id: 0, senderName: "Alice", text: "What's up"},
//         ]},
//     ],
//     activeConversation: 0,
// }

class Chat extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      conversations: null,
      activeConversationId: null
  };
    this.handleConversationSelect = this.handleConversationSelect.bind(this);
    this.updateUserConversations = this.updateUserConversations.bind(this);
  }

  handleConversationSelect = activeId => {
    this.setState({ activeConversationId: activeId })
  }

  updateUserConversations(conversations) {
    this.setState(
      {conversations: conversations,
       activeConversationId: conversations[0]._id}
    );
  }

  componentDidMount() {
    console.log("Getting conversations");
    ChatAPI.getUserConversations(this.updateUserConversations, this.props.token);
  }

  render() {
    const conversations = this.state.conversations;
    const conversation = conversations ? conversations.find(obj => {
      return obj._id === this.state.activeConversationId
    }) : null;
    
    return (
      <div className='chat-app'>
          <ConversationsList conversations={conversations}
            onSelectConversation={this.handleConversationSelect}/>
          <MessagesPanel conversation={conversation} />
      </div>
  );
  }
}

export default Chat;