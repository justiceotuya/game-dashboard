import express from 'express'
import fs from 'fs';
import jsonServer, { JsonServerRouter } from 'json-server'
import clone from 'clone'
import data from './db.json';
// import pause from 'connect-pause';



const isProductionEnv = process.env.NODE_ENV === 'production'
const server:express.Application = jsonServer.create()

// For mocking the POST request, POST request won't make any changes to the DB in production environment
// const router = jsonServer.router(isProductionEnv ? clone(data) : 'db.json', {
//     _isFake: isProductionEnv
// })

//mockthe post request so that it does not change the db.json file  in production environment
const router = jsonServer.router(isProductionEnv? clone(data) : 'db.json', {
    foreignKeySuffix: '_id'
})
const middlewares = jsonServer.defaults()

server.use(middlewares);
server.use(jsonServer.bodyParser);


server.use((req, _res, next) => {
  if (req.method === 'POST') {
    console.log('POST request received')
    req.body.created_at = Date.now()
  }
  // Continue to JSON Server router
  !isProductionEnv ? setTimeout(next, Math.floor( ( Math.random() * 2000 ) + 100 ) ) : next();
})

// server.use(pause(15000));
server.use(router)
let PORT = process.env.PORT || 8000;
server.listen(PORT, () => {
    console.log('JSON Server is running in ' + process.env.NODE_ENV + ' mode, at ' + PORT )
})

// Export the Server API
export default server
