const r = document.querySelector('#recebido').value
const m = document.querySelector('#motorista').value

recebido = parseFloat(r.replace(",", "."))
motorista = parseFloat(m.replace(",", "."))

const mot = document.querySelector('#motoristaPercentual')
const plat = document.querySelector('#plataformaPercentual')

const plataforma = (recebido - motorista)

let f1 = document.querySelector("button")
f1.addEventListener("click", calcular, false)

function calcular(event) {
    event.preventDefault()

    let motoristaPercentual = ( motorista / recebido ) * 100
    let plataformaPercentual = ( plataforma / recebido ) * 100

    motoristaRec = ('R$ ' + motorista.toFixed(2) + ' Percentual: '
        + motoristaPercentual.toFixed(1) + '%')
    plataformaRec = ('R$ ' + plataforma.toFixed(2) + ' Percentual: '
        + plataformaPercentual.toFixed(1) + '%')

    mot.innerHTML = motoristaRec
    plat.innerHTML = plataformaRec

    console.log(motoristaRec)
    console.log(plataformaRec)
}