console.log("Javacript funcionando")

const botao = document.getElementById("comprar");
const mensagem = document.getElementById("mensagem");
    
botao.addEventListener("click", function () {
    mensagem.textContent = "Produto adicionado ao carrinho!";
    botao.textContent = "Produto Adicionado";
    botao.classList.add(adicionado);
});

let nome = "Gabriel";
let idade = 20;
let estudando = true;

console.log(nome)
console.log(idade)
console.log(estudando)
