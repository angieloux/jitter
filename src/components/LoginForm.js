import {useState} from "react";

const LoginForm = ({activateUser}) => {
    const initialFormData = {user: '', password: ''} 
    const [formData, setFormData] = useState(initialFormData)
    
    const handleSubmit = (e) => {
        e.preventDefault();
        activateUser(formData.user)
        setFormData(initialFormData)
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
        <label>Username:</label>
        <input type="text" name="user" id="user" value={formData.user} onChange={handleFormData}/>

        <label htmlFor="password">Password:</label>
        <input type="password" name="password" id="password" value={formData.password} onChange={handleFormData}/>

        <input type="submit" value="Login" />
      </form>
    </>
  );
};

export default LoginForm;
