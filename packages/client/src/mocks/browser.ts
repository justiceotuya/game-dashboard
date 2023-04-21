import { setupWorker } from 'msw';
import { db } from './db';
import { handlers } from './handlers'
import { setupServer } from 'msw/lib/node';
// for browser environments
// export const worker = setupServer(...handlers)
// export const worker = setupWorker(...handlers)
// export const worker = setupWorker(...handlers)
export const worker = setupWorker(...db.user.toHandlers('rest', 'http://localhost:8000/'));
