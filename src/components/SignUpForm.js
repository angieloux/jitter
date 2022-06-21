import { Button, TextField, InputLabel, Typography, Card } from "@mui/material";
import {useState} from "react";
import { useNavigate } from "react-router";
import { signUp } from "../services/authServices";
import { useGlobalState } from "../utils/stateContext";

const SignUpForm = () => {
  const {dispatch} = useGlobalState()
  const navigate = useNavigate()
  
    const initialFormData = {
        username: '',
        password: '',
        email: '',
        password_confirmation: ''
    } 
    const [formData, setFormData] = useState(initialFormData)
    
    const handleSubmit = (e) => {
        e.preventDefault();
        // activateUser(formData.user)
        signUp(formData)
          .then(({username, jwt}) => {
            sessionStorage.setItem("username", username)
            sessionStorage.setItem("token", jwt)
            dispatch({
              type: "setLoggedInUser",
              data: username
            })
            dispatch({
              type: "setToken",
              data: jwt
            })
          })
            .catch(e => {console.log(e)})
        
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
    <Typography variant="h4">Sign up</Typography>
    {/* SIGNUP FORM */}
      <form onSubmit={handleSubmit}>
        <Card>
        <InputLabel>Username:</InputLabel>
        <TextField type="text" name="username" id="username" value={formData.username} onChange={handleFormData}/>

        <InputLabel>Email:</InputLabel>
        <TextField type="email" name="email" id="email" value={formData.email} onChange={handleFormData}/>

        <InputLabel htmlFor="password">Password:</InputLabel>
        <TextField type="password" name="password" id="password" value={formData.password} onChange={handleFormData}/>

        <InputLabel htmlFor="password">Password confirmation:</InputLabel>
        <TextField type="password" name="password_confirmation" id="password_confirmation" value={formData.password_confirmation} onChange={handleFormData}/>
        </Card>
        <Button type="submit" variant="contained">Register</Button>
      </form>
    </>
  );
};

export default SignUpForm;
