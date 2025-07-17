const _db = [];

class AeronaveDAO {
  static guardar(aeronave) {
    _db.push(aeronave);
  }

  static actualizar(aeronave) {
    const index = _db.findIndex(a => a.id === aeronave.id);
    if (index !== -1) _db[index] = aeronave;
  }

  static obtenerTodos() {
    return [..._db];
  }

  static obtenerPorId(id) {
    return _db.find(a => a.id === id);
  }
}

export default AeronaveDAO;