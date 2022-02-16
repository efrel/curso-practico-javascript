function calcularMediaAritmetica(lista) {
  const sumaLista = lista.reduce(function (valorAcumulado = 0, nuevoElemento) {
    return valorAcumulado + nuevoElemento;
  });
  const promedioLista = sumaLista / lista.length;
  return promedioLista;
}

const lista1 = [100, 200, 500, 400000000];

function esPar(numerito) {
  if (numerito % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

function calcularMediana(listNum) {
  let numOrder = listNum.sort(function (a, b) {
    return a - b;
  });

  const mitadLista1 = parseInt(numOrder.length / 2);

  let mediana;

  if (esPar(numOrder.length)) {
    const elemento1 = numOrder[mitadLista1 - 1];
    const elemento2 = numOrder[mitadLista1];

    const promedioElemento1y2 = calcularMediaAritmetica([elemento1, elemento2]);

    mediana = promedioElemento1y2;
  } else {
    mediana = numOrder[mitadLista1];
  }

  return mediana;
}
