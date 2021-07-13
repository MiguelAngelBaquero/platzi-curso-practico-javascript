function calcularMediaArmonica(lista) {
  let sumaDividendo = 0;
  lista.forEach((element) => {
    sumaDividendo += 1 / element;
  });
  return lista.length / sumaDividendo;
}

console.info(calcularMediaArmonica([2, 3, 7, 10, 9]));
