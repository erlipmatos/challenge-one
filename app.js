let listaAmigos = [];


function adicionarAmigo() {
    const amigo = document.getElementById('amigo');
    const addAmigos = amigo.value;

    if (addAmigos) {
        listaAmigos.push(addAmigos);
        console.log('addamigo');
        amigo.value = ''; // Clear the input field
        displayArray();
       
    }

}

function sortearAmigo() 
    {

    let amigoEscolhido = parseInt(Math.random() * listaAmigos.length + 1);
    let alert(`Seu amigo secreto é " ${listaAmigos[amigoEscolhido]} "`); 

    }


/*
function displayArray() {
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = '<h3>Recorded Inputs:</h3><ul>' + listaAmigos.map(item => `<li>${item}</li>`).join('') + '</ul>';

for (conta < listaAmigos.length -1 cont++);
    if (amigo = listaAmigos[conta]);
        alert(`Seu amigo secreto é " ${listaAmigos[conta]} "`); 

    } */