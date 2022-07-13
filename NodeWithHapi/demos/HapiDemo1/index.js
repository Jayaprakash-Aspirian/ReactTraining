const Hapi = require("Hapi")

// init server
const server = new Hapi.Server();

// ADD CONNECTION
server.connection({
    port : 8000,
    host : 'localhost'
})

//Home Route
server.route({
   method : 'GET',
   path:'/',
   handler : (request,reply) => {
    reply("<h1>Hello World</h1>")
   }
})


// Start Server
server.start((err)=>{
    if(err){
        throw err;
    }

    console.log(`Server started at: ${server.info.url}`)
})

