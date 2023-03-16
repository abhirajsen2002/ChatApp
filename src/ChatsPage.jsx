import React from 'react'

import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from 'react-chat-engine-advanced'


const ChatsPage = (props) => {

    const chatProps = useMultiChatLogic('53b5178c-ad68-4a87-9af8-b382cc41344e', props.user.username, props.user.secret);

    return (
        <div style={{ height: '100vh' }}>
            <MultiChatSocket {...chatProps} />
            <MultiChatWindow {...chatProps} style={{ height: '100%' }} />

        </div>
    )
}

export default ChatsPage
