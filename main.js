const resultado = document.getElementById('resultado');

function imc () {
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value; 
    const calcular = document.getElementById('calcular').value;

    if (nome !== '' && altura !== '' && peso !== '') {
        const valorIMC = (peso / (altura * altura)).toFixed(2);
        let classificacao = '';
        if (valorIMC < 18.5) {
            classificacao = 'Abaixo do peso 😢';
        }
        else if (valorIMC < 25) {
            classificacao = 'com peso ideal. Parabéns!👌';
        }
        else if (valorIMC < 30) {
            classificacao = 'levemente acima do peso. Cuide bem da sua alimentação😉';
        }
        else if (valorIMC < 35) {
            classificacao = 'com obesidade grau 1. Cuidado!!😢';
        }
        else if (valorIMC < 40) {
            classificacao = 'com obesidade grau 2. Cuidado!!😢';
        }
        else {
            classificacao = 'com obesidade grau 3 (mórbida). Cuidado!!😢'
        }
        resultado.textContent = `${nome} seu IMC é ${valorIMC} e você está ${classificacao}`;
    }
    else {
        resultado.textContent = 'Preencha todos os campos!!!'
    }
}

calcular.addEventListener('click', imc);