/* 
THIS 

this significa "este" em inglês, e é uma palavra-chave usada em muitas linguagens de programação, incluindo JavaScript, para se referir ao objeto atual ou ao contexto em que o código está sendo executado. O valor de "this" pode variar dependendo do contexto em que é usado, como dentro de uma função, um método de objeto ou um evento.

Em JavaScript, o valor de "this" é determinado pelo modo como a função é chamada. Por

Node --> module.exports
Web  --> Window

Escopo:
- Em uma função normal, "this" se refere ao objeto global (window no navegador ou global no Node.js).
- Em um método de objeto, "this" se refere ao objeto que possui o método.
- Em uma função de seta (arrow function), "this" é léxico, ou seja, herda o valor de "this" do contexto onde foi definida.

LOCAL --> por exemplo, dentro de uma função, "this" se refere ao objeto local ou ao contexto da função.

GLOBAL --> por exemplo, no escopo global, "this" se refere ao objeto global (window no navegador ou global no Node.js).


*/

/* 
console.log(global) */  // Console.log está em um escopo global, então "this" se refere ao objeto global (global no Node.js).


/* const name = 'Oziel' */ // Escopo Global


const person = {
    name: 'Joao',
    age: 33,
    talk: function () {
        console.log(this.age)  // "this" se refere ao objeto "person", então "this.age" acessa a propriedade "age" do objeto.
    } // Escopo Local
    // Imprime "Joao", pois a variável local tem precedência sobre a global.
}


function myFunction() {
   this.console.log("Agora sou o global")  // "this" se refere ao objeto global, então "this.console.log" é equivalente a "console.log".
}

myFunction()  // "this" se refere ao objeto global, então imprime o objeto global (global no Node.js).




