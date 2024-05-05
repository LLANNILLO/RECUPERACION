window.onload = () => {
  const cart = document.querySelector(".uno");
  const shoppingCart = document.getElementById("shoppingCart");
  const user = document.querySelector(".dos");

  user.addEventListener("click", () => {
    user.children[1].style.display = "block";
  });
  const overlay = document.getElementById("overlay"); // Selecciona el overlay

  var closeButton = shoppingCart.querySelector(".close");

  cart.addEventListener("click", () => {
    shoppingCart.classList.add("show");
    overlay.classList.add("show"); // Aplica la clase show al overlay
  });

  closeButton.addEventListener("click", () => {
    if (shoppingCart.classList.contains("show")) {
      shoppingCart.classList.remove("show");
      overlay.classList.remove("show"); // Remueve la clase show del overlay
    }
  });

  const options = document.querySelector(".options");
  const search = document.querySelector(".product_search");
  const spanSearch = document.querySelector(".product_search form span");
  const inputSearch = document.querySelector(".product_search form input");

  var hasScrolled = window.scroll > 0;
  // Agrega un listener para el evento de scroll
  window.addEventListener("scroll", function () {
    // Comprueba si el usuario ha realizado el primer scroll
    if (!hasScrolled && window.scrollY > 0) {
      // Cambia los estilos aquí
      // Por ejemplo, cambia el color de fondo del encabezado
      var header = document.querySelector("header");
      header.style.backgroundColor = "var(--blue-evangelion)";
      options.style.display = "none";
      search.classList.remove("start");
      search.classList.add("scrolled");
      hasScrolled = true;
      spanSearch.style.display = "inline-block";
      inputSearch.classList.add("input_first");

      //alteracion del placeholder del input de busqueda
    } else if (hasScrolled && window.scrollY === 0) {
      // Vuelve a los estilos originales cuando el usuario regrese al principio de la página
      var header = document.querySelector("header");
      options.style.display = "flex";
      header.style.backgroundColor = ""; // Establece el color de fondo a su valor por defecto
      search.classList.remove("scrolled");
      search.classList.add("start");
      spanSearch.style.display = "";
      spanSearch.classList.remove("span_search_expand");
      spanSearch.classList.add("span_first");
      inputSearch.style.display = "";

      hasScrolled = false;
    }
  });

  spanSearch.addEventListener("click", () => {
    spanSearch.classList.remove("span_first");
    spanSearch.classList.add("span_search_expand");
    inputSearch.style.display = "block";
    inputSearch.style.width = "100%";
  });
};
