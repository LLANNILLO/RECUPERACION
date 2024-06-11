// helper.js

// Función para guardar datos en sessionStorage
function saveToSessionStorage(key, data) {
  sessionStorage.setItem(key, JSON.stringify(data));
}

// Función para recuperar datos de sessionStorage
function getFromSessionStorage(key) {
  const data = sessionStorage.getItem(key);
  return data ? JSON.parse(data) : null;
}

// Función para añadir un nuevo elemento a sessionStorage
function addToSessionStorage(key, newItem) {
  let items = getFromSessionStorage(key) || [];
  items.push(newItem);
  saveToSessionStorage(key, items);
}

// Función para deserializar objetos Electrodomestico
function deserializeElectrodomestico(item) {
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

function deserializeElectrodomesticos(data) {
  return data.map(deserializeElectrodomestico);
}
