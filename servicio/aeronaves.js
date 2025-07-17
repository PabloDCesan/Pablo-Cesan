import { validarAeronave } from './validaciones/aeronaveValidador.js';
import CalculadorDistancia from './alertas/calculadorDistancia.js';
import AeronaveDAO from '../model/DAO/models/aeronave.js';

class ServicioAeronaves {
  async ingresar(data) {
    if (!validarAeronave(data)) {
      throw new Error('datos no válidos');
    }

    const aeronaves = AeronaveDAO.obtenerTodos();
    const existente = AeronaveDAO.obtenerPorId(data.id);

    // Guardar o actualizar primero
    if (existente) {
      AeronaveDAO.actualizar(data);
    } else {
      AeronaveDAO.guardar(data);
    }

    // Obtener la lista actualizada para el cálculo de alertas, excluyendo la propia aeronave
    const aeronavesActualizadas = AeronaveDAO.obtenerTodos();
    const alerta = CalculadorDistancia.verificarProximidad(
      data,
      aeronavesActualizadas.filter(a => a.id !== data.id)
    );

    if (alerta) {
      console.log('PELIGRO DE COLISION');
      return { msg: 'PELIGRO DE COLISION' };
    }

    return { msg: 'Vuelo almacenado exitosamente' };
  }

  async listar() {
    return AeronaveDAO.obtenerTodos();
  }
}

export default ServicioAeronaves;