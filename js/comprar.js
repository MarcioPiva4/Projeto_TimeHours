let imgP = document.querySelector(".img_Principal");
let title = document.getElementById("tituloProduto");
let preço = document.querySelector(".preço");
let descriçãoProdutos = document.querySelectorAll(".des");
let btnComprar = document.querySelector(".btn_Comprar");
let all = document.querySelector(".container_Tudo");
let imgs = document.querySelectorAll(".img");

imgs[0].addEventListener("click", () => {
  imgP.src = `/imagens/relogio1_Vender.png`;
  title.textContent = `Relógio Mondaine Prateado Feminino`;
  preço.textContent = "R$209,99";
  descriçãoProdutos[0].textContent = "Mecanismo: Analógico";
  descriçãoProdutos[1].textContent = "Resistência à Água: 5ATM";
  descriçãoProdutos[2].textContent = "Tipo de Fecho: Acionamento lateral";
  descriçãoProdutos[3].textContent = "Formato da Caixa: Redondo";
  descriçãoProdutos[4].textContent = "Material da Caixa: Metal";
  descriçãoProdutos[5].textContent = "Material da Pulseira: Aço";
  descriçãoProdutos[6].textContent = "Material do Mostrador: Cristal Mineral";
  descriçãoProdutos[7].textContent = "Diâmetro da caixa: 40mm";
  descriçãoProdutos[8].textContent = "Garantia: 12 Meses";
  all.style.display = "flex";
});

imgs[1].addEventListener("click", () => {
  imgP.src = `/imagens/relogio2_Vender.png`;
  title.textContent = `Relógio Rolex Daytona/Ouro`;
  preço.textContent = "R$150.000,99";
  descriçãoProdutos[0].textContent = "Movimento: Automatico";
  descriçãoProdutos[1].textContent = "Estado: Novo";
  descriçãoProdutos[2].textContent = "Modelo: Daytona";
  descriçãoProdutos[3].textContent = "Formato da Caixa: Redondo";
  descriçãoProdutos[4].textContent = "Material da Caixa: Ouro Amarelo";
  descriçãoProdutos[5].textContent = "Material da Bracelete: Ouro amarelo";
  descriçãoProdutos[6].textContent = "";
  descriçãoProdutos[7].textContent = "Genero: Unissexo";
  descriçãoProdutos[8].textContent = "Garantia: 12 Meses";
  all.style.display = "flex";
});

imgs[2].addEventListener("click", () => {
  imgP.src = `/imagens/relogio3_Vender.png`;
  title.textContent = `Hublot Classic Fusion Titan`;
  preço.textContent = "R$29.999,99";
  descriçãoProdutos[0].textContent = "Movimento: Automatico";
  descriçãoProdutos[1].textContent = "Estado: Novo";
  descriçãoProdutos[2].textContent = "Modelo: Classic Fusion Blue";
  descriçãoProdutos[3].textContent = "Formato da Caixa: Redondo";
  descriçãoProdutos[4].textContent = "Material da Caixa: Titânio";
  descriçãoProdutos[5].textContent = "Material da Bracelete: Borracha";
  descriçãoProdutos[6].textContent = "";
  descriçãoProdutos[7].textContent = "Genero: Unissexo";
  descriçãoProdutos[8].textContent = "Garantia: 12 Meses";
  all.style.display = "flex";
});

imgs[3].addEventListener("click", () => {
  imgP.src = `/imagens/relogio4_Vender.png`;
  title.textContent = `Rolex Sea-Dweller 4000`;
  preço.textContent = "R$50.999,99";
  descriçãoProdutos[0].textContent = "Movimento: Automatico";
  descriçãoProdutos[1].textContent = "Estado: Novo";
  descriçãoProdutos[2].textContent = "Modelo: Sea-Dweller 4000";
  descriçãoProdutos[3].textContent = "Formato da Caixa: Redondo";
  descriçãoProdutos[4].textContent = "Material da Caixa: Aço";
  descriçãoProdutos[5].textContent = "Material da Bracelete: Aço";
  descriçãoProdutos[6].textContent = "";
  descriçãoProdutos[7].textContent = "Genero: Unissexo";
  descriçãoProdutos[8].textContent = "Garantia: 12 Meses";
  all.style.display = "flex";
});

