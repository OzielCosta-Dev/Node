/* const objectAndFunctions = require('./objectsFunctions') */
const { sum, multi, person } = require('./objectsFunctions')

/*
DOCUMENTACAO DA IMPORTACAO

O arquivo objectsFunctions.js exporta um objeto com tres propriedades:
multi, sum e person.

Exemplo da exportacao:
module.exports = { multi, sum, person }

Por isso, neste arquivo podemos importar usando destructuring:
const { sum, multi, person } = require('./objectsFunctions')

O nome dentro das chaves precisa ser igual ao nome exportado no modulo.
Depois da importacao, cada item pode ser usado diretamente:
- sum(5, 10)
- multi(5, 10)
- person

O erro anterior aconteceu porque o modulo importado tentava carregar o
pacote express com require('express'), mas esse pacote nao estava instalado
e nem era necessario para exportar o person.
*/



console.log(sum(5, 10))  // Chama a função sum do módulo objectsFunctions e imprime o resultado.
console.log(multi(5, 10))  // Chama a função multi do módulo objectsFunctions e imprime o resultado.
console.log(person)  // Imprime o objeto person do módulo objectsFunctions.
