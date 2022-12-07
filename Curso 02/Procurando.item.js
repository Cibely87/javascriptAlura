const alunas = ["Ana", "Juliana", "Helena", "Erica"];
const notas = [9, 5, 8, 4];

const unindoNotasAlunas = [alunas, notas];

//Procurando um aluno na lista
function procurar(aluno) {
    if (unindoNotasAlunas[0].includes(aluno)) {
        console.log(`${aluno} está na lista`)
    } else {
        console.log("Aluno não está na lista")
    }
}

procurar("Helena");