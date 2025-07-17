class CalculadorDistancia {
    static calcular(a, b) {
      return Math.sqrt(
        Math.pow(a.xa - b.xa, 2) +
        Math.pow(a.ya - b.ya, 2) +
        Math.pow(a.za - b.za, 2)
      );
    }
  
    static verificarProximidad(nueva, lista) {
      if (lista.length < 1) return false;
  
      return lista.some(a => this.calcular(a, nueva) < 500);
    }
  }
  
  export default CalculadorDistancia;