import areaRetangulo from "./retangulo";
import { areaCircunferencia as circ } from "./circunferencia";
// import { areaCircunferencia } from "./circunferencia";

console.log('Carregando módulos...')
console.log(areaRetangulo(7, 8))
console.log(circ(2))

const { digaOi } = require('./novo')
console.log(digaOi('Ana'))