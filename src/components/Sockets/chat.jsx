import React, {useEffect, useState} from 'react'
import './chat.css'


//passing data from io as props to chat component
function Chat({socket, username, room}) {


    const [currentMessage, setCurrentMessage] = useState()
    const [msgList, setMsgList] = useState([])

    const handleMessage =(e)=>{

        setCurrentMessage(e.target.value)
    }

    const sendMessage = async()=>{

        if(currentMessage !==''){

            const messageData ={

                room:room,
                author:username,
                message:currentMessage,
                time:new Date(Date.now()).getHours() + ":" + new Date(Date.now()).getMinutes()

                // geting the actual date and time the message was sent
            }

            await socket.emit('send_message', messageData)

            //the useState also holds the current message being sent by this actual user
            setMsgList((list)=>[...list, messageData])


        }
    }

    useEffect(()=>{

        socket.on('received-message', (data)=>{

            // console.log(data)

            //the useState over here grabs whatever messsage that was there before hand and adds the new message to the end
            setMsgList((list)=>[...list, data])

        })

    }, [socket])

  return (


    <>

        <div className='chat-window'>

    
            <div className='chat-header'>

                <p>Live Chat</p>



            </div>

            <div className="chat-body">

                {msgList.map((messageContent)=>{
                    
                    return(

                        <div className="message">

                            <div >

                                <div className="message-content">

                                    <p>{messageContent.message}</p>

                                </div>

                                <div className="message-meta">

                                    <p>{messageContent.time}</p>
                                    <p>{messageContent.author}</p>


                                </div>



                            </div>


                        </div>

                    )
                })}



            </div>

            <div className="chat-footer">

                <input type="text" onChange ={handleMessage} value={currentMessage} placeholder="Type a message here..."/>
                <button onClick ={sendMessage}>&#9658;</button>

        </div>

       </div>



    </>




  )
}

export default Chat