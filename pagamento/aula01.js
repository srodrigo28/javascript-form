var salario = 1553
var inss = (salario * 7) / 100
var fgts = (salario * 11) / 100
var salario_liquido = salario - (inss + fgts)

console.log("Salário R$ " + salario.toFixed(2))
console.log("Inss: R$ " + inss.toFixed(2))
console.log("Fgts: R$ " + fgts.toFixed(2))
console.log("Salário Liquido: R$ " + salario_liquido.toFixed(2))