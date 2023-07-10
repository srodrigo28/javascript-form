var recebido = 22
var motorista = 15
var plataforma = (recebido - motorista)

var plataformaPercentual = (plataforma / recebido) * 100
var motoristaPercentual = ( motorista / recebido ) * 100

console.log("Valor da corrida total: R$ " + recebido + "\n")
console.log("Plataforma recebel: " + plataformaPercentual.toFixed(2) + "%")
console.log("Motorista recebel: " + motoristaPercentual.toFixed(2) + "%")