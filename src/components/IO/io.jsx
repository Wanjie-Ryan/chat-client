import React, {useState} from 'react'
import IOsocket from 'socket.io-client'
import Chats from '../Sockets/chat'




const socket = IOsocket.connect('http://localhost:3001')
// connecting our frontend to the backend


function SocketIo() {


  const [username, setUsername] = useState()
  const[room, setRoom] = useState()
  const [showchat, setShowChat] = useState(false)

  const handleName =(e)=>{

    setUsername(e.target.value)
  }

  const handleRoom =(e)=>{

    setRoom(e.target.value)
  }

  const JoinRoom =()=>{

    if(username !=='' && room !==''){

      socket.emit('join_room', room)
      setShowChat(true)

    }


  }



  return (


    <>


      <div className='App'>

        {!showchat ? (
          
          <div className="joinchatcontainer"> 
        

            <h3>Join A chat</h3> 

            <input type ='text' placeholder ='Enter your name'onchange={handleName} value={username} required/>
            <input type ='text' placeholder ='Enter the room number you want to join' onChange={handleRoom} value={room} required/>
            <button type ='submit' onClick={JoinRoom}>Join Room</button>

          </div>
        
        ):(

          <Chats socket={socket} username={username} room ={room}/>
        )}

        
          

        


      </div>

      



    
    
    
    
    </>


  )
}

export default SocketIo