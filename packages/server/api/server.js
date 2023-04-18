const jsonServer = require('json-server')
const clone = require( 'clone')
const data  = require('../db.json')
const cors  = require('cors')



const isProductionEnv = process.env.NODE_ENV === 'production'
const server = jsonServer.create()

server.use(cors())

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


server.use(jsonServer.rewriter({
    '/api/*': '/$1',
    '/blog/:resource/:id/show': '/:resource/:id'
}))
server.use(router)

let PORT = process.env.PORT || 8000;
server.listen(PORT, () => {
    console.log('JSON Server is running in ' + process.env.NODE_ENV + ' mode, at ' + PORT )
})

// Export the Server API
module.exports = server
