let nome = document.getElementById('nome')
let email = document.querySelector('#email')
let mensagem = document.querySelector('#mensagem')
let  mapa = document.querySelector('#mapa')
let nomeOk = false
let emailOk = false
let mensagemOk = false


nome.style.width = '100%'
email.style.width = '100%'

function validaNome(){
let txtNome = document.querySelector('#txtNome')

    if (nome.value.length < 3){
       txtNome.innerHTML = 'Nome inválido!'
       txtNome.style.color = 'red'
    } else {
      txt.innerHTML = 'Nome válido!'
    txtNome.style.color = 'green'
    nomeOk = true
    }
}

function validaEmail(){
    let txtEmail = document.querySelector('#txtEmail')

    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1){
        txtEmail.innerHTML = 'Email inválido!'
        txtEmail.style.color = 'red'
    } else{
        txtEmail.innerHTML = 'Email válido!'
        txtEmail.style.color = 'green'
        emailOk = true
    }
}

function validaMensagem(){
    let txtMensagem = document.querySelector('#txtMensagem')

    if(mensagem.value.length >=100){
        txtMensagem.innerHTML = 'Max = 100 caracteres'
        txtMensagem.style.color = 'red'
        txtMensagem.style.display = 'block'
    } else{
        txtMensagem.style.display = 'none'
        mensagemOk = true
    }
}

function enviar (){
    if(nomeOk == true && emailOk == true && mensagemOk == true){
        alert('Formulário enviado!')
    } else {
        alert('Preencha o formulário corretamente!')
    }
}

function mapaZoom (){
mapa.style.length = '800px'
mapa.style.width = '600px'
}

function mapaNormal(){
    mapa.style.length = '500px'
    mapa.style.width = '350px'
}