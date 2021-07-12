function calcularMediaAritmetica(lista) {
  // let sumaLista = 0;
  // lista.forEach((element) => {
  //   sumaLista += element;
  // });
  const sumaLista = lista.reduce(
    (valorAcumulado = 0, nuevoElemento) => valorAcumulado + nuevoElemento
  );
  const promedioLista = sumaLista / lista.length;
  return promedioLista;
}

console.info(calcularMediaAritmetica([270, 400, 800, 520, 1200]));
