import jitterAPI from "../config/api";

export async function getMessages() {
    const response = await jitterAPI.get('/messages') // returns an array of messages (objects)
    // console.log(response.data)
    return response.data;
}