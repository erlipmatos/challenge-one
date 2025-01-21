//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

function adicionarAmigo()
{
    
   let listaAmigos = [];


   let amigos = document.querySelector('input').value;
   
    if (amigos == numeroSecreto)
        {

     const listaAmigos = [amigos++]
        } 
   
    listaAmigos.length;
}

function sortearAmigo() 
{

    let nomen = prompt('nome da cidade0');


    console.log(`seu nome" ${nomen} " `);
    return limparCampo()
}


function numeroesAmigoEscolhido() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == numeroLimite) {
        listaDeNumerosSorteados = [];
    }
    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados)
        return numeroEscolhido;
    }
}

function limparCampo() {
    escolhido = document.querySelector('input');
    escolhido.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true)
}