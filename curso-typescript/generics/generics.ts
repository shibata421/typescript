import { Data } from '../classes/classes'

function echo(objeto: any) {
    return objeto
}

console.log(echo('João').length)
console.log(echo(27).length)
console.log(echo({ nome: 'João', idade: 27 }))

// Usando generics
function echoMelhorado<T>(objeto: T): T {
    return objeto
}
console.log(echoMelhorado('João').length)
console.log(echoMelhorado<number>(27))
console.log(echoMelhorado({ nome: 'João', idade: 27 }))

// Generica disponíveis na API
const avaliacoes: Array<number> = [10, 9.3, 7.7]
avaliacoes.push(8.4)
// avaliacoes.push('5.5')
console.log(avaliacoes)

// Array
function imprimir<T>(args: T[]) {
    args.forEach(elemento => console.log(elemento))
}

imprimir([1, 2, 3])
imprimir<number>([1, 2, 3])
imprimir<string>(['Ana', 'Bia', 'Carlos'])

type Aluno = {
    nome: string,
    idade: number
}
imprimir<{ nome: string, idade: number }>([
    { nome: 'Fulano', idade: 22 },
    { nome: 'Cicrano', idade: 23 },
    { nome: 'Beltrano', idade: 24 },
])
imprimir<Aluno>([
    { nome: 'Fulano', idade: 22 },
    { nome: 'Cicrano', idade: 23 },
    { nome: 'Beltrano', idade: 24 },
])

// tipo generics
// type Echo = <T>(data: T) => T
const chamarEcho: <T>(data: T) => T = echoMelhorado
console.log(chamarEcho<string>('Alguma coisa'))

// Classe com generics
abstract class OperacaoBinaria<T, R> {
    constructor(
        public operando1: T,
        public operando2: T
    ) { }

    abstract executar(): R
}

class SomaBinaria extends OperacaoBinaria<number, number> {
    executar(): number {
        return this.operando1 + this.operando2
    }
}

console.log(new SomaBinaria(1, 2).executar())

class DiferencaEntreDatas extends OperacaoBinaria<Data, string> {
    getTime(data: Data): number {
        const { dia, mes, ano } = data
        return new Date(`${mes}/${dia}/${ano}`).getTime()
    }

    executar(): string {
        const t1 = this.getTime(this.operando1)
        const t2 = this.getTime(this.operando2)
        const diff = Math.abs(t1 - t2)
        const dia = 1000 * 60 * 60 * 24

        return `${Math.ceil(diff / dia)} dia(s)`
    }
}

console.log(new DiferencaEntreDatas(new Data(1, 2, 2020), new Data(1, 1, 1970)).executar())

// Desafio Classe fila
class Fila<T> {
    private fila: Array<T> = []

    constructor(...args: T[]) {
        this.fila.push(...args)
    }

    entrar(...t: T[]): void {
        this.fila.push(...t)
    }

    proximo(): T {
        return this.fila.splice(0, 1)[0]
    }

    imprimir(): void {
        console.log(this.fila)
    }
}

const fila = new Fila<number>()
fila.imprimir()
fila.entrar(1, 2, 3, 4)
fila.imprimir()
console.log(fila.proximo())
fila.imprimir()

// Desafio Mapa
type Item<C, V> = { chave: C, valor: V }

class Mapa<C, V> {
    private itens: Array<Item<C, V>> = []

    colocar(itemNovo: Item<C, V>): void {
        const indice = this.itens.findIndex(i => i.chave === itemNovo.chave)
        
        if (indice !== -1) 
            this.itens[indice] = itemNovo
        else
            this.itens.push(itemNovo)
    }

    imprimir(): void {
        console.log(this.itens)
    }

    obter(chave: C): Item<C, V> | undefined {
        return this.itens.find(i => i.chave === chave)
    }

    limpar(): void {
        this.itens.splice(0, this.itens.length)
    }
}

const mapa = new Mapa<number, string>()
mapa.colocar({ chave: 1, valor: 'Pedro' })
mapa.colocar({ chave: 2, valor: 'Rebeca' })
mapa.colocar({ chave: 3, valor: 'Maria' })
mapa.colocar({ chave: 1, valor: 'Gustavo' })

console.log(mapa.obter(2))
mapa.imprimir()
mapa.limpar()
mapa.imprimir()