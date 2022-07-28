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

// objetos
let usuario: { nome: string, idade: number } = {
    nome: 'João',
    idade: 27
}

// usuario = {}

// usuario = {
//     name: 'Maria',
//     age: 31
// }

console.log(usuario)

usuario = {
    idade: 31,
    nome: 'Maria',
}

console.log(usuario)

// alias
type Funcionario = {
    supervisores: string[],
    baterPonto: (horas: number) => string
}

let funcionario: Funcionario = {
    supervisores: ['Supervisor 1', 'Supervisor2'],
    baterPonto(horas: number): string {
        return horas <= 8 ? 'Pronto normal' : 'Fora do horário'
    },
}

console.log(funcionario.supervisores)
console.log(funcionario.baterPonto(1))
console.log(funcionario.baterPonto(10))

// Union types
let nota: number | string = 10
console.log(`Minha nota é ${nota}!`)
nota = '10'
console.log(`Minha nota é ${nota}!`)

// Checando tipos
let valor = 30

if (typeof valor === 'number') {
    console.log('é um number')
} else {
    console.log(typeof valor)
}

// never = funcoes sem final bem sucedido
const falha = (msg: string): never => {
    // while(true)
    throw new Error(msg)
}

const produto = {
    nome: 'sabão',
    preco: -1,
    validarProduto() {
        if (!this.nome || this.nome.trim().length === 0) falha('Precisa ter um nome')
        if (this.preco <= 0) falha('Preco inválido')
    }
}

// produto.validarProduto()

let altura = 12
// altura = null

let alturaOpcional: null | number = 12
alturaOpcional = null

type Contato = {
    nome: string,
    tel1: string,
    tel2: string | null
}

const contato1: Contato = {
    nome: 'Fulano',
    tel1: '98765432',
    tel2: null
}

console.log(contato1.nome)
console.log(contato1.tel1)
console.log(contato1.tel2)

// Desafio
type ContaBancaria = {
    saldo: number,
    depositar: (valor: number) => void
}

type Correntista = {
    nome: string,
    contaBancaria: ContaBancaria,
    contatos: string[]
}

let contaBancaria: ContaBancaria = {
    saldo: 3456,
    depositar(valor) {
        this.saldo += valor
    }
}

let correntista: Correntista = { 
    nome: 'Ana Silva',
    contaBancaria: contaBancaria,
    contatos: ['34567890', '98765432']
}

correntista.contaBancaria.depositar(3000)
console.log(correntista)