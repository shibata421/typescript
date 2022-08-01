"use strict";
// Exercicio 1 - Classe
class Moto {
    constructor(nome) {
        this.nome = nome;
        this.velocidade = 0;
    }
    buzinar() {
        console.log('Toooot!');
    }
    acelerar(delta) {
        this.velocidade = this.velocidade + delta;
    }
}
var moto = new Moto('Ducati');
moto.buzinar();
console.log(moto.velocidade);
moto.acelerar(30);
console.log(moto.velocidade);
// Exercicio 2 - Herança
class Objeto2D {
    constructor() {
        this.base = 0;
        this.altura = 0;
    }
}
class Retangulo extends Objeto2D {
    constructor(base, altura) {
        super();
        this.base = base;
        this.altura = altura;
    }
    area() {
        return this.base * this.altura;
    }
}
const retangulo = new Retangulo(5, 7);
console.log(retangulo.area());
// Exercicio 3 - Getters & Setters
class Estagiario {
    constructor(_primeiroNome = '') {
        this._primeiroNome = _primeiroNome;
    }
    get primeiroNome() {
        return this._primeiroNome;
    }
    set primeiroNome(nome) {
        if (nome.length >= 3)
            this._primeiroNome = nome;
        else
            this._primeiroNome = '';
    }
}
const estagiario = new Estagiario;
console.log(estagiario.primeiroNome);
estagiario.primeiroNome = 'Le';
console.log(estagiario.primeiroNome);
estagiario.primeiroNome = 'Leonardo';
console.log(estagiario.primeiroNome);
