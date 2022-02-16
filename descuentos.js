function calcularPrecioConDescuento(precio, descuento) {
  const porcentajePrecioConDescuento = 100 - descuento;
  const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

  return precioConDescuento;
}

const cupones = [
  {
    nombre: "P4pa",
    descuento: 15,
  },
  {
    nombre: "0ferta",
    descuento: 30,
  },
  {
    nombre: "descuento",
    descuento: 25,
  },
];

function onClickButtonPriceDiscount() {
  const precioV = document.getElementById("InputPrice").value;
  const cuponV = document.getElementById("InputCupon").value;

  const isCouponValueValid = function (cupon) {
    return cupon.nombre === cuponV;
  };

  const userCoupon = cupones.find(isCouponValueValid);

  if (!userCoupon) {
    alert("El cupón " + cuponV + " no es válido");
  } else {
    const descuento = userCoupon.descuento;
    const precioConDescuento = calcularPrecioConDescuento(precioV, descuento);

    const resultP = document.getElementById("ResultP");
    resultP.innerText = `El precio con descuento es: $${precioConDescuento}`;
  }
}
