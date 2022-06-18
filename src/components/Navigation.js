import { NavLink, useNavigate } from "react-router-dom";

const Navigation = ({loggedInUser, activateUser}) => {
    
    const navigate = useNavigate()

    const logout = (e) => {
        e.preventDefault();
        activateUser("")
        navigate("/messages")
    }
    return (
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>

            {loggedInUser ? 
                <>
                    Welcome, {loggedInUser}!
                    <NavLink to="/messages/new">New message</NavLink>
                    <NavLink to="/messages" onClick={logout}>Logout</NavLink>
                </> :
                <>
                    Welcome, Guest!
                    <NavLink to="/login">Login</NavLink>
                    <NavLink to="/signup">Sign up</NavLink>
                </>
            }

        </nav>
    )
}

export default Navigation;