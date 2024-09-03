let switchCtn = document.querySelector("#switch-cnt");
let switchC1 = document.querySelector("#switch-c1");
let switchC2 = document.querySelector("#switch-c2");
let switchCircle = document.querySelectorAll(".switch__circle");
let switchBtn = document.querySelectorAll(".switch-btn");
let aContainer = document.querySelector("#a-container");
let bContainer = document.querySelector("#b-container");
let allButtons = document.querySelectorAll(".submit");

let getButtons = (e) => e.preventDefault()

let changeForm = (e) => {
    switchCtn.classList.add("is-gx");
    setTimeout(function(){
        switchCtn.classList.remove("is-gx");
    }, 1500)

    switchCtn.classList.toggle("is-txr");
    switchCircle[0].classList.toggle("is-txr");
    switchCircle[1].classList.toggle("is-txr");

    switchC1.classList.toggle("is-hidden");
    switchC2.classList.toggle("is-hidden");
    aContainer.classList.toggle("is-txl");
    bContainer.classList.toggle("is-txl");
    bContainer.classList.toggle("is-z200");
}

let mainF = (e) => {
    for (var i = 0; i < allButtons.length; i++)
        allButtons[i].addEventListener("click", getButtons );
    for (var i = 0; i < switchBtn.length; i++)
        switchBtn[i].addEventListener("click", changeForm)
}

window.addEventListener("load", mainF);

// Seleciona os elementos do popup
let popup = document.getElementById("popup");
let popupUnavailable = document.getElementById("popup-unavailable"); // Novo popup para sistema indisponível
let closeBtn = document.querySelectorAll(".close-btn");

// Função para fechar o popup
closeBtn.forEach((btn) => {
    btn.addEventListener("click", function() {
        btn.parentElement.parentElement.style.display = "none";
    });
});

// Fecha o popup ao clicar fora dele
window.addEventListener("click", function(event) {
    if (event.target.classList.contains("popup")) {
        event.target.style.display = "none";
    }
});

// Mostra o popup de "Sistema Indisponível" ao clicar no botão "ENTRAR"
document.querySelector(".form_entrar_button.button.submit").addEventListener("click", function(e) {
    e.preventDefault();
    popupUnavailable.style.display = "flex"; // Mostra o popup de sistema indisponível
});

document.addEventListener("DOMContentLoaded", function() {
    // Seleciona os elementos do popup de senha
    let popupSenha = document.getElementById("popup");
    let closeBtnSenha = document.querySelector("#popup .close-btn");

    // Mostra o popup de senha ao clicar no link "Esqueceu sua senha?"
    document.querySelector(".form__link").addEventListener("click", function(e) {
        e.preventDefault();
        popupSenha.style.display = "flex"; // Mostra o popup de senha
    });

    // Fecha o popup de senha ao clicar no botão de fechar
    closeBtnSenha.addEventListener("click", function() {
        popupSenha.style.display = "none";
    });

    // Fecha o popup de senha ao clicar fora dele
    window.addEventListener("click", function(event) {
        if (event.target == popupSenha) {
            popupSenha.style.display = "none";
        }
    });

    // Seleciona os elementos do popup de cadastro
    let popupRegister = document.getElementById("popup-register");
    let closeBtnRegister = document.querySelector("#popup-register .close-btn");

    // Mostra o popup de cadastro ao clicar no botão "CADASTRAR"
    document.querySelector(".form_cadastrar_button.button.submit").addEventListener("click", function(e) {
        e.preventDefault();
        popupRegister.style.display = "flex"; // Mostra o popup de cadastro
    });

    // Fecha o popup de cadastro ao clicar no botão de fechar
    closeBtnRegister.addEventListener("click", function() {
        popupRegister.style.display = "none";
    });

    // Fecha o popup de cadastro ao clicar fora dele
    window.addEventListener("click", function(event) {
        if (event.target == popupRegister) {
            popupRegister.style.display = "none";
        }
    });
});
