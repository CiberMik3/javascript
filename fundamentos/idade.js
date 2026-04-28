/**
 * 
 * @author Mike de oliveira
 */

const prompt = require('prompt-sync')()

let idade

console.clear()
console.log("Validação da obrigatoriedade de votar")

//entrada
idade = Number(prompt("Qual a sua idade? "))

//processamento e saida

if (idade < 16) {
    console.clear()
    console.log("Proibido votar")
    console.log()
} else if (idade === 16 || idade === 17 || idade > 70) {
    console.clear()
    console.log("Voto facultativo")
    console.log()
} else {
    console.log("Obrigatorio votar")
    console.log()
}