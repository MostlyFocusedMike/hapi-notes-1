const Hapi = require('hapi');

// create a server with a host and port
const server = new Hapi.Server({
    host: 'localhost',
    port: 3101
  });

server.route({  
    method: 'GET',
    path: '/',
    handler: (request, h) => {
      return 'I am the home route'
    },
});

server.route({  
    method: 'GET',
    path: '/example',
    handler: (request, h) => {
      return 'I am an example url'
    },
});

// define server start function
async function start () {
    try {
        await server.start(); // the builtin server.start method is async
    } catch (err) {
        console.error(err);
        process.exit(1);
    };

    console.log('Server running at: ', server.info.uri);
}

// start your server
start();