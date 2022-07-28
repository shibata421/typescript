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
