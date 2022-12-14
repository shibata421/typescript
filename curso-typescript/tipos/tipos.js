"use strict";
// string
let nome = 'João';
console.log(nome);
// nome = 28 // não funciona. Há inferência de tipo
// numbers
let idade = 28;
// idade = 'Ana'
idade = 27.5;
console.log(idade);
//boolean
let possuiHobbies = false;
// possuiHobbies = 1
console.log(possuiHobbies);
// tipos explícitos
let minhaIdade;
minhaIdade = 27;
console.log(typeof minhaIdade);
// minhaIdade = 'idade é 27'
console.log(minhaIdade);
// array
let hobbies = ['Cozinhar', 'Praticar Esporte'];
console.log(hobbies[0]);
console.log(typeof hobbies);
hobbies = [100];
// hobbies = 100
console.log(hobbies);
//tuplas
let endereco = ["Av Principal", 99, ""];
console.log(endereco);
endereco = ["Rua Importante", 1260, "Bloco A"];
// enums
var Cor;
(function (Cor) {
    Cor[Cor["Cinza"] = 0] = "Cinza";
    Cor[Cor["Verde"] = 100] = "Verde";
    Cor[Cor["Azul"] = 2] = "Azul";
    Cor[Cor["Laranja"] = 3] = "Laranja";
    Cor[Cor["Amarelo"] = 4] = "Amarelo";
    Cor[Cor["Vermelho"] = 100] = "Vermelho";
})(Cor || (Cor = {}));
let minhaCor = Cor.Verde;
console.log(minhaCor);
console.log(Cor.Azul);
console.log(Cor.Laranja, Cor.Amarelo);
console.log(Cor.Verde, Cor.Vermelho);
// Any
let carro = 'BMW';
console.log(carro);
carro = { marca: 'BMW', ano: 2019 };
// funções
function retornaMeuNome() {
    return nome;
}
console.log(retornaMeuNome());
function digaOi() {
    console.log('Oi');
}
digaOi();
function multiplicar(numA, numB) {
    return numA * numB;
}
console.log(multiplicar(2, 1));
// tipo função
let calculo;
// calculo = digaOi
// calculo()
calculo = multiplicar;
console.log(calculo(5, 7));
// objetos
let usuario = {
    nome: 'João',
    idade: 27
};
// usuario = {}
// usuario = {
//     name: 'Maria',
//     age: 31
// }
console.log(usuario);
usuario = {
    idade: 31,
    nome: 'Maria',
};
console.log(usuario);
let funcionario = {
    supervisores: ['Supervisor 1', 'Supervisor2'],
    baterPonto(horas) {
        return horas <= 8 ? 'Pronto normal' : 'Fora do horário';
    },
};
console.log(funcionario.supervisores);
console.log(funcionario.baterPonto(1));
console.log(funcionario.baterPonto(10));
// Union types
let nota = 10;
console.log(`Minha nota é ${nota}!`);
nota = '10';
console.log(`Minha nota é ${nota}!`);
// Checando tipos
let valor = 30;
if (typeof valor === 'number') {
    console.log('é um number');
}
else {
    console.log(typeof valor);
}
// never = funcoes sem final bem sucedido
const falha = (msg) => {
    // while(true)
    throw new Error(msg);
};
const produto = {
    nome: 'sabão',
    preco: -1,
    validarProduto() {
        if (!this.nome || this.nome.trim().length === 0)
            falha('Precisa ter um nome');
        if (this.preco <= 0)
            falha('Preco inválido');
    }
};
// produto.validarProduto()
let altura = 12;
// altura = null
let alturaOpcional = 12;
alturaOpcional = null;
const contato1 = {
    nome: 'Fulano',
    tel1: '98765432',
    tel2: null
};
console.log(contato1.nome);
console.log(contato1.tel1);
console.log(contato1.tel2);
let contaBancaria = {
    saldo: 3456,
    depositar(valor) {
        this.saldo += valor;
    }
};
let correntista = {
    nome: 'Ana Silva',
    contaBancaria: contaBancaria,
    contatos: ['34567890', '98765432']
};
correntista.contaBancaria.depositar(3000);
console.log(correntista);
