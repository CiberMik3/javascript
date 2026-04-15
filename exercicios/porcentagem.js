/**
 * Regra de 3
 * @author Mike de oliveira
 */

const prompt = require('prompt-sync')()

let x, y, valor

console.clear()
console.log("app para calcular a porcentagem de um valor")

x = Number(prompt("digite o valor da porcentagem: "))
console.log(x)
y = Number(prompt("Agora digite o numero: "))
console.log(y)

console.log()

valor = (x * y) / 100

console.log()

console.log(`${x}% de ${y} = ${valor}`)

console.log()