const nomes = ["Cibely", "Terezinha", "Claudionor", "Paçoca"];

nomes.forEach(function (nome) {
    console.log(nome)
})

//Arrow function
nomes.forEach((nome) => {
    console.log(nome)
})

//Outra forma callback
function mostrarNomes(nome) {
    console.log(nome)
}

nomes.forEach(mostrarNomes)