let listaAmigos = [];


function adicionarAmigo() {
    const amigo = document.getElementById('amigo');
    const addAmigos = amigo.value;

    if (addAmigos) {
        listaAmigos.push(addAmigos);
        console.log('addamigo');
        amigo.value = ''; // limpa entrada de valores
        displayArray();
       
    }

}

function sortearAmigo() 
    {

    let amigoEscolhido = parseInt(Math.random() * listaAmigos.length + 1);
    let alert(`Seu amigo secreto é " ${listaAmigos[amigoEscolhido]} "`); 

    }