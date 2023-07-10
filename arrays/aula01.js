var listaNome = ['Maria', 'Ana', 'Xivier', 'Ana Maria', 'Alberto', 'Cleuza', 'Sebastião'];
var listaNumeros = [4, 2, 5, 1, 3];

listaNumeros.sort(function(a, b) {
  return a - b;
});
console.log(listaNumeros);

listaNome.sort(function (a, b) {
  return a.localeCompare(b);
});

// console.log(listaNome)