document.getElementById("button").addEventListener("click", function (event) {
  event.preventDefault();
  const value1 = parseFloat(document.getElementById("value1").value);
  const currency = document.getElementById("currency").value; //moneda a la que convertir
  let conversion;

  switch (currency) {
    case "CHF":
      conversion = 0.95;
      break;
    case "USD":
      conversion = 1.1;
      break;
    case "GBP":
      conversion = 0.85;
      break;
    case "JPY":
      conversion = 130;
      break;
    case "AUD":
      conversion = 1.5;
      break;
    case "CAD":
      conversion = 1.4;
      break;
    case "CNY":
      conversion = 7.5;
      break;
    case "INR":
      conversion = 80;
      break;
    case "RUB":
      conversion = 75;
      break;
    case "BRL":
      conversion = 5.5;
      break;
    case "MXN":
      conversion = 22;
      break;
    case "KRW":
      conversion = 1300;
      break;
    default:
      conversion = 1;
  }

  const convertedValue = value1 * conversion;
  document.getElementById("value2").value = convertedValue.toFixed(2);
});

let clicked = false;
//ABRIR MENU FUNCION
function openMenu() {
  const menu = document.getElementById("menu");
  const paths = menu.querySelectorAll("path");

  // paths[0] NO se toca (es el invisible)
  paths[1].setAttribute("d", "M18 6L6 18");
  paths[2].setAttribute("d", "M6 6l12 12");
  paths[3].setAttribute("d", "M0 0"); // ocultar la tercera línea


  clicked = true;
  const navBar = document.getElementById("navBar");
  navBar.style.display = "block";
}

//CERRAR MENU FUNCION
function closeMenu() {
  const menu = document.getElementById("menu");
  const paths = menu.querySelectorAll("path");


  // Restaurar menú original
  paths[1].setAttribute("d", "M4 6l16 0");
  paths[2].setAttribute("d", "M4 12l16 0");
  paths[3].setAttribute("d", "M4 18l16 0");
  menu.setAttribute("stroke", "currentColor");

  clicked = false;
  const navBar = document.getElementById("navBar");
  navBar.style.display = "none";
}

document.getElementById("menu").addEventListener("click", function () {
  if (!clicked) {
    openMenu();
  } else if (clicked) {
    closeMenu();
  }
});
