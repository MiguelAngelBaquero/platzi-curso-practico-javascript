function calcularMediaAritmetica(lista) {
  const sumaLista = lista.reduce(
    (valorAcumulado = 0, nuevoElemento) => valorAcumulado + nuevoElemento
  );
  const promedioLista = sumaLista / lista.length;
  return promedioLista;
}

function esPar(numero) {
  if (numero % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

const ordenarLista = (lista) =>
  lista.sort(
    (primerElemento, segundoElemento) => primerElemento - segundoElemento
  );

function calcularMediana(listaDesordenada) {
  const listaOrdenada = ordenarLista(listaDesordenada);
  const mitadLista = parseInt(listaOrdenada.length / 2);
  let mediana;
  if (esPar(listaOrdenada.length)) {
    const elemento1 = listaOrdenada[mitadLista - 1];
    const elemento2 = listaOrdenada[mitadLista];
    const promedio1y2 = calcularMediaAritmetica([elemento1, elemento2]);
    mediana = promedio1y2;
  } else {
    mediana = listaOrdenada[mitadLista];
  }
  return mediana;
}

console.info(calcularMediana([100, 700, 200, 500, 400, 133, 400000000]));
