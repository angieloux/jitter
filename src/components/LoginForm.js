import { Button, TextField, InputLabel, Typography } from "@mui/material";
import {useState} from "react";
import { useNavigate } from "react-router";
import { logIn } from "../services/authServices";
import { useGlobalState } from "../utils/stateContext";

const LoginForm = () => {
  const {dispatch} = useGlobalState()

  const navigate = useNavigate()
    const initialFormData = {
      email: '',
      password: ''
    } 
    const [formData, setFormData] = useState(initialFormData)
    
    const handleSubmit = (e) => {
        e.preventDefault();
        // activateUser(formData.user)
        logIn(formData)
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
    {/* LOGIN FORM */}
    <Typography variant="h4">Log in</Typography>
      <form onSubmit={handleSubmit}>
        <InputLabel>Email:</InputLabel>
        <TextField type="email" name="email" id="email" value={formData.email} onChange={handleFormData}/>

        <InputLabel htmlFor="password">Password:</InputLabel>
        <TextField type="password" name="password" id="password" value={formData.password} onChange={handleFormData}/>

        <Button type="submit" variant="contained">Login</Button>
      </form>
    </>
  );
};

export default LoginForm;
