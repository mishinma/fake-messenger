import React from 'react';
import { Message } from './Message';

export class MessagesPanel extends React.Component {
    state = { input_value: '' }

    // send = () => {
    //     if (this.state.input_value && this.state.input_value != '') {
    //         this.props.onSendMessage(this.props.conversation.id, this.state.input_value);
    //         this.setState({ input_value: '' });
    //     }
    // }

    // handleInput = e => {
    //     this.setState({ input_value: e.target.value });
    // }

    render() {

        let list = <div className="no-content-message">There is no messages to show</div>;
        if (this.props.conversation && this.props.conversation.messages) {
            list = this.props.conversation.messages.map(m => <Message key={m.id} id={m.id} senderName={m.senderName} text={m.text} />);
        }
        return (
            <div className='messages-panel'>
                <div className="meesages-list">{list}</div>
                {this.props.conversation &&
                    <div className="messages-input">
                        <input type="text" value={this.state.input_value} />
                        <button onClick={this.send}>Send</button>
                    </div>
                }
            </div>);
    }

}