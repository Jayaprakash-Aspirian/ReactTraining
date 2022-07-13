const Hapi = require('hapi');
const userRoutes = require('./routes');
// const { userRoutes } = require('./routes');

const server = Hapi.Server({
    port: 3000,
    host: 'localhost'
});

const init = async()=>{

   await server.route(userRoutes)
   await server.start().then(()=>{   
        console.log("connected")
    })   
}
init();

