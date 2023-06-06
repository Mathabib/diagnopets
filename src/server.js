const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const server = Hapi.server({
    port: 5000,
    host: 'localhost'
});

server.route(
    routes
);


async function start(){

    try{
        await server.start();
        console.log(`server berjalan pada ${server.info.uri}`);
    } catch(err){
        console.log('error saat menjalan server',err)
    }
}

start()