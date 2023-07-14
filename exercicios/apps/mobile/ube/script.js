const inputCorrida = document.querySelector('#inputCorrida')
const inputRecebido = document.querySelector('#inputRecebido')

const recebido = inputCorrida.value
const motorista = inputRecebido.value

const spanRsCorrida = document.querySelector('#motoristaPercentual')
const spanRsPlataforma = document.querySelector('#plataformaPercentual')

const plataforma = (recebido - motorista)

let button = document.querySelector('button')
button.addEventListener('click', calcular, false)

let motoristaPercentual = ( motorista / recebido ) * 100
let plataformaPercentual = ( plataforma / recebido ) * 100

function calcular(e) {
    e.preventDefault()

    motoristaRec = ( 'R$ ' + motorista + ' Percentual: ' + motoristaPercentual.toFixed(1) + '%' )
    plataformaRec = ( 'R$ ' + plataforma.toFixed(2) + ' Percentual: ' + plataformaPercentual.toFixed(1) + '%' )

    spanRsCorrida.innerHTML = motoristaRec
    spanRsPlataforma.innerHTML = plataformaRec
    
}
