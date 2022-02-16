function calcularPrecioConDescuento(precio, descuento) {
  const porcentajePrecioConDescuento = 100 - descuento;
  const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

  return precioConDescuento;
}

function onClickButtonPriceDiscount() {
  const precio = document.getElementById("InputPrice").value;
  const descuento = document.getElementById("InputDiscount").value;

  const precioConDescuento = calcularPrecioConDescuento(precio, descuento);

  const resultP = document.getElementById("ResultP");

  resultP.innerText = `El precio con descuento es: $${precioConDescuento}`;
}
