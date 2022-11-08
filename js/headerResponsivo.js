let hamburguer = document.querySelector(".hamburguer");
let nav = document.querySelector(".nav_List");

hamburguer.addEventListener("click", () => {
  nav.classList.toggle("aparecer");
});

//header com transparencia

let header = document.querySelector(".header");
document.addEventListener("scroll", () => {
  let posição = window.pageYOffset;
  if (posição >= 100) {
    header.style.opacity = "0.6";
  } if(posição < 100) {
    header.style.opacity = "1";
  }
});

header.addEventListener("mouseenter", () => {
  header.style.opacity = "1";
});

header.addEventListener("mouseleave", () => {
  header.style.opacity = "0.6";
});

header.addEventListener("touchstart", () => {
  header.style.opacity = "1"
})
