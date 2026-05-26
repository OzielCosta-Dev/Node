/* 

tratando erros com try catch

O bloco try é usado para envolver o código que pode gerar um erro. Se um erro ocorrer dentro do bloco try, a execução é interrompida e o controle é passado para o bloco catch.
O bloco catch é usado para lidar com o erro que ocorreu no bloco try. Ele recebe um parâmetro que representa o erro, e dentro do bloco catch, você pode escrever código para lidar com esse erro, como exibir uma mensagem de erro ou realizar alguma ação corretiva.

A sintaxe básica é a seguinte:

try {
    // Código que pode gerar um erro
} catch (error) {
    // Código para lidar com o erro
}   


*/


const a = 10

try {

    if (a > 11) throw new Error("A variável a é maior que 11")  // Lança um erro personalizado se a variável "a" for maior que 11.  
    console.log(a)  // Tenta acessar a variável "a" e imprimir seu valor.
    console.log(b)  // Tenta acessar a variável "b", mas ela não está definida, o que gera um erro.
} catch (error) {
    console.log("Ocorreu um erro: " + error.message)  // Captura o erro e imprime uma mensagem de erro personalizada.
} finally {
        console.log("Esse bloco é executado sempre, independentemente de ocorrer um erro ou não.")  // O bloco finally é opcional e é executado sempre, independentemente de ocorrer um erro ou não.
}




