// const jsonServer = require('json-server')
// const clone = require('clone')
// const data = require('./db.json')
const fs = require('fs');
import jsonServer, { JsonServerRouter } from 'json-server'
import clone from 'clone'
import data from './db.json';
const pause = require('connect-pause');



const isProductionEnv = process.env.NODE_ENV === 'production'
const server = jsonServer.create()

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

// var routes =  JSON.parse(fs.readFileSync('db.json'));
// server.use(jsonServer.rewriter(routes));

// server.use((req, _res, next) => {
//     if (req.path !== '/')
//         router.db.setState(clone(data))
//     next()
// })
server.use(pause(1000));
server.use(router)
let PORT = process.env.PORT || 8000;
server.listen(PORT, () => {
    console.log('JSON Server is running in ' + process.env.NODE_ENV + ' mode, at ' + PORT )
})

// Export the Server API
export default server
