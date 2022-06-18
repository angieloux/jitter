const Message = ({message}) => {
    return (
        <>
            <h4>{message.text}</h4>   
            Posted by: <span>{message.user}</span>   
        </>
    )
}

export default Message;