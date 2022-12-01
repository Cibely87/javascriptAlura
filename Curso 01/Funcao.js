//Sem retorno e sem parâmetro

function cumprimentar() {
    console.log("Oi gente!")
}

cumprimentar()

//Com parâmetro e sem retorno

function cumprimentaPessoa(pessoa) {
    console.log(`Olá, ${pessoa}!`)
}

cumprimentaPessoa('Cibely')

//Sem parâmetro e com retorno

function cumprimentar0() {
    return "Oi gente!"
}

function cumprimentaPessoa0(nomePessoa) {
    console.log(`${cumprimentar0()} Meu nome é ${nomePessoa}`)
}

cumprimentaPessoa0("Cibely")