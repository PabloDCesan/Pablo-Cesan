import express from 'express';
import cors from 'cors';
import RouterAeronaves from './router/aeronaves.js';

class Server {
  #port;
  #server;

  constructor(port) {
    this.#port = port;
  }

  start() {
    const app = express();
    app.use(cors());
    app.use(express.json());

    app.use('/api/aeronaves', new RouterAeronaves().start());

    this.#server = app.listen(this.#port, () => {
      console.log(`Servidor escuchando en http://localhost:${this.#port}`);
    });
  }
}

export default Server;