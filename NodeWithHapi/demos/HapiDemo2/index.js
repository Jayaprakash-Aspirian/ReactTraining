const Hapi = require('@hapi/hapi');
const Joi = require('joi');

const init = async () => {

    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    });

    server.route({
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            return 'Hello World!';
        }
    });

    // server.route({
    //     method: 'GET',
    //     path: '/hello/{user}',
    //     handler:  (request,reply) =>{
    //         return(`Hello ${request.params.user}!`);
    //     }
    // });

    //*Optional Parameter
    // server.route({
    //     method: 'GET',
    //     path: '/hello/{user?}',
    //     handler: function (request, h) {
    //         const user = request.params.user ? request.params.user : 'stranger';
    //         return `Hello ${user}!`;
    //     }
    // });

    //*Multi-Semgent Parameter
    // server.route({
    //     method: 'GET',
    //     path: '/hello/{user*2}',
    //     handler: function (request, h) {
    //         const userParts = request.params.user.split('/');
    //         return `Hello ${userParts[0]} ${userParts[1]}!`;
    //     }
    // });

    //*Options
    // server.route({
    //     method: 'POST',
    //     path: '/signup',
    //     handler: function (request, h) {
    
    //         const payload = request.payload;
    
    //         return `Welcome ${payload.username}!`;
    //     },
    //     options: {
    //         auth: false,
    //         validate: {
    //             payload: {
    //                 username: Joi.string().min(1).max(20),
    //                 password: Joi.string().min(7)
    //             }
    //         }
    //     }
    // });


    //*Path Parameters
    // server.route({
    //     method: 'GET',
    //     path: '/hello/{name}',
    //     handler: function (request, h) {
    
    //         return `Hello ${request.params.name}!`;
    //     },
    //     options: {
    //         validate: {
    //             params: Joi.object({
    //                 name: Joi.string().min(3).max(10)
    //             })
    //         }
    //     }
    // });


    // const bookSchema = Joi.object({
    //     title: Joi.string().required(),
    //     author: Joi.string().required(),
    //     isbn: Joi.string().length(10),
    //     pageCount: Joi.number(),
    //     datePublished: Joi.date().iso()
    // });
    
    // server.route({
    //     method: 'GET',
    //     path: '/books',
    //     handler: async function (request, h) {
    
    //         return await getBooks();
    //     },
    //     options: {
    //         response: {
    //             sample: 50,
    //             schema: Joi.array().items(bookSchema)
    //         }
    //     }
    // });

    server.route({
        method: '*',
        path: '/{any*}',
        handler: function (request, h) {

            return '404 Error! Page Not Found!';
        }
    });
    

    await server.start();
    console.log('Server running on %s', server.info.uri);
};


process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();