imgs[4].addEventListener("click", () => {
  imgP.src = `/imagens/relogio5_Vender.webp`;
  title.textContent = `Rolex Submariner Date`;
  preço.textContent = "R$49.099,99";
  descriçãoProdutos[0].textContent = "Movimento: Automatico";
  descriçãoProdutos[1].textContent = "Estado: Novo";
  descriçãoProdutos[2].textContent = "Modelo: Submariner (No Date)";
  descriçãoProdutos[3].textContent = "Formato da Caixa: Redondo";
  descriçãoProdutos[4].textContent = "Material da Caixa: Aço";
  descriçãoProdutos[5].textContent = "Material da Bracelete: Aço";
  descriçãoProdutos[6].textContent = "";
  descriçãoProdutos[7].textContent = "Genero: Unissexo";
  descriçãoProdutos[8].textContent = "Garantia: 12 Meses";
  all.style.display = "flex";
});
imgs[5].addEventListener("click", () => {
  imgP.src = `/imagens/relogio6_Vender.png`;
  title.textContent = `Relógio Breitling Navitimer Chronograph`;
  preço.textContent = "R$29.999,99";
  descriçãoProdutos[0].textContent = "Movimento: Automatico";
  descriçãoProdutos[1].textContent = "Estado: Novo";
  descriçãoProdutos[2].textContent = "Modelo: Navitimer 1884";
  descriçãoProdutos[3].textContent = "Formato da Caixa: Redondo";
  descriçãoProdutos[4].textContent = "Material da Caixa: Aço";
  descriçãoProdutos[5].textContent = "Material da Bracelete: Aço";
  descriçãoProdutos[6].textContent = "";
  descriçãoProdutos[7].textContent = "Genero: Unissexo";
  descriçãoProdutos[8].textContent = "Garantia: 12 Meses";
  all.style.display = "flex";
});
imgs[6].addEventListener("click", () => {
  imgP.src = `/imagens/relogio7_Vender.png`;
  title.textContent = `RELÓGIO HOMBRE`;
  preço.textContent = "R$59,99";
  descriçãoProdutos[0].textContent = "Movimento: Automatico";
  descriçãoProdutos[1].textContent = "Estado: Novo";
  descriçãoProdutos[2].textContent = "";
  descriçãoProdutos[3].textContent = "Formato da Caixa: Redondo";
  descriçãoProdutos[4].textContent = "Material da Caixa: Aço";
  descriçãoProdutos[5].textContent = "Material da Bracelete: Aço";
  descriçãoProdutos[6].textContent = "Sem resistencia a água";
  descriçãoProdutos[7].textContent = "Genero: Feminino/Unissexo";
  descriçãoProdutos[8].textContent = "Garantia: 12 Meses";
  all.style.display = "flex";
});
imgs[7].addEventListener("click", () => {
  imgP.src = `/imagens/relogio8_Vender.png`;
  title.textContent = `LIGE Relógios masculinos modernos`;
  preço.textContent = "R$149,99";
  descriçãoProdutos[0].textContent = "Movimento: Quartzo suiço.";
  descriçãoProdutos[1].textContent = "Estado: Novo";
  descriçãoProdutos[2].textContent = "";
  descriçãoProdutos[3].textContent =
    "Vidro de safira, super resistente a riscos.";
  descriçãoProdutos[4].textContent = "Material da Caixa: Aço inoxidável";
  descriçãoProdutos[5].textContent = "Material da Bracelete: Aço Inoxidável";
  descriçãoProdutos[6].textContent = "resistente à água";
  descriçãoProdutos[7].textContent = "Genero: Masculino/Unissexo";
  descriçãoProdutos[8].textContent = "Garantia: 12 Meses";
  all.style.display = "flex";
});
imgs[8].addEventListener("click", () => {
  imgP.src = `/imagens/relogio9_Vender.png`;
  title.textContent = `Relógio De Pulso Digital`;
  preço.textContent = "R$24,99";
  descriçãoProdutos[0].textContent = "Sistema: Digital.";
  descriçãoProdutos[1].textContent = "Estado: Novo";
  descriçãoProdutos[2].textContent = "";
  descriçãoProdutos[3].textContent = "Tela: Acrilico.";
  descriçãoProdutos[4].textContent = "Material da Caixa: Plastico";
  descriçãoProdutos[5].textContent = "Material da Bracelete: Plastico";
  descriçãoProdutos[6].textContent = "Sem resistencia a agua";
  descriçãoProdutos[7].textContent = "Genero: Unissexo";
  descriçãoProdutos[8].textContent = "Garantia: 3 Meses";
  all.style.display = "flex";
});

let inpConfirm = document.getElementById("verdade");
let inpFalse = document.getElementById("falso");

let validar = ({ target }) => {
  if ((inpConfirm = true)) {
    btnComprar.removeAttribute("disabled");
  }
};

inpConfirm.addEventListener("change", validar);

btnComprar.addEventListener("click", () => {
  let posCompra = document.querySelector(".container_PosCompra");
  posCompra.style.display = "block";
  window.open("/html/index.html");
  all.style.display = "none";
  for (let i = 0; i <= 9; i++) {
    imgs[i].style.display = "none";
  }
});

//CODIGO DA API

let resultado = document.getElementById("resultado");

function consutaEndereco() {
  let cep = document.querySelector("#CEP").value;

  if (cep.length !== 8) {
    resultado.innerHTML = "CEP inválido";
    resultado.style.fontWeight = "bold";
    resultado.style.textAlign = "center";
    return;
  }

  let url = `https://viacep.com.br/ws/${cep}/json/`;

  fetch(url).then(function (response) {
    response.json().then(mostrarEndereco);
  });
}

function mostrarEndereco(dados) {
  if (dados.erro) {
    resultado.innerHTML = "ERRO!! Não foi possivel localizar o endereço!";
    resultado.style.fontWeight = "bold";
    resultado.style.textAlign = "center";
  } else {
    resultado.innerHTML = `<p>Endereço: ${dados.logradouro}</p>
                            <p>Bairro: ${dados.bairro}</p>
                            <p>Cidade: ${dados.localidade} - ${dados.uf}</p>`;
    document.querySelector(".last_Information").style.display = "block";
  }
}
