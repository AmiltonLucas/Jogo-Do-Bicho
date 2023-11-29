var informacaoArmazenada = ""; // Variável global para armazenar a informação
let numeroSelecionado = 0;
let comemoracao = document.getElementById("comemoracao")

    function armazenarInformacao(texto) {
        informacaoArmazenada = texto;
        bichoEscolhido();
    }

    function bichoEscolhido () {
        document.getElementById('informacaoArmazenada').textContent = " VOCÊ ESCOLHEU O NÚMERO : " + informacaoArmazenada;
    }


function gerarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

// Função para realizar o sorteio de três números
function sorteioDosNumeros() {
    var numerosSorteados = [];

    // Sorteio de três números
    for (var i = 0; i < 1; i++) {
        var numero = gerarNumeroAleatorio(1, 1); // Números entre 1 e 10 (ajuste conforme necessário)
        numerosSorteados.push(numero);
    }
    

    // Verificar se o número escolhido coincide com o número sorteado
    var verificarVitoria = numerosSorteados.includes(informacaoArmazenada);

   

    if (verificarVitoria) {
        alert("Parabéns! Você ganhou um pirulito");
        comemoracao.play()

    } else {
        alert("Que pena, você não ganhou desta vez. O número Sorteado foi : " + numerosSorteados);
    }



}

document.getElementById("btd").addEventListener("click", function() {

    // Chamar a função de sorteio e exibir o resultado
    var resultadoSorteio = sorteioDosNumeros();
    console.log("Números sorteados: " + resultadoSorteio.join(", "));
    
    var resultadoElement = document.getElementById('resultadoSorteio');
    resultadoElement.textContent = "Números sorteados: " + resultadoSorteio.join(", ");


})

function clicado(texto) {
    alert('Botão clicado: ' + texto);
    // Adicione aqui o código que você deseja executar quando o botão for clicado
}































