const precioOriginal = 120;
const descuento = 18;

function calcularPrecioConDescuento(precio, descuento) {
  const precioConDescuento = precio - (precio * descuento) / 100;
  const resultP = document.getElementById("ResultP");
  resultP.textContent = `El precio con descuento es de $${precioConDescuento}`;
}

function activarCalculoDescuento() {
  const inputPrice = parseFloat(document.getElementById("InputPrice").value);
  const inputDiscount = parseFloat(
    document.getElementById("InputDiscount").value
  );
  calcularPrecioConDescuento(inputPrice, inputDiscount);
}
