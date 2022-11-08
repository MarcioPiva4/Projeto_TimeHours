let inpEmail = document.getElementById("inpMail");
let inpPassword = document.getElementById("inpPassword");

let btnProximoLogin = document.getElementById("btnProximoLogin");

let validar = ({ target }) => {
  if (target.value.length > 10 && inpPassword.value.length > 6) {
    btnProximoLogin.removeAttribute("disabled");
  } else {
    btnProximoLogin.setAttribute("disabled", "");
  }
};

inpEmail.addEventListener("input", validar);
inpPassword.addEventListener("input", validar);
