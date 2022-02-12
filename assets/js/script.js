/* Palavras reservadas para se criar variaveis no Js
var = variavel de escopo global.
let = variavel de escopo local - costuma ser a mais utilizada.
const = variavel de escopo global, porém não tem o seu valor alterado.
*/
/*podemos acessar o DOM-Document Object Model

por Tag: getElementByTagName()
por Id: getElementById()
por Nome: getElementsByNome()
por Classe: getElementsByClassName()
por Seletor: querySelecto() - Comumente mais utilizado
*/

let nome = window.document.getElementById("nome")
let email =document.querySelector("#email") /*# para Id e . para Class*/
let assunto = document.querySelector("#assunto")
let nomeOk = false
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector("#mapa")

nome.style.width = "100%"
email.style.width = "100%"

function validaNome(){
    let txtNome = document.querySelector("#txtNome")

    if (nome.value.length < 3){
        txtNome.innerHTML = 'Nome invalido'
        txtNome.style.color = "red"
    }else{
        txtNome.innerHTML = "Nome valido"
        txtNome.style.color = "green"
        nomeOk = true
    }
}
function validaEmail(){
    let txtEmail = document.querySelector("#txtEmail")

    if (email.value.indexOf("@")== -1 || email.value.indexOf(".") == -1) {
        txtEmail.innerHTML = "Email invalido"
        txtEmail.style.color = "red"
    }else{
        txtEmail.innerHTML = "Email valido"
        txtEmail.style.color = "green"
        emailOk = true
    }
}
function validaAssunto(){
    let txtAssunto = document.querySelector("#txtAssunto")
    if(assunto.value.length >= 100){
        txtAssunto.innerHTML = "texto é muito grande, digite até 100 caracteres"
        txtAssunto.style.backgraunColor = "red"
        txtAssunto.style.display = "block"
    }else{
        txtAssunto.style.display = "none"
        assuntoOk = true
    }

}
function enviar(){
    if(nomeOk == true && emailOk == ture && assuntoOk == true){
        alert("fomrulario enviado!")
    }else{
        alert("Preencha o formulario!")
    }
}
function  mapaZoom(){

    mapa.style.width = "400px"
    mapa.style.height = "300px"
}
function  mapaNormal(){

    mapa.style.width = "290px"
    mapa.style.height = "200px"
}