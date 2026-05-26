/* 

O ASYNC AWAIT

O async/await é uma sintaxe introduzida no JavaScript para lidar com operações assíncronas de forma mais legível e fácil de entender. Ele é construído sobre as Promises e permite escrever código assíncrono que se parece com código síncrono, tornando-o mais fácil de ler e manter.

- Async: A palavra-chave
async é usada para declarar uma função assíncrona. Ela indica que a função pode conter operações assíncronas e que ela retornará uma Promise.

- Await: A palavra-chave
await é usada dentro de uma função assíncrona para esperar a resolução de uma Promise. Ela pausa a execução da função até que a Promise seja resolvida e retorna o valor resolvido.
Exemplo:

async function fetchData() {
    try {
        const response = await fetch('https://api.example.com/data'); // Espera a resposta da API   
        const data = await response.json(); // Espera a conversão da resposta para JSON
        console.log(data); // Imprime os dados obtidos da API
    } catch (error) {
        console.error('Erro ao buscar os dados:', error); // Lida com erros que possam ocorrer durante a operação assíncrona
    }   
}

fetchData(); // Chama a função assíncrona para buscar os dados da API

Neste exemplo, a função fetchData
é declarada como assíncrona usando async. Dentro da função, usamos await para esperar a resolução das Promises retornadas por fetch e response.json(). Isso torna o código mais fácil de ler e entender, pois se parece com código síncrono, mesmo que esteja lidando com operações assíncronas.

O uso de async/await pode ajudar a evitar o "callback hell" (aninhamento excessivo de callbacks) e tornar o código mais limpo e fácil de seguir, especialmente quando lidamos com várias operações assíncronas em sequência.    


*/



const { sum, multi, person } = require('./objectsFunctions')  // Importa as funções sum e multi, e o objeto person do módulo objectsFunctions usando destructuring.

async function main() {  // Declara uma função assíncrona chamada main.
    try {

        const resultSum = await sum(5, 10)  // Espera a resolução da função sum e armazena o resultado em resultSum.
        console.log("Resultado da soma:", resultSum)  // Imprime o resultado da soma.


        const resultMulti = await multi(5, 10)  // Espera a resolução da função multi e armazena o resultado em resultMulti.
        console.log("Resultado da multiplicação:", resultMulti)  // Imprime o resultado da multiplicação.
        

        console.log("Pessoa:", person)  // Imprime o objeto person.

    } catch (error) {
        console.error("Ocorreu um erro:", error)  // Lida com erros que possam ocorrer durante a execução das operações assíncronas.
    }
}

main()  // Chama a função main para executar as operações assíncronas.


        