export const GET_USERS_ACTIVITY = "GET_USERS_ACTIVITY"
export const CANCEL_GET_USERS_ACTIVITY = "CANCEL_GET_USERS_ACTIVITY"
export const FULLFILLED_GET_USERS_ACTIVITY = "FULLFILLED_GET_USERS_ACTIVITY "
export const REJECTED_GET_USERS_ACTIVITY = "REJECTED_GET_USERS_ACTIVITY"

export const GET_TRANSACTIONS_ACTIVITY = "GET_TRANSACTIONS_ACTIVITY"
export const CANCEL_GET_TRANSACTIONS_ACTIVITY = "CANCEL_GET_TRANSACTIONS_ACTIVITY"
export const FULLFILLED_GET_TRANSACTIONS_ACTIVITY = "FULLFILLED_GET_TRANSACTIONS_ACTIVITY"
export const REJECTED_GET_TRANSACTIONS_ACTIVITY= "REJECTED_GET_TRANSACTIONS_ACTIVITY"

export const ADD_USERS_ACTIVITY = "ADD_USERS_ACTIVITY"
export const CANCEL_ADD_USERS_ACTIVITY = "CANCEL_ADD_USERS_ACTIVITY"
export const FULLFILLED_ADD_USERS_ACTIVITY = "FULLFILLED_ADD_USERS_ACTIVITY"
export const REJECTED_ADD_USERS_ACTIVITY= "REJECTED_ADD_USERS_ACTIVITY"

export const ADD_TRANSACTIONS_ACTIVITY = "ADD_TRANSACTIONS_ACTIVITY"
export const CANCEL_ADD_TRANSACTIONS_ACTIVITY = "CANCEL_ADD_TRANSACTIONS_ACTIVITY"
export const FULLFILLED_ADD_TRANSACTIONS_ACTIVITY = "FULLFILLED_ADD_TRANSACTIONS_ACTIVITY"
export const REJECTED_ADD_TRANSACTIONS_ACTIVITY= "REJECTED_ADD_TRANSACTIONS_ACTIVITY"

export const UPDATE_USER_ACTIVITY = "UPDATE_USER_ACTIVITY"
export const CANCEL_UPDATE_USER_ACTIVITY = "CANCEL_UPDATE_USER_ACTIVITY"
export const FULLFILLED_UPDATE_USER_ACTIVITY = "FULLFILLED_UPDATE_USER_ACTIVITY"
export const REJECTED_UPDATE_USER_ACTIVITY="REJECTED_UPDATE_USER_ACTIVITY"

export const SUCCESS_MESSAGE = "SUCCESS_MESSAGE"
export const ERROR_MESSAGE = "ERROR_MESSAGE"
export const MESSAGE_REMOVE = "MESSAGE_REMOVE"

export const successMessage = (message:any) =>{
    return { type:SUCCESS_MESSAGE, payload:message};
}

export const errorMessage = (message:any) =>{
    return { type:ERROR_MESSAGE,payload:message};
}

export const messageRemove = () =>{
    return { type: MESSAGE_REMOVE };
}

export const addUsersData = (usersdata :any) =>{
    return { type: ADD_USERS_ACTIVITY,payload:usersdata};
}

export const addTransactionsData = (transactions :any) =>{
    return { type: ADD_TRANSACTIONS_ACTIVITY,payload:transactions };
}

export const updateUserData = (userdata:any) =>{
    return { type:UPDATE_USER_ACTIVITY ,payload:userdata };
}

export const rejecttransactionsData = (payload :any) =>{
    return { type: REJECTED_ADD_TRANSACTIONS_ACTIVITY,payload };
}


export const getActivityUsersData = (payload:any)=>{
    return { type: GET_USERS_ACTIVITY,payload };
};

export const cancelActivityUsersData = () =>{
    return{ type:CANCEL_GET_USERS_ACTIVITY };   
}

export const fullfilledActivityUsersData = (payload:any) =>{
    return{ type:FULLFILLED_GET_USERS_ACTIVITY,payload };   
}

export const rejectedActivityUsersData = () =>{
    return{ type:REJECTED_GET_USERS_ACTIVITY };   
}

export const getActivityTransactionsData = (payload:any)=>{
    return { type: GET_TRANSACTIONS_ACTIVITY,payload };
};

export const cancelActivityTransactionsData = () =>{
    return{ type:CANCEL_GET_TRANSACTIONS_ACTIVITY};   
}

export const fullfilledActivityTransactionsData = (payload:any) =>{
    return{ type:FULLFILLED_GET_TRANSACTIONS_ACTIVITY,payload };   
}

export const rejectedActivityTransactionsData = () =>{
    return{ type:REJECTED_GET_TRANSACTIONS_ACTIVITY };   
}




  