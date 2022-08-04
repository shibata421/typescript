"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const classes_1 = require("../classes/classes");
function echo(objeto) {
    return objeto;
}
console.log(echo('João').length);
console.log(echo(27).length);
console.log(echo({ nome: 'João', idade: 27 }));
// Usando generics
function echoMelhorado(objeto) {
    return objeto;
}
console.log(echoMelhorado('João').length);
console.log(echoMelhorado(27));
console.log(echoMelhorado({ nome: 'João', idade: 27 }));
// Generica disponíveis na API
const avaliacoes = [10, 9.3, 7.7];
avaliacoes.push(8.4);
// avaliacoes.push('5.5')
console.log(avaliacoes);
// Array
function imprimir(args) {
    args.forEach(elemento => console.log(elemento));
}
imprimir([1, 2, 3]);
imprimir([1, 2, 3]);
imprimir(['Ana', 'Bia', 'Carlos']);
imprimir([
    { nome: 'Fulano', idade: 22 },
    { nome: 'Cicrano', idade: 23 },
    { nome: 'Beltrano', idade: 24 },
]);
imprimir([
    { nome: 'Fulano', idade: 22 },
    { nome: 'Cicrano', idade: 23 },
    { nome: 'Beltrano', idade: 24 },
]);
// tipo generics
// type Echo = <T>(data: T) => T
const chamarEcho = echoMelhorado;
console.log(chamarEcho('Alguma coisa'));
// Classe com generics
class OperacaoBinaria {
    constructor(operando1, operando2) {
        this.operando1 = operando1;
        this.operando2 = operando2;
    }
}
class SomaBinaria extends OperacaoBinaria {
    executar() {
        return this.operando1 + this.operando2;
    }
}
console.log(new SomaBinaria(1, 2).executar());
class DiferencaEntreDatas extends OperacaoBinaria {
    getTime(data) {
        const { dia, mes, ano } = data;
        return new Date(`${mes}/${dia}/${ano}`).getTime();
    }
    executar() {
        const t1 = this.getTime(this.operando1);
        const t2 = this.getTime(this.operando2);
        const diff = Math.abs(t1 - t2);
        const dia = 1000 * 60 * 60 * 24;
        return `${Math.ceil(diff / dia)} dia(s)`;
    }
}
console.log(new DiferencaEntreDatas(new classes_1.Data(1, 2, 2020), new classes_1.Data(1, 1, 1970)).executar());
// Desafio Classe fila
class Fila {
    constructor(...args) {
        this.fila = [];
        this.fila.push(...args);
    }
    entrar(...t) {
        this.fila.push(...t);
    }
    proximo() {
        return this.fila.splice(0, 1)[0];
    }
    imprimir() {
        console.log(this.fila);
    }
}
const fila = new Fila();
fila.imprimir();
fila.entrar(1, 2, 3, 4);
fila.imprimir();
console.log(fila.proximo());
fila.imprimir();
class Mapa {
    constructor() {
        this.itens = [];
    }
    colocar(itemNovo) {
        const indice = this.itens.findIndex(i => i.chave === itemNovo.chave);
        if (indice !== -1)
            this.itens[indice] = itemNovo;
        else
            this.itens.push(itemNovo);
    }
    imprimir() {
        console.log(this.itens);
    }
    obter(chave) {
        return this.itens.find(i => i.chave === chave);
    }
    limpar() {
        this.itens.splice(0, this.itens.length);
    }
}
const mapa = new Mapa();
mapa.colocar({ chave: 1, valor: 'Pedro' });
mapa.colocar({ chave: 2, valor: 'Rebeca' });
mapa.colocar({ chave: 3, valor: 'Maria' });
mapa.colocar({ chave: 1, valor: 'Gustavo' });
console.log(mapa.obter(2));
mapa.imprimir();
mapa.limpar();
mapa.imprimir();
