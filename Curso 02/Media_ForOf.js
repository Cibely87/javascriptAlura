const notas = [6, 7.5, 9, 8.9];

let somaDasNotas = 0;

for (let nota of notas) {
    somaDasNotas += nota;
}

const mediaNotas = somaDasNotas / notas.length;
console.log(`A média das notas é ${mediaNotas}`)

const numerosPares = [];

for (let i = 0; i <= 100; i += 2) {
    numerosPares.push(i);
}

console.log(numerosPares);