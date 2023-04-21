import { expect, afterEach } from 'vitest';
import { cleanup } from '../utils/test-utils';
import matchers from '@testing-library/jest-dom/matchers';
import { server } from '../mocks/server';

// Establish API mocking before all tests.
beforeAll(() => server.listen());
// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => {
    server.resetHandlers()
     cleanup();
});
// Clean up after the tests are finished.
afterAll(() => server.close());

expect.extend(matchers);

afterEach(() => {
  cleanup();
});
