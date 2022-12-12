const notas = [6, 7.5, 9, 8.9];

let somaDasNotas = 0

for (let indice = 0; indice < notas.length; indice++) {
    somaDasNotas += notas[indice]
}

const mediaNotas = somaDasNotas / notas.length;
console.log(`A média das notas é ${mediaNotas}`)