var nome = document.querySelector('#nome')
var idade = document.querySelector('#email')
var sexo = document.querySelector('#sexo')

const cadastrar = document.querySelector("button")
cadastrar.addEventListener("click", validar, false);

function validar(e){
    e.preventDefault();
    if( nome.value === ""){
        alert('Por favor digite o nome!')
    }else if( idade.value === ""){
        alert('Por valor digite seu email!')
    }else if( sexo.value === "selecionar"){
        alert('Por favor selecionar um sexo!')
    }else{
        alert('Cadastrado com sucesso!')
        limparCampos()
    }
}
function limparCampos(){
    nome.value = "";
    idade.value = "";
    sexo.value = "selecionar";
}