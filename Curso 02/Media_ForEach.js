const notas = [6, 7.5, 9, 8.9];

let somaDasNotas = 0;

notas.forEach(function (notas) {
    somaDasNotas += notas;
})

const mediaNotas = somaDasNotas / notas.length;
console.log(`A média das notas é ${mediaNotas}`)