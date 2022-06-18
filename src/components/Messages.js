// import Message from "./Message";

const Messages = ({messageList}) => {
    return (
        <>
        {messageList.map(message =>
            <>
                <p>{message.text}</p>   
                <p>{message.user}</p>   
            </>
        )}
        </>
    )
}

export default Messages;