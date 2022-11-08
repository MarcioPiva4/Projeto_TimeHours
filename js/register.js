let inpNome = document.getElementById("inpName");
let inpIdade = document.getElementById("inpIdade");
let inpPassword = document.getElementById("inpPassword");
let inpPasswordSegundo = document.getElementById("inpPassword2");

let btn = document.getElementById("btnEnviar");
let btnProximo = document.getElementById("btnProximo");

let mensagem1 = document.getElementById("mensagemErro");
let mensagem2 = document.getElementById("mensagemErro2");
let mensagem3 = document.getElementById("mensagemErro3");

btnProximo.addEventListener("click", () => {
  if (inpNome.value.length < 3 || inpNome.value.length > 45) {
    mensagem1.innerHTML = "[ERRO] min = 3 e max = 45";
    inpNome.style.border = "2px solid red";
  } else {
    inpNome.style.border = "1px solid black";
    mensagem1.innerHTML = "";
  }

  if (
    +inpIdade.value < 18 ||
    inpIdade.value.length < 1 ||
    +inpIdade.value > 100
  ) {
    inpIdade.style.border = "2px solid red";
    mensagem2.innerHTML = "[ERRO] Idade inválida ou campo vazio";
  } else {
    inpIdade.style.border = "1px solid black";
    mensagem2.innerHTML = "";
  }

  if (
    inpPassword.value != inpPasswordSegundo.value ||
    inpPassword.value.length < 3
  ) {
    mensagem3.innerHTML = "[ERRO] Os dois ultimos campos estão diferentes";
    inpPassword.style.border = "2px solid red";
    inpPasswordSegundo.style.border = "2px solid red";
  } else {
    mensagem3.innerHTML = "";
    inpPassword.style.border = "1px solid black";
    inpPasswordSegundo.style.border = "1px solid black";
  }
});
