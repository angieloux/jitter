import React, {useEffect, useReducer} from 'react'
import Navigation from './Navigation';
import LoginForm from './LoginForm';
import MessageForm from './MessageForm';
import Messages from './Messages';
import initialMessageList from '../data/message-list.json'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import About from './About';
import NotFound from './NotFound';
import MessageDetail from './MessageDetail'
import { reducer } from '../utils/reducer';
import { StateContext } from '../utils/stateContext';

function App() {
  // useReducer handles all the states in the same object
  const initialState = {
    messageList: [],
    loggedInUser: ""
  }

  // useReducer RECEIVES two arguments:
    // reducer -> a function that is executed when dispatch is called
    // & state -> 

  // it RETURNS an array with two elements:
    // store -> the value of the state we are 'storing'
    // dispatch -> the function that triggers the  reducer function

  const [store, dispatch] = useReducer(reducer, initialState)
  const {loggedInUser} = store

  // load the list in componentDidMount (not constructor)
  useEffect(() => {
    dispatch({
      type: "setMessageList", 
      data: initialMessageList
    })
  },[])

  return (
    <>
    <h1>Jitter</h1>

    {/* Wrap all the components that use global states like loggedInUser and messageList in the state context provider */}
    <StateContext.Provider value={{store, dispatch}}>
    {/* Wrap all the components involved in the apps routing */}
    <Router>
      {/* Include the Navigation links within the Router tags as it uses the NavLink component (part of react-router-dom) */}
    <Navigation/>
      <Routes>

        {/* Root route */}
        <Route path="/" element={<Navigate to="messages" replace /> } />
        

        {/* Message routes */}
        <Route path="messages">
          {/* General route */}
          <Route index element={<Messages/>}/>

          {/* Nested routes */}

          {/* If the user is logged in, they can post a message */}
          <Route path="new" element={  
            loggedInUser ?
              <MessageForm/>
              :
              <Navigate to="/login"/>
              }/>
          <Route path=":messageId" element={<MessageDetail/>}/>
        </Route>


        <Route path="about" element={<About/>} />    
        <Route path="login" element={<LoginForm />} />
        {/*  for everything else (*) it will render the NotFound component */}
        <Route path="*" element={<NotFound/>}/> 
      
      </Routes>
    </Router>
    </StateContext.Provider>
    </>
  )
}

export default App;
