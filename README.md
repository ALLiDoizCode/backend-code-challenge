# How It Works

>npm install
>npm start

## Overview

This application consist of 4 components, the server, routes, services and Utilities. 

The idea is to not have files with more than 50 lines, so the code is easy to read and easy to reuse. To do that we need to apply the GRASP High Cohesion pattern, in other words each file should do only one thing and do it well (one of the Unix principle).

The downside of this is we will have a lot of files!!! So to find a function in all those files could be a hard task. To avoid that we need to put focus on the file names and the folder structure.

### server

The server listens on port 3000 for connections it is also were you would add any middleware like the cors implementation in the app.

### routes

A route directs a request to the respected endpoint and satisfy the request with a res object this is also were you would make use of your services to satisfy the res.

### services

Services is all the code we need to write, for example a database connection, an AJAX call, an email sender. It is all the technological code so it will depend on the framework or libraries we use.

### Utilities

Utilities is all the code we need to write to reflect the real world problem that we need to solve, for example a unit conversion, distance calculation, etc. Is all the code we create that doesn't depends on any framework or library.


## Resources

### Stackoverflow

[As The Crow Files](https://stackoverflow.com/questions/18883601/function-to-calculate-distance-between-two-coordinates)
[Distance](https://stackoverflow.com/questions/51318864/how-to-find-out-which-cordinates-are-closest?noredirect=1&lq=1)

## Testing

All test are in the tests folder and are tested using [Mocha](https://github.com/mochajs/mocha) [Chai](https://github.com/chaijs/chai) and [Chai-Http](https://github.com/chaijs/chai-http)

> npm test