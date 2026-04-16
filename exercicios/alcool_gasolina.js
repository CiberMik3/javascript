/**
 *Etanol ou gasolina?
 * @author Mike de oliveira
 */

const colors = require('colors')
const prompt = require('prompt-sync')()

console.clear()

let gasolina, etanol

console.log()
console.log(" Etanol x Gasolina")
console.log()
gasolina = Number(prompt("qual o valor do litro do alcool? "))

etanol = Number(prompt("Qual e o valor do litro do gasolina? "))

console.log()
if (etanol < 0.7 * gasolina) {
    console.log("Abasteça com etanol".green)
} else {
    console.log("Abasteça com gasolina".cyan)
}
console.log()