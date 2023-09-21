const transformarDiasEmIdade = (idadeEmDias) => {

    const anos = Math.trunc(idadeEmDias / 365)
    let diasRestantes = idadeEmDias - (anos * 365)
    const meses = Math.trunc(diasRestantes / 30)
    const dias = diasRestantes - (meses * 30)

    return {
        anos,
        meses,
        dias
    }

}

console.log(transformarDiasEmIdade(600))