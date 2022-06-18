// alternative to useState, more complex, but also more powerful & more flexible
// useState is syntactic sugar of useReducer (i.e. simplifies it)
// kind of like Redux

// reducer function recieves 2 paramters
    // 1. the current state
    // 2. the action we want to implement to the state 
// based on the action, the function will update the state one way or another 

// the action is an object with 2 keys (1. type and 2. data)
    // the type key determines what the action is that we are taking
    // the data key contains the data necessary to update the state

// the function returns the updated state

export const reducer = (state, action) => {
    // console.log(state)
    // console.log(action)

    switch (action.type) {
        case "cleanState": {
            // state goes back to default values
            return {
                messageList: [],
                loggedInUser: ""
            }
        }
        
        case "setMessageList": {
            // populate the messageList array with the initial values
            return {
                ...state, 
                messageList: action.data
            }
        }
        case "addMessage": {
            // receives a message & adds it to the messageList
            return {
                ...state, 
                messageList: [action.data, ...state.messageList]
            }
        }

        case "setLoggedInUser": {
            // sets the logged-in user
            return {
                ...state, 
                loggedInUser: action.data
            }
        }
        default: return state
    
    }
}