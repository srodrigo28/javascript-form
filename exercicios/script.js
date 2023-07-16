var valorProduto = document.querySelector("#valor_produto");
var quantidade = document.querySelector("#quantidade");
var campoCalculo = document.querySelector("#resultado");

var f1 = document.querySelector("button");
f1.addEventListener("click", funcao1, false);

function funcao1() {
    campoCalculo.innerHTML = valorProduto.value * quantidade.value;
}