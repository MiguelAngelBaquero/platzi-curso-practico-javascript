const cupones = [
  { cupon: "Liquidacion", descuento: 30 },
  { cupon: "VIP", descuento: 25 },
  { cupon: "Preferencial", descuento: 20 },
  { cupon: "Cliente frecuente", descuento: 15 },
  { cupon: "Cliente normal", descuento: 0 },
];

definirLista(cupones);

function definirLista(listaCupones) {
  let html = `<option value="0">--</option>`;
  listaCupones.forEach((element) => {
    const listaSeleccion = document.getElementById("SelectDiscount");
    html += `<option value="${element.descuento}"> ${element.cupon} </option>`;
    listaSeleccion.innerHTML = html;
  });
}

function calcularPrecioConDescuento(precio, descuento) {
  const precioConDescuento = precio - (precio * descuento) / 100;
  const resultP = document.getElementById("ResultP");
  resultP.textContent = `El precio con descuento es de $${precioConDescuento}`;
}

function activarCalculoDescuento() {
  const inputPrice = parseFloat(document.getElementById("InputPrice").value);
  const inputDiscount = parseFloat(
    document.getElementById("SelectDiscount").value
  );
  console.info(inputDiscount);
  calcularPrecioConDescuento(inputPrice, inputDiscount);
}
