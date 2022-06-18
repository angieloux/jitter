
const Navigation = ({loggedInUser, activateUser}) => {
    const logout = (e) => {
        e.preventDefault();
        activateUser("")
    }
    return (
        <nav>
            <a href="/">Home</a>
            <a href="/">About</a>

            {loggedInUser ? 
                <>
                    Welcome, {loggedInUser}!
                    <a href="/" onClick={logout}>Log out</a>
                </> :
                <>
                    Welcome, Guest!
                    <a href="/">Login</a>
                    <a href="/">Sign up</a>
                </>
            }

        </nav>
    )
}

export default Navigation;