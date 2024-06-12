// helper.js

// Función para guardar datos en sessionStorage
function guardarEnSessionStorage(key, data) {
  sessionStorage.setItem(key, JSON.stringify(data));
}

// Función para recuperar datos de sessionStorage
function obtenerDeSessionStorage(key) {
  const data = sessionStorage.getItem(key);
  return data ? JSON.parse(data) : null;
}

// Función para añadir un nuevo elemento a sessionStorage
function anadirASessionStorage(key, newItem) {
  let items = obtenerDeSessionStorage(key) || [];
  items.push(newItem);
  guardarEnSessionStorage(key, items);
}

// Función para deserializar objetos Electrodomestico
function deserializarElectrodomestico(item) {
  if (item.carga !== undefined) {
    return new Lavadora(
      parseInt(item.precioBase),
      item.color,
      item.consumoEnergetico,
      item.peso,
      item.carga
    );
  } else if (item.resolucion !== undefined) {
    return new Television(
      parseInt(item.precioBase),
      item.color,
      item.consumoEnergetico,
      item.peso,
      item.resolucion,
      item.sintonizadorTDT
    );
  } else {
    return new Electrodomestico(
      parseInt(item.precioBase),
      item.color,
      item.consumoEnergetico,
      item.peso
    );
  }
}

function deserializarElectrodomesticos(data) {
  return data.map(deserializarElectrodomestico);
}

function irA(href) {
  window.location.href = href;
}
