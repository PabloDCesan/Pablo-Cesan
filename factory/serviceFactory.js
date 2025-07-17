import ServicioAeronaves from '../servicio/aeronaves.js';

class ServiceFactory {
  static crearServicioAeronaves() {
    return new ServicioAeronaves();
  }
}

export default ServiceFactory;