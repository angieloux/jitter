import { Link } from "react-router-dom";
const notFound = () => {
    return (
        <>
            <p>404 error</p>
            <p>Sorry, page not found</p>
            <Link to="/messages">Go home</Link>
        </>
    )
}

export default notFound;