const salaJS = [7, 8.5, 6, 5, 9, 4.8, 2.4, 6.9, 7.6];
const salaPython = [3.5, 7, 5.7, 8, 9.6];
const salaC = [4.9, 5.7, 8.4, 2.1];

function calculoMedia(notasDaSala) {
    const somaDasNotas = notasDaSala.reduce((acumulador, nota) => {
        return acumulador + nota
    }, 0)
    console.log(somaDasNotas)
}

calculoMedia(salaC)