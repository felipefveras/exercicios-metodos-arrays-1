const nomes = ['Ford Ká', 'Ranger', 'Hilux', 'Corola', 'Fusca', 'Chevete', 'Brasilia'];
const posicao = 3;

function carrosSubsequentes(carro, posicao) {
    let carros
    carros = carro.slice(posicao, posicao + 3)
    console.log(carros.join(" - "))
}

carrosSubsequentes(nomes, posicao)