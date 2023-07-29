import React, {useState} from 'react'
import './chat.css'


//passing data from io as props to chat component
function Chat({socket, username, room}) {


    const [currentMessage, setCurrentMessage] = useState()

    const handleMessage =(e)=>{

        setCurrentMessage(e.target.value)
    }

    const sendMessage =()=>{

        if(currentMessage !==''){
            


        }
    }

  return (


    <>

    
       <div className='chat-header'>

        <p>Live Chat</p>



       </div>

       <div className="chat-body">



       </div>

       <div className="chat-footer">

        <input type="text" onChange ={handleMessage} value={currentMessage} placeholder="Type a message here..."/>
        <button onClick ={sendMessage}>&#9658;</button>



       </div>



    </>




  )
}

export default Chat