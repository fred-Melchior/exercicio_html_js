const form = document.getElementById('form-valores');

function validaValores(valorA, valorB){
    return valorA > valorB;
}

form.addEventListener('submit', function(e){
    let valorValido = false;
    e.preventDefault();

    const valorA = parseInt(document.getElementById('campoA').value);
    const valorB = parseInt(document.getElementById('campoB').value);
    
    valorValido = validaValores(valorA, valorB)
    if (valorValido){
        let msgSucesso = document.querySelector('.msgSucesso')
        msgSucesso.style.display = 'block';
    }
    else{
        let msgErro = document.querySelector('.msgErro')
        msgErro.style.display = 'block';
    }
})

form.addEventListener('reset', function(e){

    let msgSucesso = document.querySelector('.msgSucesso')
    msgSucesso.style.display = 'none';
    let msgErro = document.querySelector('.msgErro')
    msgErro.style.display = 'none';
})