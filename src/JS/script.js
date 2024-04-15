const formular = document.querySelector(".formulario");
const inicio = document.querySelector(".inicio");
const footer = document.querySelector(".footer");
const form = document.getElementById("form");
const forms = document.getElementById("forms");
const voltar = document.querySelector(".buttonVoltar");

form.addEventListener('click', function formulario() {
    console.log("clicou");
    formular.classList.add("mostrar");
    inicio.classList.add("esconder");
    footer.classList.add("esconder");
});

forms.addEventListener('click', function formularios() {
    console.log("clicou 2");
    formular.classList.add("mostrar");
    inicio.classList.add("esconder");
    footer.classList.add("esconder");
});

voltar.addEventListener('click', function voltar() {
    console.log("clicou 3");
    formular.classList.remove("mostrar");
    inicio.classList.remove("esconder");
    footer.classList.remove("esconder");
})
