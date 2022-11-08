//DOM das imagens que estão a direita
let img1 = document.querySelector(".img1");
let img2 = document.querySelector(".img2");
let img3 = document.querySelector(".img3");

//DOM da descrição
let imgMostrar = document.querySelector(".img_Visivel");
let title = document.querySelector(".titulo_Produto");
let descriçãoLine1 = document.querySelector(".line1_Des");
let descriçãoLine2 = document.querySelector(".line2_Des");
let descriçãoLine3 = document.querySelector(".line3_Des");
let descriçãoLine4 = document.querySelector(".line4_Des");
let descriçãoLine5 = document.querySelector(".line5_Des");
let descriçãoLine6 = document.querySelector(".line6_Des");
let preço = document.querySelector(".line_Preço");
let btn = document.querySelector(".btn_Comprar");

img1.addEventListener("click", () => {
  imgMostrar.src = "./imagens/relogio1_Vender.png";
  title.textContent = "Relógio Mondaine Prateado";
  descriçãoLine1.textContent = "Cor: Prateado";
  descriçãoLine2.textContent = "Marca: Mondaine";
  descriçãoLine3.textContent = "Vidro: Cristal Mineral";
  descriçãoLine4.textContent = "Tipo de Mecanismo: Analógico Simples";
  descriçãoLine6.textContent = "Estado: Novo";
  descriçãoLine5.textContent = "Garantia de 1 ano";
  preço.innerHTML = `Preço: <span class="preço">R$209,99</span>`;
});

img2.addEventListener("click", () => {
  imgMostrar.src = "./imagens/relogio2_Vender.png";
  title.textContent = "Relógio Rolex Daytona/Ouro";
  descriçãoLine1.textContent = "Cor: Dourado";
  descriçãoLine2.textContent = "Marca: Rolex";
  descriçãoLine3.textContent = "Material: Ouro";
  descriçãoLine4.textContent = "Estado: Novo";
  descriçãoLine5.textContent = "Garantia de 1 anos";
  descriçãoLine6.textContent = "APENAS 1 NO ESTOQUE!";
  preço.innerHTML = `Preço: <span class="preço">R$150.000,99</span>`;
});

img3.addEventListener("click", () => {
  imgMostrar.src = "./imagens/relogio3_Vender.png";
  title.textContent = "Hublot Classic Fusion Titan";
  descriçãoLine1.textContent = "Cor: Preto/Azul";
  descriçãoLine2.textContent = "Marca: Hublot";
  descriçãoLine3.textContent = "Material: Titânio/Aço";
  descriçãoLine4.textContent = "Estado: Novo";
  descriçãoLine5.textContent = "Garantia de 1 ano";
  descriçãoLine6.textContent = "Vidro de safira";
  preço.innerHTML = `Preço: <span class="preço">R$29.999,99</span>`;
});

btn.addEventListener("click", () => {
  window.location.href = "produtos.html";
});
