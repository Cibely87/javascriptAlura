const transformarDiasIdade = (idadeDias) => {

    const anos = Math.trunc(idadeDias / 365);
    let restoDias = idadeDias - (anos * 365)
    const meses = Math.trunc(restoDias * 30);
    const dias = Math.trunc(meses / 30);


    return {
        anos,
        meses,
        dias,
    }
}

console.log(transformarDiasIdade(2000))