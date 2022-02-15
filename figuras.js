// Cuadrado
console.group("Cuadrados");

// const ladoCuadrado = 5;
// console.log("Los datos del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado) {
  return lado * 4;
}

// console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm");

function areaCuadrado(lado) {
  return lado * lado;
}
// console.log("El area del cuadrado es: " + areaCuadrado + "cm^2");
console.groupEnd();

// Trianngulo
console.group("Triangulos");
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// console.log(
//   "Los lados del triangulo miden: " +
//     ladoTriangulo1 +
//     "cm, " +
//     ladoTriangulo2 +
//     "cm, " +
//     baseTriangulo +
//     "cm"
// );

// const alturaTriangulo = 5.5;
// console.log("La altura del triangulo es de: " + alturaTriangulo + " cm");

function perimetroTriangulo(lado1, lado2, base) {
  return lado1 + lado2 + base;
}
// console.log("El perimetro del triangulo es de: " + perimetroTriangulo + " cm");

function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}
// console.log("El area del triangulo es de: " + areaTriangulo + " cm^2");

console.groupEnd();

// Circulo
console.group("Circulos");

// Radio
// const radioCirculo = 4;
// console.log("El radio del circulo es: " + radioCirculo + "cm");

// Diametro
function diametroCirculo(radio) {
  return radio * 2;
}
// console.log("El diametro del circulo es: " + diametroCirculo + "cm");

// PI
const PI = Math.PI;
console.log("PI es: " + PI);

// Circunferencia
function perimetroCirculo(radio) {
  return diametroCirculo(radio) * PI;
}
// console.log("El perimetro del circulo es: " + perimetroCirculo + "cm");

// Area
function areaCirculo(radio) {
  return radio * radio * PI;
}
// console.log("El area del circulo es: " + areaCirculo + "cm");

console.groupEnd();

function calcularPerimetroCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const perimetro = perimetroCuadrado(value);

  alert(`El perimetro del cuadrado es: ${perimetro}`);
}

function calcularAreaCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const area = areaCuadrado(value);

  alert(`El area del cuadro es: ${area}`);
}

// Triangulo
function calcularPerimetroTriangulo() {
  const lado1 = document.getElementById("Lado1Triangulo").value;
  const lado2 = document.getElementById("Lado2Triangulo").value;
  const base = document.getElementById("BaseTriangulo").value;

  const perimetro = perimetroTriangulo(lado1, lado2, base);

  alert(`El perimetro del triangulo es: ${perimetro}`);
}

function calcularAreaTriangulo() {
  const base = document.getElementById("BaseTriangulo").value;
  const altura = document.getElementById("AlturaTriangulo").value;

  const area = areaTriangulo(base, altura);

  alert(`El area del triangulo es: ${area}`);
}

// CIRCULO
function calcularPerimetroCirculo() {
  const radio = document.getElementById("RadioCirculo").value;

  const perimetro = perimetroCirculo(radio);

  alert(`El perimetro del circulo es: ${perimetro}`);
}

function calcularAreaCirculo() {
  const radio = document.getElementById("RadioCirculo").value;

  const area = areaCirculo(radio);

  alert(`El area del circulo es: ${area}`);
}
