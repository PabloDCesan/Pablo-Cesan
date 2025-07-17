import ServiceFactory from '../factory/serviceFactory.js';

class Controlador {
  #servicio;

  constructor() {
    this.#servicio = ServiceFactory.crearServicioAeronaves();
  }

  ingresarOActualizar = async (req, res) => {
    try {
      const resultado = await this.#servicio.ingresar(req.body);
      res.status(200).json(resultado);
    } catch (error) {
      res.status(400).json({ errorMsg: error.message });
    }
  };

  listar = async (req, res) => {
    const datos = await this.#servicio.listar();
    res.status(200).json(datos);
  };
}

export default Controlador;
