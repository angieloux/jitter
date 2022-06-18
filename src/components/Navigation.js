
const Navigation = ({loggedInUser}) => {
    return (
        <nav>
            <a href="/">Home</a>
            <a href="/">About</a>

            {loggedInUser ? 
                <>
                    {loggedInUser}
                    <a href="/">Log out</a>
                </> :
                <>
                    Guest
                    <a href="/">Login</a>
                    <a href="/">Sign up</a>
                </>
            }

        </nav>
    )
}

export default Navigation;