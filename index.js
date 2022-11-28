//VAR - pode ser declarada e substituida

var altura = 7;
var comprimento = 8;
var calculo = altura * comprimento;
console.log(calculo)

//LET - 

let forma = "Retângulo";
let altura1 = 8;
let comprimento1 = 9;
let calculo1
if (forma === "Retângulo") {
    calculo1 = altura1 * comprimento1
} else {
    calculo1 = (altura1 * comprimento1) / 2
}
console.log(calculo1)


//CONST

const forma1 = "Quadrado"
const altura2 = 11;
const comprimento2 = 13;
if (forma1 === "Quadrado") {
    calculo2 = altura2 * comprimento2
} else {
    calculo2 = (altura2 * comprimento2) / 2
}
console.log(calculo2)
