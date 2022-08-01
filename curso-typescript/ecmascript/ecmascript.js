"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// let & const
let seraQuePode = '?';
console.log(seraQuePode);
let estaFrio = true;
if (estaFrio) {
    let acao = 'Colocar casaco!';
    console.log(acao);
}
const cpf = '123.456.000-99';
// cpf = '123.456.000-98'
console.log(cpf);
var segredo = 'externo';
function revelar() {
    const segredo = 'interno';
    console.log(segredo);
}
revelar();
console.log(segredo);
for (var i = 0; i < 10; i++) {
    console.log(i);
}
// arrow function
const somar = function (n1, n2) {
    return n1 + n2;
};
console.log(somar(2, 2));
const subtrair = (n1, n2) => n1 - n2;
console.log(subtrair(2, 3));
const saudacao = () => console.log('Olá');
saudacao();
const falarCom = (pessoa) => console.log(`Olá ${pessoa}`);
falarCom('João');
// this nunca varia com arrow function
// function normalComThis() {
//     console.log(this)
// }
// normalComThis()
// const normalComThisEspecial = normalComThis.bind({ nome: 'Ana' })
// normalComThisEspecial()
// // this??
// console.log(this)
// const arrowComThis = () => console.log(this)
// arrowComThis()
// const arrowComThisEspecial = arrowComThis.bind(1)
// arrowComThisEspecial()
// parâmetro padrão
function contagemRegressiva(inicio = 5, fim = inicio - 5) {
    console.log(inicio);
    while (inicio >= fim) {
        inicio--;
        console.log(inicio);
    }
    console.log('Fim');
}
contagemRegressiva();
contagemRegressiva(3);
// operador spread & rest
const numbers = [1, 10, 99, -5, 200, 1000, 43];
console.log(Math.max(...numbers));
const turmaA = ['João', 'Maria', 'Fernanda'];
const turmaB = ['Fernando', 'Miguel', 'Lorena', ...turmaA];
console.log(turmaB);
function retornarArray(...args) {
    return args;
}
const numeros = retornarArray(1, 2, 3, 4, 123, 746);
console.log(numeros);
console.log(retornarArray(...numbers));
// Rest & spread (tupla)
const tupla = [1, 'abc', false];
function tuplaParam1(a, b, c) {
    console.log(`1) ${a} ${b} ${c}`);
}
tuplaParam1(...tupla);
function tuplaParam2(...params) {
    console.log(`2) ${params[0]} ${params[1]} ${params[2]}`);
}
tuplaParam2(...tupla);
// Destructuring (array)
const caracteristicas = ['Motor Zetec 1.8', 2020];
// const motor = caracteristicas[0]
// const ano = caracteristicas[1]
const [motor, ano] = caracteristicas;
console.log(motor);
console.log(ano);
// Destructuring (object)
const item = {
    nome: 'SSD 480GB',
    preco: 200,
    caracteristicas: {
        w: 'Importado'
    }
};
// const nomeItem = item.nome
// const preco = item.preco
const { nome: n, preco: p, caracteristicas: { w } } = item;
console.log(n);
console.log(p);
console.log(w);
// Desafios
// Exercicio 1
const dobro = (valor) => valor * 2;
console.log(dobro(10));
// Exercicio 2
const dizerOla = (nome = 'Pessoa') => console.log('Olá, ' + nome);
dizerOla();
dizerOla('Anna');
// Exercicio 3
const nums = [-3, 33, 38, 5];
// Imprimir o menor valor
console.log(Math.min(...nums));
// Exercicio 4
const array = [55, 20, ...nums];
// Adicionar todos os elementos de nums em array
console.log(array);
// Exercicio 5
const notas = [8.5, 6.3, 9.4];
const [nota1, nota2, nota3] = notas;
console.log(nota1, nota2, nota3);
// Exercicio 6
const cientista = { primeiroNome: 'Will', experiencia: 12 };
const { primeiroNome, experiencia } = cientista;
console.log(primeiroNome, experiencia);
// Callback
// function esperar3s(callback: (dados: string) => void) {
//     setTimeout(() => {
//         callback('3s depois')
//     }, 3000)
// }
// esperar3s(resultado => console.log(resultado))
// function esperarPromise() {
//     return new Promise((resolve: any) => {
//         setTimeout(() => {
//             setTimeout(() => {
//                 resolve('3s depois Promise')
//             }, 3000)
//         })
//     })
// }
// esperarPromise()
//     .then(dado => console.log(dado))
// axios.get('https://swapi.dev/api/people/1')
//     .then(res => res.data)
//     .then(personagem => personagem.films)
//     .then(films => {
//         axios.get(films[0])
//             .then(res => res.data)
//             .then(filme => console.log(filme.title))
//     })
//     .catch(res => console.log(res))
