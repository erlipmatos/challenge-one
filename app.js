let inputArray = [];

function adicionarAmigo() {
    const amigo = document.getElementById('amigo');
    const inputValue = amigo.value;

    if (inputValue) {
        inputArray.push(inputValue);
        amigo.value = ''; // Clear the input field
        displayArray();
        console.log
    }

}
/*
sortearAmigo(){


}

/*
function displayArray() {
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = '<h3>Recorded Inputs:</h3><ul>' + inputArray.map(item => `<li>${item}</li>`).join('') + '</ul>';
}
*/