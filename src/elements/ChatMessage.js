import React from 'react'

const ChatMessage = (props) => {
    const { text, uid } = props.message;
    return (
        <div>
            {text}
        </div>
    )
}

export default ChatMessage;
