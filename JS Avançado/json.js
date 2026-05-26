/* 

JSON - JavaScript Object Notation

- Padrão leve de troca de dados entre cliente e servidor.
- Formato de texto, fácil de ler e escrever.
- Baseado em objetos JavaScript, mas independente de linguagem.
- Utiliza chaves {} para objetos e colchetes [] para arrays.
- Suporta tipos de dados como string, number, boolean, null, array e objeto.

*/

const user = {
    name: 'Joao',
    age: 30,
    email: 'oz@email.com'
}


/* console.log(user)   */// Imprime o objeto JavaScript no console.


const userJson = JSON.stringify(user)  // Converte o objeto JavaScript para uma string JSON.

/* console.log(userJson) */

const userJsonToJS = JSON.parse(userJson)  // Converte a string JSON de volta para um objeto JavaScript.
console.log(userJsonToJS)


