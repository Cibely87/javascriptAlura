//Calculo média de notas SEM ARRAYS

const nota1 = 6;
const nota2 = 6.8;
const nota3 = 9;
const nota4 = 5.4

const mediaFinal = (nota1 + nota2 + nota3 + nota4) / 4
console.log(mediaFinal)

//Calculo COM ARRAYS

const notas = [6, 6.8, 9, 5.4]
const mediaArray = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;
console.log(mediaArray)

//Procurando nota especifica 
console.log(notas[3])