import React, {useState} from 'react'
import IOsocket from 'socket.io-client'
const socket = IOsocket.connect('http://localhost:3001')
// connecting our frontend to the backend




function SocketIo() {


  const [username, setUsername] = useState('')
  const[room, setRoom] = useState()

  const handleName =(e)=>{

    setUsername(e.target.value)
  }

  const handleRoom =(e)=>{

    setRoom(e.target.value)
  }



  return (


    <>


      <div className='App'>

        <h3>Join A chat</h3> 
        <input type ='text' placeholder ='Enter your name'onchange={handleName} value={username} required/>
        <input type ='text' placeholder ='Enter the room number you want to join' onChange={handleRoom} value={room} required/>
        <button type ='submit'>Join Room</button>





      </div>

      



    
    
    
    
    </>


  )
}

export default SocketIo