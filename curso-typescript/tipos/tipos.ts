// string
let nome = 'João'
console.log(nome)
// nome = 28 // não funciona. Há inferência de tipo

// numbers
let idade = 28
// idade = 'Ana'
idade = 27.5

console.log(idade)

//boolean
let possuiHobbies = false
// possuiHobbies = 1

console.log(possuiHobbies)

// tipos explícitos
let minhaIdade: number
minhaIdade = 27
console.log(typeof minhaIdade)
// minhaIdade = 'idade é 27'
console.log(minhaIdade)

// array
let hobbies: any[] = ['Cozinhar', 'Praticar Esporte']
console.log(hobbies[0])
console.log(typeof hobbies)

hobbies = [100]
// hobbies = 100
console.log(hobbies)

//tuplas
let endereco: [string, number, string] = ["Av Principal", 99, ""]
console.log(endereco)

endereco = ["Rua Importante", 1260, "Bloco A"]

// enums
enum Cor {
    Cinza, // 0
    Verde = 100, // 100
    Azul = 2, // 2
    Laranja,
    Amarelo,
    Vermelho = 100
}

let minhaCor: Cor = Cor.Verde
console.log(minhaCor)
console.log(Cor.Azul)
console.log(Cor.Laranja, Cor.Amarelo)
console.log(Cor.Verde, Cor.Vermelho)

// Any
let carro: any = 'BMW'
console.log(carro)
carro = { marca: 'BMW', ano: 2019 }

// funções
function retornaMeuNome(): string {
    return nome
}

console.log(retornaMeuNome())

function digaOi(): void {
    console.log('Oi')
}

digaOi()

function multiplicar(numA: number, numB: number): number {
    return numA * numB
}

console.log(multiplicar(2, 1))

// tipo função
let calculo: (numeroA: number, numberoB: number) => number
// calculo = digaOi
// calculo()

calculo = multiplicar
console.log(calculo(5, 7))