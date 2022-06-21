export const GET_USERS_ACTIVITY = "GET_USERS_ACTIVITY"
export const CANCEL_GET_USERS_ACTIVITY = "CANCEL_GET_USERS_ACTIVITY"
export const FULLFILLED_GET_USERS_ACTIVITY = "FULLFILLED_GET_USERS_ACTIVITY "
export const REJECTED_GET_USERS_ACTIVITY = "REJECTED_GET_USERS_ACTIVITY"

export const GET_TRANSACTIONS_ACTIVITY = "GET_TRANSACTIONS_ACTIVITY"
export const CANCEL_GET_TRANSACTIONS_ACTIVITY = "CANCEL_GET_TRANSACTIONS_ACTIVITY"
export const FULLFILLED_GET_TRANSACTIONS_ACTIVITY = "FULLFILLED_GET_TRANSACTIONS_ACTIVITY"
export const REJECTED_GET_TRANSACTIONS_ACTIVITY= "REJECTED_GET_TRANSACTIONS_ACTIVITY"

export const GET_USER_ACTIVITY = "GET_USER_ACTIVITY"
export const CANCEL_GET_USER_ACTIVITY = "CANCEL_GET_USER_ACTIVITY"
export const FULLFILLED_GET_USER_ACTIVITY = "FULLFILLED_GET_USER_ACTIVITY"
export const REJECTED_GET_USER_ACTIVITY = " REJECTED_GET_USER_ACTIVITY "

export const SIGNUP_DATA = "SIGNUP_DATA"



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




  