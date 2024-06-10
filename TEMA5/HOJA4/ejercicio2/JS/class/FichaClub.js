class FichaClub {
  constructor(numeroSocio, nombreSocio, deportes) {
    this.numeroSocio = numeroSocio;
    this.nombreSocio = nombreSocio;
    this.tarifaBase = 30;
    this.deportes = deportes;
  }

  // Funcion para retornar el total de la tarifa
  calculoTarifa() {
    //cada modalidad extra son 6€ más (no especificado en el ejercicio)
    let plusPorModalidades = this.deportes.length * 6;

    this.tarifa += plusPorModalidades;
    return this.tarifa;
  }

  // Funcion para visualizar la informacion del cliente
  toString() {
    let contenido = `Nombre socio: ${this.nombreSocio},
    Nº: ${this.numeroSocio},
    Tarifa mensual: ${this.calculoTarifa()},
    Modalidades suscritas:\n
    ${this.deportes.forEach((modalidad) => {
      return `${modalidad}\n`;
    })}
    `;
    return contenido;
  }
}
