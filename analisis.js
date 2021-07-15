//se calcula mediana general
const salariosEc = ecuador.map((persona) => persona.salary);

//Utils or helpers
const salarioEcSorted = salariosEc.sort(
  (salaryA, salaryB) => salaryA - salaryB
);

//Utils or helpers
const esPar = (numero) => numero % 2 === 0;

//calculadora de medianas
function mediaSalarios(lista) {
  const mitad = parseInt(lista.length / 2);
  if (esPar(lista.length)) {
    const personaMitad1 = lista[mitad - 1];
    const personaMitad2 = lista[mitad];
    const mediana = calcularMediaAritmetica([personaMitad1, personaMitad2]);
    return mediana;
  } else {
    const personaMitad = lista[mitad];
    return personaMitad;
  }
}

function calcularMediaAritmetica(lista) {
  const sumaLista = lista.reduce(
    (valorAcumulado = 0, nuevoElemento) => valorAcumulado + nuevoElemento
  );
  const promedioLista = sumaLista / lista.length;
  return promedioLista;
}

const medianaGeneralEc = mediaSalarios(salarioEcSorted);

//mediana del top 10%
const spliceStart = parseInt(salarioEcSorted.length * (90 / 100));
const spliceCount = salarioEcSorted.length - spliceStart;

const salariosEcTop10 = salarioEcSorted.splice(spliceStart, spliceCount);

const medianaTop10Ec = mediaSalarios(salariosEcTop10);

console.log(medianaGeneralEc, medianaTop10Ec);
