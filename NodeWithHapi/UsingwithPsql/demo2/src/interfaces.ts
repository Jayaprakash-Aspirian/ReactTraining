import hapi from "@hapi/hapi"

export interface DeleteData extends hapi.Request{
    payload:{
        id:number
    }
}

export interface UpdateData extends hapi.Request{
    payload:{
        id:number,
        name:string,
        dept:string
    }
}

export interface AddData extends hapi.Request{
    payload:{
        id:number,
        name:string,
        dept:string
    }
}