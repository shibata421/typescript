export class Data {
    // public por padrão
    dia: number
    public mes: number
    ano: number

    constructor(dia: number = 1, mes: number = 1, ano: number = 1970) {
        this.dia = dia
        this.mes = mes
        this.ano = ano
    }
}

const aniversario = new Data(3, 11, 1991)
aniversario.dia = 4
console.log(aniversario.dia)
console.log(aniversario)

const casamento = new Data // pode omitir os ()
casamento.ano = 2017
console.log(casamento)

class DataEsperta {
    constructor(
        public dia: number = 1,
        public mes: number = 1,
        public ano: number = 1970
    ) { }
}

const aniversarioEsperto = new DataEsperta(3, 11, 1991)
aniversario.dia = 4
console.log(aniversario.dia)
console.log(aniversario)

const casamentoEsperto = new DataEsperta // pode omitir os ()
casamento.ano = 2017
console.log(casamento)

// Desafio produto
class Produto {
    constructor(
        public nome: string,
        public preco: number,
        public desconto: number = 0
    ) { }

    // public é opcional
    precoComDesconto(): number {
        return this.preco * (1 - this.desconto)
    }

    public resumo(): string {
        return `${this.nome} custa R$${this.precoComDesconto()} (${this.desconto * 100}% off)`
    }
}

const produto1 = new Produto("Livro", 50.0, 0.05)
console.log(produto1.resumo())
const produto2 = new Produto('Dicionário', 23.54)

class Carro {
    private velocidadeAtual: number = 0

    constructor(
        public marca: string,
        public modelo: string,
        private velocidadeMaxima: number = 200
    ) { }

    protected alterarVelocidade(delta: number): number {
        const novaVelocidade = this.velocidadeAtual + delta

        const velocidadeValida = novaVelocidade >= 0 && novaVelocidade <= this.velocidadeMaxima

        if (velocidadeValida)
            this.velocidadeAtual = novaVelocidade
        else
            this.velocidadeAtual = (delta > 0) ? this.velocidadeMaxima : 0

        return this.velocidadeAtual
    }

    public acelerar(): number {
        return this.alterarVelocidade(5)
    }

    public frear(): number {
        return this.alterarVelocidade(-5)
    }
}

const carro1 = new Carro('Ford', 'Ka', 185)
Array(50).fill(0).forEach(() => carro1.acelerar())
console.log(carro1.acelerar())

Array(50).fill(0).forEach(() => carro1.frear())
console.log(carro1.frear())

class Ferrari extends Carro { 

    constructor(modelo: string, velocidadeMaxima: number) {
        super('Ferrari', modelo, velocidadeMaxima)
    }

    public acelerar(): number {
        return this.alterarVelocidade(20)
    }

    public frear(): number {
        return this.alterarVelocidade(-15)
    }
}

const f40 = new Ferrari('F40', 324)
console.log(`${f40.marca} ${f40.modelo}`)
console.log(f40.acelerar())
console.log(f40.frear())

// Getters & Setters
class Pessoa {
    private _idade: number = 0

    get idade(): number {
        return this._idade
    }

    set idade(idade: number) {
        if (idade >= 0 && idade <= 120)
            this._idade = idade
    }
}

const pessoa1 = new Pessoa
pessoa1.idade = 10
console.log(pessoa1.idade)

pessoa1.idade = -3
console.log(pessoa1.idade)

// Atributos e métodos estáticos
class Matematica {
    static PI: number = 3.1415

    static areaCirc(raio: number): number {
        return Matematica.PI * raio * raio
    }
}

console.log(Matematica.areaCirc(4))

// Classe abstrata
abstract class Calculo {
    protected _resultado: number = 0

    abstract executar(...numeros: number[]): void

    get resultado(): number {
        return this._resultado
    }
}

class Soma extends Calculo {
    executar(...numeros: number[]): void {
        this._resultado = numeros.reduce((acc, next) => acc + next)
    }
}

class Multiplicacao extends Calculo {
    executar(...numeros: number[]): void {
        this._resultado = numeros.reduce((acc, next) => acc * next)
    }
}

let c1: Calculo = new Soma
c1.executar(1, 2)
console.log(c1.resultado)

c1 = new Multiplicacao
c1.executar(1, 2)
console.log(c1.resultado)

// construtor privado & singleton
class Unico {
    private static instancia = new Unico
    private constructor() {}

    static getInstancia(): Unico {
        return Unico.instancia
    }

    agora() {
        return new Date
    }
}

console.log(Unico.getInstancia().agora())

// somente leitura
class Aviao {
    public readonly modelo: string

    constructor(modelo: string, public readonly prefixo: string) {
        this.modelo = modelo
    }
}

const turboHelice = new Aviao('Tu-114', 'PT-ABC')
// turboHelice.modelo = 'DC-8'
// turboHelice.prefixo = 'PT-DEF'
console.log(turboHelice)