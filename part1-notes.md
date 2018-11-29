# Hapi
## What is Hapi?
 - Hapi is is a JS framework that handles routing, and has a great plugin system that lets you make a modular application

 - It uses other frameworks like Joi, for validation, and Boom for error handling, and there are many more

- it has built in blackbox testing with server.inject

- Hapi core is so small and lightweight, since it just has other plugins that are only added when needed


# install
- just use npm like any other project
- you no longer have to specify to get hapi v 17

<code>
ok

asd

asd
</code>

## What is Hapi?
 - Hapi is is a JS framework that handles routing, and has a great plugin system that lets you make a modular application

 - It uses other frameworks like Joi, for validation, and Boom for error handling, and there are many more

- it has built in blackbox testing with server.inject

- Hapi core is so small and lightweight, since it just has other plugins that are only added when needed


# install
- just use npm like any other project
- you no longer have to specify to get hapi v 17

<code>
yarn add hapi
</code>

- hapi has no required dependencies

## file structure
- until otherwise noted, this is the file structure:
    - hapi-practice-1
        - server.js


# starting your server
## v17
- here is the code for just getting the server started:

<code>
FILE: hapi-practice/server.js
const Hapi = require('hapi');

// create a server with a host and port
const server = new Hapi.Server({
  host: 'localhost',
  port: 3000
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
</code>

- to make sure that your server runs,