// const jsonServer = require('json-server')
// const clone = require('clone')
// const data = require('./db.json')

import jsonServer, { JsonServerRouter } from 'json-server'
import clone from 'clone'
const data = require('../db.json')



const isProductionEnv = process.env.NODE_ENV === 'production' ? "production" : "development";
const server = jsonServer.create()

// For mocking the POST request, POST request won't make any changes to the DB in production environment
// const router = jsonServer.router(isProductionEnv ? clone(data) : 'db.json', {
//     _isFake: isProductionEnv
// })

//mockthe post request so that it does not change the db.json file  in production environment
const router = jsonServer.router(isProductionEnv === "production" ? clone(data) : 'db.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)

server.use((req, _res, next) => {
    if (req.path !== '/')
        router.db.setState(clone(data))
    next()
})

server.use(router)
let PORT = process.env.PORT || 8000;
server.listen(PORT, () => {
    console.log('JSON Server is running in ' + isProductionEnv + ' mode, at ' + PORT )
})

// Export the Server API
export default server
