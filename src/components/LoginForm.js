import { Button, TextField, InputLabel } from "@mui/material";
import {useState} from "react";
import { useNavigate } from "react-router";
import { useGlobalState } from "../utils/stateContext";

const LoginForm = () => {
  const {dispatch} = useGlobalState()

  const navigate = useNavigate()
    const initialFormData = {user: '', password: ''} 
    const [formData, setFormData] = useState(initialFormData)
    
    const handleSubmit = (e) => {
        e.preventDefault();
        // activateUser(formData.user)
        dispatch({
          type: "setLoggedInUser",
          data: formData.user
        })
        setFormData(initialFormData)
        navigate("/messages") // redirect to home page once user logs in
    }

  const handleFormData = (e) => {
    setFormData({
        ...formData, // destructure the formData -> current value of it 
        [e.target.name]: e.target.value // add the new data
    })
  }

    return (
    <>
    {/* LOGIN FORM */}
      <form onSubmit={handleSubmit}>
        <InputLabel>Username:</InputLabel>
        <TextField type="text" name="user" id="user" value={formData.user} onChange={handleFormData}/>

        <InputLabel htmlFor="password">Password:</InputLabel>
        <TextField type="password" name="password" id="password" value={formData.password} onChange={handleFormData}/>

        <Button type="submit" variant="contained">Login</Button>
      </form>
    </>
  );
};

export default LoginForm;
