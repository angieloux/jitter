import { Card, CardContent, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Message = ({message}) => {
    return (
        <Link to={`${message.id}`} style={{textDecoration: 'none'}} >
            <CardContent>
                <Card>
                    <Typography variant="h5">{message.text}</Typography>   
                    <Typography variant="p">@{message.username}</Typography>
                    <Typography variant="p"> Posted: {message.posted}</Typography>
                </Card>
                <Card>
                    
                </Card>
            </CardContent>
        </Link>
    )
}

export default Message;