# DoorDash Frontend Interview Project

### How to run
1. `npm install`
1. `npm run api-server`
1. `npm start`

### Frontend stack
I integrated [`marionettejs/marionette-integrations/webpack2`](https://github.com/marionettejs/marionette-integrations/tree/master/webpack2) into the existing boilerplate to get started with Backbone.js + Marionette.js + Webpack 2.

I chose Backbone.js and Marionette.js because that's what I'm comfortable with, and this gave me a good opportunity to dive in to newer stuff (Marionette 3->4, ES 5->6, RequireJS->Webpack, IntelliJ -> Atom) without changing *too* many variables.

I'm new to ES6, coming from a CoffeeScript 1.x => ES5 background. Syntax isn't perfect, but maybe that's what ESLint is for.

The nice part:
* Everything is structured into collections.
* RESTful network support is built-in.
* Views automatically update from model/collection changes.
* Views gracefully destroy themselves when being removed (changing chat rooms) to avoid leaking memory and event handles.
* Most importantly: Organization makes maintenance easier.

The bad part:
* Took me a long time to come up with, compared to a rushed jQuery solution.
* Some classes are overly structured, needing data to be manually passed down.

### TODO
I could spend all the time in the world on this, but I can't. Here are some things that come first to mind (many even during development) that I'd work on:
* Display some kind of loading indicator for asynchronous loading waiting to finish.
* Display something on network errors (worst case: ask the user to refresh)
* Automated testing for these two cases (slow response and error response). Maybe even malformed responses.
* Test/support slow message-sending
* Fetch rooms that a user has access to. Since there are no restrictions waiting on user input, at load time, all rooms, room details, and messages are fetched from the server.
* Add reactions ;)
* WebSockets to receive new messages immediately (advanced)
