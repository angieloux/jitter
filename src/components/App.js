import React, {useState} from 'react'
import Navigation from './Navigation';
import LoginForm from './LoginForm';
import MessageForm from './MessageForm';
import Messages from './Messages';

function App() {
  const [loggedInUser, setLoggedInUser] = useState("")

  const activateUser = (username) => {
    setLoggedInUser(username)
  }

  return (
    <>
    <h1>Jitter</h1>
    <Navigation loggedInUser={loggedInUser}/>
    <LoginForm activateUser={activateUser}/>
    <MessageForm/>
    <Messages/>
    </>
  )
}

export default App;
