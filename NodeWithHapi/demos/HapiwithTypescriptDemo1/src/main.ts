const Hapi = require('@hapi/hapi');
// const userRoutes = require('./routes');
// const { userRoutes } = require('./routes');

// console.log(userRoutes)
const server = Hapi.Server({
    port: 3000,
    host: 'localhost'
});

// server.connection({
//     host: 'localhost',
//     port: 3000
// });


const init = async()=>{

//    await server.route(userRoutes)
   
   await server.start().then(()=>{   
        console.log("connected")
    })   
}
init();