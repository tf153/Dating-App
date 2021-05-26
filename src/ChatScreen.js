import { Avatar } from '@material-ui/core';
import React,{useState,useEffect} from 'react'
import "./ChatScreen.css";
function ChatScreen() {
    const[input,setInput]=useState('');
    const [messages,setMessages]=useState([
        {
            name:"Ellen",
            image:"...",
            message:"Whts up"
        },{
            message:"Whts up"
        },
        {
            name:"Ellen",
            image:"...",
            message:"Whts up"
        }
    ])

    const handleClick=(e)=>{
        e.preventDefault();
        setMessages([...messages,{message:input}]);
        setInput('');
    }

    return (
        <div className="chatScreen">
            <p className="chatScreen__timestamp">YOU MATCHED WITH ELLEN ON 10/2/35</p>
            {messages.map(message=>(
                message.name?(
                    <div className="chatScreen__message">
                    <Avatar
                        className="chatScreen__image"
                        alt={message.name}
                        src={message.image} />
                    <p className="chatScreen__text">{message.message}</p>  
                </div>
                ):(
                    <div className="chatScreen__message">
                        <p className="chatScreen__textUser">{message.message}</p>
                    </div>
                )               
            ))}
            <form className="chatScreen__input">
                <input value={input} 
                onChange={(e)=>setInput(e.target.value)} className="chatScreen__inputField" type="text" placeholder="Type a message..."/>
                <button onClick={handleClick} className="chatScreen__inputButton">Send</button>
            </form>
        </div>
    );
}

export default ChatScreen;
