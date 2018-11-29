# SECTION 1: THE BASICS
--------------------------------------------------------------------------------------------------------------
# Installation
- just use npm like any other project
- you no longer have to specify to get hapi v 17

```
yarn add hapi
```

- hapi has no required dependencies

## file structure
- until otherwise noted, this is the file structure:
    - hapi-practice-1
        - server.js



--------------------------------------------------------------------------------------------------------------
# Starting your server
### v17
- to run a server in Hapi, you need to initialize a new instance with       
  
```new Hapi.server()```

- server() takes an optional argument, a **server configuration object** which 
  sets things like the server's host and port

    - [server configuration object docs](https://hapijs.com/api#server.options)

- here is the code for just getting the server started, most simple servers only need host and port:

```
FILE: hapi-practice/server.js

const Hapi = require('hapi');

// create a server with a host and port
const server = new Hapi.Server({
  host: 'localhost',
  port: 3101
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
```

- to make sure that your server runs, do: 

```
npm start
```

- FYI don't forget to use [nodemon](https://www.npmjs.com/package/nodemon) for your server, your start command should look like this in your package.json file: 

```
  ...
  "scripts": {
    "start": "nodemon server.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
```

- all this does at this point is log the server uri to the console
- to get something to appear in the browser we need to set up some routes

------------------------------------------------------------------------------------------------------
# setting up basic routes
### v17 
- You have to add routes to your server using the **server.route([route config object])** method 
- This method takes an argument, the actual route object, which looks like this: 
    - [server.route docs](https://hapijs.com/api#-serverrouteroute)

```
server.route({  
  method: 'GET',
  path: '/',
  handler: (request, h) => {
    return 'I am the home route'
  }
})
```
### here are the properties of the **route configuration object**, largely from the docs: 

- method [required]
    - the HTTP method, ussually 'GET', 'POST', 'PUT', 'PATCH', 'DELETE', or 'OPTIONS'.
    - Any HTTP method is allowed, except for 'HEAD'. 
    - Use '*' to match against any HTTP method (only when an exact match was not found, and any match with a specific method will be given a higher priority over a wildcard match). 
    - Can be assigned an array of methods which has the same result as adding the same route with different methods manually.

- path [required]
    - the absolute path used to match incoming requests (must begin with '/').
    - Incoming requests are compared to the configured paths based on the server's router configuration. 
    - Use named parameters enclosed with {}, ie '/people/{id}' 

- handler [required if handler property is not set in options]  
    - the route handler function called to generate the response after successful authentication and validation.

- options [optional] 
    - The options value is usually an object 
    - it can instead be a function that returns an object
        - the function's signature must be **function(server)**, 
        - where **server** is the server the route is being added to.
    - the options object is where you can define authentication, tags, notes, descriptions, and even the handler
    - the handler goes in either **options** or the main *route config object**, not both

vhost - (optional) 
     - see docs for more info

## add it to your server
- add your routes before the server starts like so: 

```
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
```

**Note**: while it is possible to pass an array of routes to server.route(), it's not best practice, in the next section, we'll separate them out into their own files.











