const notas = [6, 7.5, 9, 8.9];

const notasAtualizadas = notas.map((notas) => {
    return notas + 1;
})

console.log(notasAtualizadas)


//MAP com string - somente letras maiusculas
const nomes = ["cibely Kelly", "terezinha Silva", "claudionor Pereira", "paçoca"];

const nomesMaiusculas = nomes.map((nomes) => nomes.toUpperCase())

console.log(nomesMaiusculas)

const teste = "Alura";
let testeMaiusculas = "";

for (let i = 0; i < teste.length; i++) {
    testeMaiusculas += teste[i].toUpperCase()
}
console.log(testeMaiusculas) //ALURA