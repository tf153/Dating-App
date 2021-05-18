import React from 'react'
import "./Chats.css";
import Chat from "./Chat";

function Chats() {
    return (
        <div>
            <Chat
                name="mark"
                message="Yo"
                timestamp="40 seconds ago"
                profilePic="..."
            />
            <Chat
                name="mark"
                message="Yo"
                timestamp="40 seconds ago"
                profilePic="..."
            />
            <Chat
                name="mark"
                message="Yo"
                timestamp="40 seconds ago"
                profilePic="..."
            />
        </div>
    )
}

export default Chats
