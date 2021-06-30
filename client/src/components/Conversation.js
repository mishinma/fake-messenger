import React from 'react';


export class Conversation extends React.Component {

    click = () => {
        this.props.onClick(this.props.id);
    }

    render() {
        return (
            <div className='conversation-item' onClick={this.click} >
                <div>{this.props.participantNames.join(' - ')}</div>
            </div>
        )
    }
}