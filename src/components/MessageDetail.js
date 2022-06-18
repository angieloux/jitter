import { CardContent, Typography, Card } from "@mui/material";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { useGlobalState } from "../utils/stateContext";

const MessageDetail = () => {
  const { store } = useGlobalState();
  const { messageList } = store;

  const params = useParams();

  const getMessage = (id) => {
    return messageList.find((m) => m.id === parseInt(id));
  };
  const message = getMessage(params.messageId);
  return (
    <>
      {message ? (
        <CardContent>
          <Card>
            <Typography variant="h5">{message.text}</Typography>
            <Typography variant="p">Posted by: {message.user}</Typography>
          </Card>
          <Card></Card>
        </CardContent>
      ) : (
        <>
          <p>Message not found</p>
          <Link to="/messages">Go back to the home page</Link>
        </>
      )}
    </>
  );
};

export default MessageDetail;
