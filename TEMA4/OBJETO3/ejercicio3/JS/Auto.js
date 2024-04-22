class Auto {
  constructor(modelo, color, velocidadMaxima) {
    this.modelo = modelo;
    this.color = color;
    this.velocidadMaxima = velocidadMaxima;
    this.velocidad = 0;
    this.encendido = false;
  }

  verVelocidad() {
    return this.velocidad;
  }

  acelerar(velocidad = 10) {
    if (this.encendido) {
      this.velocidad = Math.min(
        this.velocidad + velocidad,
        this.velocidadMaxima
      );
    }
  }

  // Método para frenar el auto
  frenar(velocidad = 10) {
    if (this.encendido) {
      this.velocidad = Math.max(this.velocidad - velocidad, 0);
    }
  }

  arrancar() {
    this.encendido = !this.encendido;
    if (!this.encendido) {
      this.velocidad = 0;
    }
  }
}
