-create repository
-clone repository
-cd into folder
-npm init -y
-npx gitignore node or npm i -g gitignore and then gitignore node.
-git add .
-git commit -m 'message'
-git push -u origin master

React applications are broken up into components

Express API's are broken up into Express Routers

# Client Server architecture

[client] <network (JSON)> [api] <> [data sources]

## request / response cycle

1. client makes a request to a server

2. server produces a response and sends it to the client

[client] > request > [mw > mw > mw] > responds [client]

## Middleware

- can see the request and do something with the information from the req
- can stop the request and produce a response
- can do nothing
- can do the same with the response object
- **can modify the request or response objects**

three types

- built-in: no need to npm install
- third party: need to install using yarn or npm
- custom: we build it

can be used:

- globally with server.use()
- locally at a request handler