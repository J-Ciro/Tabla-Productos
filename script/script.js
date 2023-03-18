const containerCards = document.querySelector(".table__content");
const containerForm = document.querySelector(".button_actualizar");

let productos = [];

function datos() {
  let nombre = document.getElementById("nombre_producto").value;
  let precio = document.getElementById("precio_producto").value;
  let cantidad = document.getElementById("cantidad_producto").value;
  let categoria = document.getElementById("categoria_producto").value;

  productos.push({
    nombre: `${nombre}`,
    precio: `${precio}`,
    cantidad: `${cantidad}`,
    categoria: `${categoria}`,
  });

  console.log(productos);
  mostrarDatos(containerCards, productos);
}

const mostrarDatos = (container, listaProductos) => {
  container.innerHTML = "";

  listaProductos.forEach((producto, index) => {
    console.log(index);
    container.innerHTML += `
    <tbody>
    <tr id="${index}">
      <td >${index}</td>
      <td>${producto.nombre}</td>
      <td>${producto.precio}</td>
      <td>${producto.cantidad}</td>
      <td>${producto.categoria}</td>
      <td><button type="button" onclick="eliminar(${index})">Eliminar</button></td>
      <td><button type="button" onclick="actualizar(${index})" id="actualizar">Actualizar</button></td>
    </tr>
    </tbody>
    `;
  });
};

function eliminar(indice) {
  const productoEliminar = document.getElementById(indice);
  productoEliminar.remove();
  productos.splice(indice, 1);
  console.log(productos);

  mostrarDatos(containerCards, productos);
}

function actualizar(indice) {
  alert("Vas a modificar el prodcuto con ID: " + indice);

  document.getElementById(
    "nombre_producto"
  ).value = `${productos[indice].nombre}`;
  document.getElementById(
    "precio_producto"
  ).value = `${productos[indice].precio}`;
  document.getElementById(
    "cantidad_producto"
  ).value = `${productos[indice].cantidad}`;
  document.getElementById(
    "categoria_producto"
  ).value = `${productos[indice].categoria}`;
  mostrarDatos(containerCards, productos);

  containerForm.innerHTML = "";
  const but = document.createElement("section");

  but.innerHTML = `<button type="button" id="actualizar_datos" onclick="actualizarDatos(${indice});">Actualizar Datos</button>`;
  containerForm.appendChild(but);
}

function actualizarDatos(indice) {
  nombre = document.getElementById("nombre_producto").value;
  precio = document.getElementById("precio_producto").value;
  cantidad = document.getElementById("cantidad_producto").value;
  categoria = document.getElementById("categoria_producto").value;

  productos[indice] = {
    nombre: `${nombre}`,
    precio: `${precio}`,
    cantidad: `${cantidad}`,
    categoria: `${categoria}`,
  };
  mostrarDatos(containerCards, productos);
}
