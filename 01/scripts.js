const frutas = ['Banana', 'Maçã', 'Abacaxi', 'Pêra', 'Uva']


function inverteArray() {
    let frutasInverso = frutas.reverse()
    console.log(frutasInverso.join(", "))
}

function removeExtremidadesArray() {
    let frutasOriginal = frutas

    frutasOriginal.reverse()
    let frutasMeio = frutas.slice(1, frutas.length - 1)
    frutasMeio.push("melao")

    console.log(frutasMeio)

}

inverteArray()
removeExtremidadesArray()