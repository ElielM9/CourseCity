// Variables
// Nav
const hamburguer = document.querySelector(`.hamburguer`);
// Carrito
const cart = document.querySelector(`#cart`);
const listaCursos = document.querySelector(`#lista-cursos`);
const contenedorCart = document.querySelector(`#lista-carrito tbody`);
const vaciarCartBtn = document.querySelector(`#vaciar-carrito`);
let articulosCarrito = [];

document.addEventListener(`DOMContentLoaded`, eventListeners);

function eventListeners() {
  /* Al dar CLICK en el boton `hamburguer`. alterna la clase `activo` en el `nav`. Se usa para mostrar y ocultar la nav*/
  hamburguer.addEventListener(`click`, () => {
    const nav = document.querySelector(`.header__barra .nav`);

    nav.classList.toggle(`activo`);
  });

  // Dar CLICK en agregar carrito manda a llamar a la funcion agregarCarrito

  /* La línea `listaCursos.addEventListener(`click`, agregarCurso);` añade un evento en el elemento
 `listaCursos`. Dar CLICK en `listaCursos` llama a la funcion `agregarCurso`*/
  listaCursos.addEventListener(`click`, agregarCurso);

  /* La línea `cart.addEventListener(`click`, eliminarCurso);` añade un evento en el elemento `cart`. 
  Dar CLICK en `cart`, llama a la funcion `eliminarCurso`. */
  cart.addEventListener(`click`, eliminarCurso);

  /* Esta línea añade un evento al elemento vaciarCartBtn`. 
  Dar CLICK a este elemento ejecuta el código dentro de la arrow function y vacía el carrito*/
  vaciarCartBtn.addEventListener(`click`, () => {
    articulosCarrito = []; // Resetear el arreglo
    cleanHTML();
  });
}

// Funciones

/**
 * La funcion `agregarCurso` se usa para añadir un curso al carrito de compras cuando se le da CLICK al boton con la clase
 * `agregar-carrito`.
 * @param e - El parametro `e` es un objeto de evento que se pasa a la funcion `agregarCurso`.
 * Normalmente se usa para acceder a información sobre el evento que desencadenó la función, como el elemento de destino en el que se hizo CLICK. En este caso, la función se está utilizando como un controlador de eventos para un CLICK
 */
function agregarCurso(e) {
  e.preventDefault();

  if (e.target.classList.contains(`agregar-carrito`)) {
    const cursoSeleccionado = e.target.parentElement.parentElement;
    // console.log(cursoSeleccionado);

    leerDatosCurso(cursoSeleccionado);
  }
}

/**
 * La funcion `leerDatosCurso` añade un curso al carrito de compras y actualiza la cantidad si el curso ya existe en el carrito.
 * @param curso - El parametro `curso` es una referencia a un elemento HTML que representa un curso.
 */
function leerDatosCurso(curso) {
  // console.log(curso);

  /* Crea un objeto llamado `infoCurso` que contiene información sobre el curso seleccionado. Utiliza el método `querySelector` para seleccionar elementos específicos dentro del elemento `curso
  y recuperar sus valores. */
  const infoCurso = {
    imagen: curso.querySelector(`.curso__img`).src,
    titulo: curso.querySelector(`.curso__nombre`).textContent,
    precio: curso.querySelector(`.curso__precio`).textContent,
    id: curso.querySelector(`a`).getAttribute(`data-id`),
    cantidad: 1,
  };

  // console.log(infoCurso);

  /* Comprueba si un curso existe en el carrito. Itera sobre el array `articulosCarrito` y comprueba si algún curso tiene el mismo id que el `infoCurso` que se está agregado. Si existe un curso con el mismo id, la variable `existe` será true, de lo contrario será false. */
  const existe = articulosCarrito.some((curso) => curso.id === infoCurso.id);

  /* Revisa si el curso seleccionado ya existe en el carrito. Si existe, incrementa la cantidad del curso en 1. Si no, añade el curso al array del carrito de compras `articulosCarrito`. */
  if (existe) {
    const cursos = articulosCarrito.map((curso) => {
      if (curso.id == infoCurso.id) {
        curso.cantidad++;

        // Retorna el objeto actualizado
        return curso;
      } else {
        // Retorna los no duplicados
        return curso;
      }
    });
    articulosCarrito = [...cursos];
  }

  if (!existe) {
    // Agrega elementos al arreglo `articulosCarrito`
    articulosCarrito = [...articulosCarrito, infoCurso];
  }

  //   console.log(articulosCarrito);

  shoppingCartHTML();
}

/**
 * La funcion `eliminarCurso` se usa para eliminar un curso del carrito de compras filtrando el curso con el id especificado en el arreglo `articulosCarrito`.
 * @param e - El parametro `e` es un objeto de evento que se pasa a la función `eliminarCurso`. Se utiliza normalmente para acceder a la información sobre el evento que desencadenó la función,
 * como elelemento objetivo o cualquier dato asociado con el evento. En este caso, la función utiliza `e` para
 * prevenir
 */
function eliminarCurso(e) {
  e.preventDefault();

  if (e.target.classList.contains(`borrar-curso`)) {
    // e.target.parentElement.parentElement.remove();
    const cursoId = e.target.getAttribute(`data-id`);

    // Eliminar del arreglo del carrito
    articulosCarrito = articulosCarrito.filter((curso) => curso.id !== cursoId);
    console.log(articulosCarrito);
    shoppingCartHTML();
  }
}

/**
 * La funcion `shoppingCartHTML()` genera código HTML para el carrito de compras basado en los elementos del array `articulosCarrito`.
 */
function shoppingCartHTML() {
  /* La funcion cleanHTML se ejecuta antes de generar el HTML del carrito para limpiar el HTML anterior antes de añadir el nuevo contenido.*/
  cleanHTML();

  // Recorre el carrito y genera el HTML
  /* Itera sobre cada elemento del array `articulosCarrito`. forEach, ejecuta el código dentro de la arrow function. En este caso está generando código HTML para cada elemento del carrito de compras y lo añade al elemento `contenedorCart`. */
  articulosCarrito.forEach((curso) => {
    const { imagen, titulo, precio, cantidad, id } = curso;
    const row = document.createElement(`tr`);
    row.innerHTML = `
      <td>
       <img src="${imagen}"/>
      </td>
      <td>
        ${titulo}
      </td>
      <td>
        ${precio}
      </td>
      <td>
        ${cantidad}
      </td>
      <td>
        <a href="#" class="borrar-curso" data-id="${id}">X</a>
      </td>
      `;

    /* Añade el html generado al elemento `contenedorCart`. Significa que se añadirá como elemento hijo de `contenedorCart` normalmente se añade como un tbody */
    contenedorCart.appendChild(row);
  });
}

/**
 * La funcion cleanHTML elimina todos los elementos hijo del elemento `contenedorCart`.
 */
function cleanHTML() {
  // Forma lenta
  // contenedorCart.innerHTML = ``;
  while (contenedorCart.firstChild) {
    contenedorCart.removeChild(contenedorCart.firstChild);
  }
}
