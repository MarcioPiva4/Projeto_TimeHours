let rotação = 5000,
  aparecendo = 0,
  imagens = document.querySelectorAll(".imgs img"),
  max = imagens.length;

function proximaImage() {
  imagens[aparecendo].classList.remove("selected");

  aparecendo++;

  if (aparecendo >= max) {
    aparecendo = 0;
  }

  imagens[aparecendo].classList.add("selected");
}

function inicio() {
  setInterval(() => {
    proximaImage();
  }, rotação);
}

window.addEventListener("load", inicio);

