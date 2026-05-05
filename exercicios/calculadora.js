/**
 * Calculadora JS - Exemplo de uso de funções
 * @author Mike de oliveira
 */
const prompt = require('prompt-sync')()
const colors = require('colors')

//variaveis globais
let num1, num2, opcao, resultado

console.clear()

//funções das operações (com parâmetros) Recomendado antes da função principal
function somar(num1, num2) {
    return num1 + num2
}
function subtrair(num1, num2) {
    return num1 - num2
}
function multiplicar(num1, num2) {
    return num1 * num2
}
function dividir(num1, num2) {
    if (num2 === 0) {
        console.log("Erro!! Impossivel dividir por 0".red)
    } else {
        return num1 / num2
    }
}
function raizQuadrada(num1) {
    return Math.sqrt(num1)
}
function Porcentagem(num1, num2) {
    return (num1 * num2) / 100
}


//======================================
//Função principal (main)
function iniciarCalculadora() {
    //gerando um looping infinito (UX)
    do {
        mostrarMenu()
        //escolha da opção
        opcao = Number(prompt("Escolha uma opção: "))
        switch (opcao) {
            case 0:
                console.log("Calculadora encerrada.".red)
                return //Encerra o looping infinito
            case 1:
                num1 = Number(prompt("Digite o primeiro numero: "))
                num2 = Number(prompt("Digite o segundo numero: "))
                resultado = somar(num1, num2)
                break
            case 2:
                num1 = Number(prompt("Digite o primeiro numero: "))
                num2 = Number(prompt("Digite o segundo numero: "))
                resultado = subtrair(num1, num2)
                break
            case 3:
                num1 = Number(prompt("Digite o primeiro numero: "))
                num2 = Number(prompt("Digite o segundo numero: "))
                resultado = multiplicar(num1, num2)
                break
            case 4:
                num1 = Number(prompt("Digite o primeiro numero: "))
                num2 = Number(prompt("Digite o segundo numero: "))
                resultado = dividir(num1, num2)
                break
            case 5:
                num1 = Number(prompt("Digite o numero desejaso: "))
                resultado = raizQuadrada(num1)
                break
            case 6:
                num1 = Number(prompt("Digite o valor da porcentagem: "))
                num2 = Number(prompt("Digite o valor a ser calculado: "))
                resultado = Porcentagem(num1, num2)
                break
            default:
                console.log("Operaçao invalida".bgRed)
                prompt("Precione [enter] para continuar")
                continue //Continua dentro do switch case
        }
        console.log(`Resultado ${resultado.toFixed(2)}`)
        prompt("Precione [Enter] para continuar.")
    } while (true)
}
//Função menu
function mostrarMenu() {
    console.clear()
    console.log(">> Cauculadora <<".green)
    console.log("1. Somar         ".bgBlack)
    console.log("2. Subtrair      ".bgBlack)
    console.log("3. Multiplicar   ".bgBlack)
    console.log("4. Dividir       ".bgBlack)
    console.log("5. Raiz quadrada ".bgBlack)
    console.log("6. Porcentagem   ".bgBlack)
    console.log("0. Sair          ".bgBlack)
}

//Executar a função principal
iniciarCalculadora()
