import { Button } from '@mui/material'
import {useState} from 'react'
import { useNavigate } from 'react-router'
import { useGlobalState } from '../utils/stateContext'

const MessageForm = () => {
    const {store, dispatch} = useGlobalState()
    const {loggedInUser, messageList} = store
    const navigate = useNavigate()
    const initialFormData = {
        text: '',
    }

    const [formData, setFormData] = useState(initialFormData)

    const handleFormData = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = (e) => {
        // adds the message to the list 
        e.preventDefault();
        if (formData.text === "") {
            console.log("cant post an empty message!")
        } else {
            addMessage(formData.text)
            clearMessage()
            navigate("/messages") // redirect to home page once user posts a new msg
        }
        
    }
    const addMessage = (text) => {
        const message = {
          text: text,
          user: loggedInUser,
          id: messageList[0].id + 1
        }
        dispatch({
          type: "addMessage",
          data: message
        })
      }
    
    const clearMessage = () => {
        setFormData(initialFormData);
    }
    
    return (
        <>
        <form onSubmit={handleSubmit}>
            <div>
            <textarea type="text" name="text" value={formData.text} id="text" cols="30" rows="10" placeholder={`What's on your mind ${loggedInUser}?`} onChange={handleFormData}></textarea>
            </div>
            
            <Button type="submit" variant="contained">Post message</Button>
            <Button onClick={clearMessage} variant="contained">Clear message</Button>

        </form>
        </>
    )
}

export default MessageForm;