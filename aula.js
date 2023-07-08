var nome = document.querySelector('#nome')
var capital = document.querySelector('#investimento')
var percentual = document.querySelector('#percentual')

function validar(){
    if( nome.value === "" ){
        alert("Por favor preencher o campo nome!")
    }
    if( capital.value === "" ){
        alert('Por Favor digite a quantidade de dias trabalhos!')
    }
    if( percentual.value === "" ){
        alert( "Por favor digite o valor da diária" )
    }
    calcular()
}

function calcular(){
    var calculoDias = (capital.value * percentual.value) / 100
    alert(calculoDias)
}