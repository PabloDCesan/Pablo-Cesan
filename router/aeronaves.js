import express from 'express';
import Controlador from '../controlador/aeronaves.js';

class Router {
  #controlador;

  constructor() {
    this.#controlador = new Controlador();
  }

  start() {
    const router = express.Router();
    router.post('/', this.#controlador.ingresarOActualizar);
    router.get('/', this.#controlador.listar);
    return router;
  }
}

export default Router;