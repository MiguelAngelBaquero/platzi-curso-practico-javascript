//Código del cuadrado

//perimetro cuadrado
const perimetroCuadrado = (lado) => lado * 4;

//area cuadrado
const areaCuadrado = (lado) => lado * lado;

//Código del triángulo

//perimetro triangulo
const perimetroTriangulo = (lado1, lado2, base) => lado1 + lado2 + base;

//area triangulo isosceles
const areaTrianguloIsosceles = (base, altura) => (base * altura) / 2;

//area triangulo equilatero
const areaTrianguloEquilatero = (lado) =>
  (Math.sqrt(3) / 4) * Math.pow(lado, 2);

//Código del círculo

//circunferencia
const perimetroCirculo = (radio) => radio * 2 * Math.PI;

//area circulo
const areaCirculo = (radio) => Math.PI * (radio * radio);

//interactuar con HTML
//imprimir perimetro de cuadrado
function calcularPerimetroCuadrado() {
  const inputLado = parseFloat(document.getElementById("InputCuadrado").value);
  const perimetro = perimetroCuadrado(inputLado);
  alert(perimetro);
}

//imprimir area de cuadrado
function calcularAreaCuadrado() {
  const inputLado = parseFloat(document.getElementById("InputCuadrado").value);
  const area = areaCuadrado(inputLado);
  alert(area);
}

//imprimir el perimetro del triangulo
function calcularPerimetroTriangulo() {
  const inputLado1 = parseFloat(
    document.getElementById("InputTrianguloLado1").value
  );
  const inputLado2 = parseFloat(
    document.getElementById("InputTrianguloLado2").value
  );
  const inputBase = parseFloat(
    document.getElementById("InputTrianguloBase").value
  );
  const perimetro = perimetroTriangulo(inputLado1, inputLado2, inputBase);
  alert(perimetro);
}

//definir el tipo de triangulo y calcular su area
function definirTipoTriangulo() {
  const inputLado1 = parseFloat(
    document.getElementById("InputTrianguloLado1").value
  );
  const inputLado2 = parseFloat(
    document.getElementById("InputTrianguloLado2").value
  );
  const inputBase = parseFloat(
    document.getElementById("InputTrianguloBase").value
  );
  if (inputLado1 == inputLado2 && inputLado1 != inputBase) {
    //triangulo isosceles
    const altura = calcularAlturaTriangulo(inputLado1, inputBase);
    const area = areaTrianguloIsosceles(inputBase, altura);
    alert(area);
  } else if (inputLado1 == inputLado2 && inputLado1 == inputBase) {
    //triangulo equilatero
    const area = areaTrianguloEquilatero(inputBase);
    alert(area);
  } else {
    alert(`Los lados del triángulo deben ser iguales`);
  }
}

//calcular altura del triangulo isosceles
function calcularAlturaTriangulo(lado, base) {
  const baseReal = base / 2;
  //l^2 = b^2 + a^2
  //l^2 - b^2 = a^2
  //sqr(l^2 - b^2) = a
  const altura = Math.sqrt(Math.pow(lado, 2) - Math.pow(baseReal, 2));
  return altura;
}

//imprimir el perimetro de un circulo
function calcularPerimetroCirculo() {
  const inputRadio = parseFloat(document.getElementById("InputCiculo").value);
  const perimetro = perimetroCirculo(inputRadio);
  alert(perimetro);
}

//imprimir el perimetro de un circulo
function calcularAreaCirculo() {
  const inputRadio = parseFloat(document.getElementById("InputCiculo").value);
  const area = areaCirculo(inputRadio);
  alert(area);
}
