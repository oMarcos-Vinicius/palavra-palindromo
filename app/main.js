const resultado = document.getElementById("resultado");
const btnVerificarPalavra = document.getElementById('verificar');
const boxPalavra = document.getElementById('palavra');

btnVerificarPalavra.addEventListener('click', () => {
    verificaSePalavraEUmPalidromo(boxPalavra.value);
});

function verificaSePalavraEUmPalidromo(palavra) {
    const palavraSeparada = palavra.split("");
    let palavraInvertida = palavraSeparada.reverse();
    palavraInvertida = palavraInvertida.join("");
    if (palavra == palavraInvertida) {
        resultado.innerHTML = `
        <h2>A palavra ${palavra} é um palíndromo</h2>
        `
    } else {
        resultado.innerHTML = `
        <h2>A palavra ${palavra} não é um palíndromo</h2>
    `
    }
}