/**
 * Estudo das funções
 * @author Mike de oliveira
 */

// Função literal (simples) >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
function hello() {
    console.clear()
    console.log("Hello function")
    console.log("Tipo: " + typeof hello) // Apoio ao entendimento da logica
}

// Para executar uma função basta chamar "chamar" o nome da função, Nao esquecendo dos parênteses 
hello()

console.log()

// Função anônima >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
const hello2 = function () {
    console.log("hello function assigned")
    console.log("Tipo: " + typeof hello) // Apoio ao entendimento da logica
}
// Para executar uma função basta chamar "chamar" o nome da função, Nao esquecendo dos parênteses 

hello2()

console.log()

// Função anônima simplificada >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
const hello3 = () => {
    console.log("hello arrow function assigned")
    console.log("Tipo: " + typeof hello) // Apoio ao entendimento da logica
}

// Para executar uma função basta chamar "chamar" o nome da função, Nao esquecendo dos parênteses 
hello3()

console.log()

// Função simples com parametros >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
function somar(num1, num2) {
    console.log("Tipo: " + typeof somar) // Apoio ao entendimento da logica
    return (console.log(num1 + num2))
}

// Nesse caso dentro de parênteses, fornecemos os numeros que serão somados na função
somar(2, 3)

console.log()

// Função anônima com parametros >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
const somarA = function (num1, num2) {
    console.log("Tipo: " + typeof somarA) // Apoio ao entendimento da logica
    return (console.log(num1 + num2))
}

somarA(6, 7)

console.log()

//Função anonima simplificada com parametros >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
const somarAF = (num1, num2) => {
    console.log("Tipo: " + typeof somarAF) // Apoio ao entendimento da logica
    return (console.log(num1 + num2))
}

somarAF(8, 8)

console.log()

//Função anonima simplificada com parametros >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//CUIDADO!! neste caso o retorno e implicito
const somarAFS = (num1, num2) => (console.log(num1 + num2))

somarAFS(2, 7)