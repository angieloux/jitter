import { Card, CardContent, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Message = ({message}) => {
    return (
        <Link to={`${message.id}`} style={{textDecoration: 'none'}} >
            <CardContent>
                <Card>
                    <Typography variant="h5">{message.text}</Typography>   
                    <Typography variant="p">Posted by: {message.user}</Typography>
                </Card>
                <Card>
                    
                </Card>
            </CardContent>
        </Link>
    )
}

export default Message;