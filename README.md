# How It Works

## Overview

This appilicaiton consist of 4 components, the server, routes, services and Utilities. 

The idea is to not have files with more than 50 lines, so the code is easy to read and easy to reuse. To do that we need to apply the GRASP High Cohesion pattern, in other words each file should do only one thing and do it well (one of the Unix principle).

The downside of this is we will have a lot of files!!! So to find a function in all those files could be a hard task. To avoid that we need to put focus on the file names and the folder structure.

### server

The server starts a server and listens on port 3000 for connections it is also were you would add any middleware like the cors implementation in the app.

### routes

A route directs a request to the respected endpoint and satisfy the request with a res object this is also were you would make use of your services to satisfy the res.

### services

Services is all the code we need to write, for example a database connection, an AJAX call, an email sender. It is all the technological code so it will depend on the framework of libraries we use.

### Utilities

Utilities is all the code we need to write to reflect the real world problem that we need to solve, for example a User, a Student, a Sale, etc. Is all the code we create who not depends on any framework or library.

## Assumptions Or Caveats

Additionally:

- Please write up a paragraph or two about how your solution works, any assumptions or caveats, and put it in a readme file.
- Your solution should be well-tested in the testing framework of your choice. Commit the test suite to your repo.
- The output format is not rigidly specified. Use your judgement for json formats.

Send a github link to the final project.

# Notes

Please complete this challenge using Node.js and focus on the problem itself (rather than framework/scaffolding). Please make sure it's reasonably easy to run your code and there are clear instructions for doing so.

You will need to use an external geocoding service. However please implement the distance calculation in your own code. To the extent you need any algorithms, I'm not expecting you to invent anything from scratch, so use Google & external libraries judiciously, and cite/document appropriately.

You can add polish or extra features if you'd like, but remember that software is about tradeoffs and *by far the most important thing is delivering working, practical software that solves the problem of finding the closest store location*. The goal is not to take up a bunch of your time, but see you solve a problem that looks very much like the type of work we do all the time.

There are a ton of different ways to skin this cat -- be smart, be practical, thanks, and good luck!
