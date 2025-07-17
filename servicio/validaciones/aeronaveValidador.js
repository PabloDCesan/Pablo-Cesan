export function validarAeronave({ id, xa, ya, za }) {
    const regexId = /^[A-Z]{3}\d{3}$/;
    return (
      typeof id === 'string' &&
      regexId.test(id) &&
      typeof xa === 'number' &&
      typeof ya === 'number' &&
      typeof za === 'number'
    );
  }  