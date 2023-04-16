declare module 'connect-pause' {
  import { RequestHandler } from 'express';

  function pause(milliseconds: number): RequestHandler;

  export = pause;
}
