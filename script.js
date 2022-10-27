const formulario = document.querySelector("form");

const Inome = document.querySelector(".nome")
const Iemail = document.querySelector(".email")
const Isenha = document.querySelector(".senha")
const Itelefone = document.querySelector(".telefone")

function cadastrar () {
    fetch("http://localhost:8080/cadastrar",
    {
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({
            nome: Inome.value,
            email: Iemail.value,
            senha: Isenha.value,
            telefone: Itelefone.value
        })
    })
    .then(function () {console.log()})
    .catch(function() {console.log()})
}

function limpar() {
    Inome.value = ''
    Iemail.value =''
    Isenha.value = ''
    Itelefone.value = ''
}

formulario.addEventListener('submit', function (event) {
    event.preventDefault();
    cadastrar();
    limpar();
});

