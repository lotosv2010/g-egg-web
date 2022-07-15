import { ServerOptions } from 'vite';
import { VITE_APP_PORT, VITE_APP_OPEN } from '../index';

const createServer = (): ServerOptions => {
  return {
    host: true,
    port: VITE_APP_PORT,
    open: VITE_APP_OPEN,
  };
};

export default createServer;
