const form = document.getElementById('form-valores');

function validaValores(valorA, valorB){
    return valorA.value > valorB.value;
}

form.addEventListener('submit', function(e){
    let valorValido = false;
    e.preventDefault();

    const valorA = document.getElementById('campoA')
    const valorB = document.getElementById('campoB')

    valorValido = validaValores(valorA, valorB)
    if (valorValido){
        let msgSucesso = document.querySelector('.msgSucesso')
        msgSucesso.style.display = 'block';
        msgErro.style.display = 'none';
    }
    else{
        let msgErro = document.querySelector('.msgErro')
        msgErro.style.display = 'block';
    }
})