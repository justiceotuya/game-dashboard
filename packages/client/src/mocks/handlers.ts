import { rest } from 'msw'

// src/mocks/handlers.js
import { mockUsers } from './db'

export const handlers = [
  rest.post('http://localhost:8000/user', (req, res, ctx) => {
   // Persist user's authentication in the session

    return res(
      // Respond with a 200 status code
      ctx.status(200),
    )
  }),

  rest.get('http://localhost:8000/users', (req, res, ctx) => {
    // If authenticated, return a mocked user details
    return res(
      ctx.status(200),
      ctx.json(mockUsers),
    )
  }),
]


export const defaultHandlers = [
  rest.get('*', (req, res, ctx) => {
    res(ctx.status(200), ctx.json({}))
  }),
  rest.post('*', (req, res, ctx) => res(ctx.status(200), ctx.json({}))),
  rest.patch('*', (req, res, ctx) => res(ctx.status(200), ctx.json({}))),
  rest.put('*', (req, res, ctx) => res(ctx.status(200), ctx.json({}))),
  rest.delete('*', (req, res, ctx) => res(ctx.status(200), ctx.json({}))),
]

export const networkErrorHandlers = [
  rest.get('*', (req, res, ctx) => res.networkError('Boom there was error')),
  rest.post('*', (req, res, ctx) => res.networkError('Boom there was error')),
  rest.patch('*', (req, res, ctx) => res.networkError('Boom there was error')),
  rest.put('*', (req, res, ctx) => res.networkError('Boom there was error')),
  rest.delete('*', (req, res, ctx) => res.networkError('Boom there was error')),
]
