/* 

Classes em JavaScript

- Introduzidas no ECMAScript 2015 (ES6) como uma sintaxe mais clara e concisa para criar objetos e lidar com herança.
- São essencialmente funções construtoras com uma sintaxe mais limpa e fácil de entender.
- Permitem a criação de objetos a partir de um modelo (classe) e facilitam a reutilização de código.    

*/


/* const person = {
    name: 'João',
    age: 30,
    talk: function () {
        console.log(`Hello my name is ${this.name}`)
    }
}
 */

class Person {
  constructor(name, age) {
      console.log(`Hello, I'm ${name}`)
      this.name = name
      this.age = age
  }
    
    talk() {
        console.log(`Hello my name is ${this.name} and may age is ${this.age}`)
    }
}


const newPerson =  new Person('Maria', 25) // Cria uma nova instância da classe Person usando o operador new.
const newPerson2 = new Person('João', 30) // Cria uma nova instância da classe Person usando o operador new.
const newPerson3 = new Person('Ana', 28) // Cria uma nova instância da classe Person usando o operador new.

newPerson.talk() // Chama o método talk da instância newPerson, que imprime uma mensagem usando as propriedades name e age da instância.
newPerson2.talk() // Chama o método talk da instância newPerson2, que imprime uma mensagem usando as propriedades name e age da instância.
newPerson3.talk() // Chama o método talk da instância newPerson3, que imprime uma mensagem usando as propriedades name e age da instância.


/* 
newPerson.name = 'Ozi'
newPerson.age = 33
newPerson.talk() // Chama o método talk da instância newPerson, que imprime uma mensagem usando as propriedades name e age da instância.
 */

