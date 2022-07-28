"use strict";
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
