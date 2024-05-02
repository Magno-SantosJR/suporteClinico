const formular = document.querySelector(".formulario");
const buton = document.querySelector(".button");
const inicio = document.querySelector(".inicio");
const footer = document.querySelector(".footer");
const form = document.getElementById("form");
const forms = document.getElementById("forms");
const voltar = document.querySelector(".buttonVoltar");

//clicou no botão embaixo da foto é direcionado ao formulário
form.addEventListener('click', function formulario() {
    //adiciona a classe "mostrar" ao formulário
    formular.classList.add("mostrar");
    //adiciona a classe "esconder" 
    inicio.classList.add("esconder");
    buton.classList.add("esconder");
    buton.classList.remove("button");    
    footer.classList.add("esconder");
});

forms.addEventListener('click', function formularios() {
    console.log("clicou 2");
    formular.classList.add("mostrar");
    inicio.classList.add("esconder");
    buton.classList.add("esconder");
    buton.classList.remove("button");    
    footer.classList.add("esconder");
});

voltar.addEventListener('click', function voltar() {
    console.log("clicou 3");
    formular.classList.remove("mostrar");
    inicio.classList.remove("esconder");
    buton.classList.remove("esconder");
    buton.classList.add("button");
    footer.classList.remove("esconder");
})

const isValidData = (data) =>{

    //Se houver algum dado errado, ele vira false
    let validate = true

    //Expressões de delimitação de caracteres
    const isAlpha = /^[a-zA-Z\s]+$/
    const isNumeric = /^[0-9]+$/

    //Validar todos os campos do fomulário
    if(!(isAlpha.test(data.nome))){
        validate = false
    }

    if(!(isNumeric.test(data.idade))){
        validate = false
    }

    if(!(isNumeric.test(data.cpf))){
        validate = false
    }

    if(!(isNumeric.test(data.cep))){
        validate = false
    }

    if(!(isNumeric.test(data.telefone))){
        validate = false
    }

    //retorno se é ou não válido o dado
    return validate

}
﻿