/**
 * cauculo de IMC
 * Exemplo de encadeamento
 * @author Mike de oliveira
 */

const prompt = require('prompt-sync')()
const color = require('colors')

let peso, altura, imc

console.clear()
console.log("calculo do IMC --------------")

peso = Number(prompt("digite o seu peso em kg: "))
altura = Number(prompt("Digite sua altura em metros: "))

imc = peso / (altura * altura)


console.log()
console.log(`IMC = ${imc.toFixed(2)}`)
console.log()
if (imc < 18.5) {
    console.log(`${imc} Esta abaixo do peso!`.cyan)
} else if (imc < 25) {
    console.log(`${imc} Peso normal!`.green)
} else if (imc < 30) {
    console.log(`${imc} Sobrepeso!`.yellow)
} else if (imc < 35) {
    console.log(`${imc} Classificação de grau I`.red)
} else if (imc < 40) {
    console.log(`${imc} Classificação de Grau II`.red)
} else {
    console.log(`${imc} Classificação de Grau III`.bgRed)
}
console.log()