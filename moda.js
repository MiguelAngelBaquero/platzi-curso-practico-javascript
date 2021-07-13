console.log(calcularModa([1, 2, 3, 1, 2, 3, 4, 2, 2, 2, 1]));

function calcularModa(lista) {
  const listaCount = {};
  //colocar cada elemento de un array en un JSON las veces que se repita
  lista.map((element) => {
    if (listaCount[element]) {
      listaCount[element] += 1;
    } else {
      listaCount[element] = 1;
    }
  });
  // volver a  colocar valores resultantes en un array de forma ordenada
  const listaArray = Object.entries(listaCount).sort(
    (primerElemento, segundoElemento) => primerElemento[1] - segundoElemento[1]
  );
  return listaArray[listaArray.length - 1];
}
