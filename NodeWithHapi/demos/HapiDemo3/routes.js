const dbConnect = require('./db');

const userRoutes = [ 
    {
        method:'GET',
        path : '/',
        handler : async function(request,reply){
            
        const promise = new Promise((resolve,reject)=>{
            dbConnect.query('SELECT * FROM people ',(err,res)=>{
                if(err){
                    console.log(err)
                }
                resolve(res)
            })
        })
        return promise
        }
    },
    {
        method :'POST',
        path : '/adduser',
        handler: async function(request,reply)
           {
            const id = request.payload.id
            const name =  request.payload.name
            const team =  request.payload.team
            const promise = new Promise((resolve,reject)=>{
                dbConnect.query("INSERT INTO people (id,name,team) VALUES (?,?,?)",[id,name,team] ,(err,res)=>{
                    if(err){
                        throw new Error(err)
                    }
                    resolve("Data Inserted Successfully")
                })
            })
            return promise;             
           }
    },
    {
        method :'PUT',
        path : '/updateuser',
        handler:async function(request,reply)
           {
            const id = request.payload.id
            const name =  request.payload.name
            const team =  request.payload.team
            const promise = new Promise((resolve,reject)=>{
                dbConnect.query("UPDATE people SET name=?,team=?  WHERE id = ?",[name,team,id] ,(err,res)=>{
                    if(err){
                        throw new Error(err)
                    }
                    resolve("Data Updated Successfully")
                })
            })
            return promise;             
           }
    },
    {
        method :'DELETE',
        path : '/deleteuser',
        handler:async function(request,reply)
           {
            const id = request.payload.id
            const promise = new Promise((resolve,reject)=>{
                dbConnect.query("DELETE from people WHERE id = ?",[id] ,(err,res)=>{
                    if(err){
                        throw new Error(err)
                    }
                    resolve("Data Deleted Successfully")
                })
            })
            return promise;             
           }
    },
    {
        method: '*',
        path: '/{any*}',
        handler: function (request, h) {
            return '404 Error! Page Not Found!';
        }
    }
]

module.exports = userRoutes