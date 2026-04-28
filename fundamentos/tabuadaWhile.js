/**
 * Exercicio da tabuada usando while 
 * @author Mike de oliveira
 */

const prompt = require('prompt-sync')()

let tabuada
let x = 0

console.clear()
console.log("Tabuada")

tabuada = Number(prompt("Digite a tabuada desejada: "))

while (x++ < 10) {
    console.log(`${tabuada} x ${x} = ${tabuada * x}`)
}