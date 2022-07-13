const dbConnect = require('./db');

const userRoutes = [ 
    {
        method:'POST',
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

        // return "yes"
        }
    },
    {
        method:'post',
        path : '/signup',
        handler : async function(request,reply){

            const name =  request.payload.name
            const team =  request.payload.team

            console.log(name)
            
            // const promise = new Promise((resolve,reject)=>{
            //     dbConnect.query("INSERT INTO people (name,team) VALUES (?,?)",[name,team], (err,result)=>{
            //         if(err) {
            //             console.log(err)
            //         } 
            //         resolve(res)
            //     })
            // })

        
            dbConnect.query("INSERT INTO people (name,team) VALUES (?,?)",[name,team], (err,result)=>{
                if(err) {
                    console.log(err)
                } 
            })
       
            return "Data Inserted Succcessfully"
            // return promise
        }
    }
    
    
    
]

// export default userRoutes;

module.exports = userRoutes