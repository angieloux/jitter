import {useState} from 'react'
import { useNavigate } from 'react-router'

const MessageForm = ({loggedInUser, addMessage}) => {
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
    
    const clearMessage = () => {
        setFormData(initialFormData);
    }
    
    return (
        <>
        <form onSubmit={handleSubmit}>
            <div>
            <textarea type="text" name="text" value={formData.text} id="text" cols="30" rows="10" placeholder={`What's on your mind ${loggedInUser}?`} onChange={handleFormData}></textarea>
            </div>
            
            <input type="submit" value="post" />
            <button onClick={clearMessage}>Clear message</button>
        </form>
        </>
    )
}

export default MessageForm;