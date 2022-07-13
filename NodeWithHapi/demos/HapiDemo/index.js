// const Hapi = require('@hapi/hapi');
// const Joi = require('joi');

// const init = async () => {

//     const server = Hapi.server({
//         port: 3000,
//         host: 'localhost'
//     });

//     server.route({
//         method: 'GET',
//         path: '/',
//         handler: (request, h) => {
            
//             return 'Welcome to the Home page!';
//         }
//     });

//     server.route({
//         method: 'GET',
//         path: '/profile',
//         handler:  (request,reply) =>{
//             return(`Hello ${request.params.user}!`);
//         }
//     });

//     server.route({
//         method: '*',
//         path: '/{any*}',
//         handler: function (request, h) {
//             return '404 Error! Page Not Found!';
//         }
//     });
    
//     await server.start();
//     console.log('Server running on %s', server.info.uri);
// };


// process.on('unhandledRejection', (err) => {

//     console.log(err);
//     process.exit(1);
// });

// init();


// var mysql = require('mysql');

// var con = mysql.createConnection({
//   host: "localhost",
//   user: "yourusername",
//   password: "yourpassword"
// });

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   con.query("HapiDemo", function (err, result) {
//     if (err) throw err;
//     console.log("Database created");
//   });
// });

var Hapi = require('@hapi/hapi');
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'AsdfGhjk@123',
  database : 'hapidemo'
});

// var server = new Hapi.Server()

// server.connection({ port:3000 });
connection.connect(); 

const init = async () => { 
    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    });
    server.route({
        method:'GET',
        path : '/',
        handler : function(request,reply){
            // return('It is working')
            connection.query('SELECT * FROM people', function (error, results, fields) {
                if (error) throw error;
                return('The solution is: ', results[0].name);
            });
        }
    })
    
    await server.start();
    console.log('Server running on %s', server.info.uri);
}

init()

connection.end();