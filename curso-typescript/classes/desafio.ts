// Exercicio 1 - Classe
class Moto {

    velocidade: number = 0

    constructor(
        public nome: string
    ) { }

    buzinar(): void {
        console.log('Toooot!')
    }

    acelerar(delta: number): void {
        this.velocidade = this.velocidade + delta
    }
}

var moto = new Moto('Ducati')
moto.buzinar()
console.log(moto.velocidade)
moto.acelerar(30)
console.log(moto.velocidade)

// Exercicio 2 - Herança
abstract class Objeto2D {
    base: number = 0
    altura: number = 0

    abstract area(): number
}

class Retangulo extends Objeto2D {
    constructor(base: number, altura: number) {
        super()
        this.base = base
        this.altura = altura
    }

    area(): number {
        return this.base * this.altura         
    }
} 

const retangulo = new Retangulo(5, 7)
console.log(retangulo.area())

// Exercicio 3 - Getters & Setters
class Estagiario {
    constructor(
        private _primeiroNome: string = ''
    ) { }
    
    get primeiroNome(): string {
        return this._primeiroNome
    }

    set primeiroNome(nome: string) {
        if (nome.length >= 3) 
            this._primeiroNome = nome
        else 
            this._primeiroNome = ''
    }
}

const estagiario = new Estagiario
console.log(estagiario.primeiroNome)

estagiario.primeiroNome = 'Le'
console.log(estagiario.primeiroNome)

estagiario.primeiroNome = 'Leonardo'
console.log(estagiario.primeiroNome)