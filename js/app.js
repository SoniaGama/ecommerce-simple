function drawProducts(data) {
  let products = data.products;
  let productsContainer = document.getElementById("products-container");
  products.forEach((product, index) => {
    let productHTML = createProductHTML(product);
    productsContainer.appendChild(productHTML);
  });
}

function createProductHTML(product) {
  let template = `
    <h3>${product.title}</h3>
    <img src='${product.imageUrl}' alt='${product.description}'/>
    <p>${product.description}</p>
    <button data-product-id=${product.id}
      onclick="addToCart(${product.id})"
      class='btn btn-primary'>
        Agregar a carrito
      </button>
      <button data-product-id=${product.id}
        onclick="removeFromCart(${product.id})"
        class='btn btn-primary'>
          Quitar del carrito
        </button>
    <hr/>
  `;
  let productContainer = document.createElement("div");
  productContainer.className = "col text-center";
  productContainer.innerHTML = template;
  return productContainer;
}

drawProducts(data);

function addToCart(id) {
  let carritoStorage = localStorage.getItem("cart");
  let cartIds;
  if (carritoStorage === null) {
    cartIds = [];
  } else {
    cartIds = JSON.parse(carritoStorage);
  }
  cartIds.push(id);
  console.log(cartIds);
  localStorage.setItem("cart", JSON.stringify(cartIds));
  /* cuando agrego a carrito, tengo que:
  1) Incrementar en uno mi contador del menu
  2) Guardar mi producto en algun lugar
  3) Cambiar xel boton de agregar a carrito
  por quitar del carrito
  */
}

function removeFromCart(id) {
  /* cuando agrego a carrito, tengo que:
  1) Decrementar en uno mi contador del menu
  2) Borrar mi producto de algun lugar
  3) Cambiar el boton de quitar del carrito
  por agregar a carrito
  */
  let cartInfo = JSON.parse(localStorage.getItem("cart"));
  let indexOfItemToDelete = cartInfo.indexOf(id);
  cartInfo.splice(indexOfItemToDelete, 1);
  localStorage.setItem("cart", JSON.stringify(cartInfo));
  console.log(localStorage.getItem("cart"));
}

function increaseCounter() {
  /* como accedemos al HTML del contador
  y como lo incrementamos*/
}

function decreaseCounter() {
  /* como accedemos al HTML del contador
  y como lo incrementamos*/
}

function changeButtonStatus(button) {
  /* esta funcion deberia recibir un boton y
  cambiar su estatus
    Si el boton esta en agregar al carrito
      cambia el texto a quitar del carrito
    Y viceversa
  */
}
