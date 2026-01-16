console.log("Javacript funcionando")

const botao = document.getElementById("comprar");
const mensagem = document.getElementById("mensagem");
    
botao.addEventListener("click", function () {
    mensagem.textContent = "Produto adicionado ao carrinho!";
    botao.textContent = "Produto Adicionado";
    botao.classList.add(adicionado);
});

