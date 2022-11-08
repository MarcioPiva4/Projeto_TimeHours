let contatoLi = document.getElementById("li");
let contatoBox = document.querySelector(".Box_Contato");

contatoLi.addEventListener("mouseenter", () => {
  contatoBox.classList.add("visivel");
});

contatoLi.addEventListener("mouseleave", () => {
  contatoBox.classList.remove("visivel");
});


contatoLi.addEventListener("touchstart", () => {
  contatoBox.classList.toggle("visivel")
})