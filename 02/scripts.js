const nomes = ['Juninho', 'Vidal', 'Guido', 'Dani', 'Ruli', 'Diego', 'Felipe', 'Rhael', 'Ezequiel']
const tamanhoDoGrupo = 3

function divisaoGrupos(nomes, tamanho) {
    let indice = 1
    for (let i = 0; i < nomes.length; i = i + tamanhoDoGrupo) {
        console.log(`grupo ${indice}: ${nomes.slice(i, i + tamanhoDoGrupo)}`)
        indice++
    }
}

divisaoGrupos(nomes, tamanhoDoGrupo)