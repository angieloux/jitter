import React, {useEffect, useState} from 'react'
import Navigation from './Navigation';
import LoginForm from './LoginForm';
import MessageForm from './MessageForm';
import Messages from './Messages';
import initialMessageList from '../data/message-list.json'

function App() {
  const [loggedInUser, setLoggedInUser] = useState("")
  const [messageList, setMessageList] = useState([])

  const activateUser = (username) => {
    setLoggedInUser(username)
  }

  // load the list in componentDidMount (not constructor)
  useEffect(() => {
    setMessageList(initialMessageList)
  },[])

  return (
    <>
    <h1>Jitter</h1>
    <Navigation loggedInUser={loggedInUser} activateUser={activateUser}/>

    {/* when user is NOT logged in, render the login form */}
    {loggedInUser ? 
    <MessageForm loggedInUser={loggedInUser} /> 
    : 
    <LoginForm activateUser={activateUser}/>}
    <Messages messageList={messageList}/>
    </>
  )
}

export default App;
