/**
 * Cauculo da media de 2 notas
 * Exemplo de usa da biblioteca prompt-sync
 * @author Mike de oliveira
 */

// importat pacotes
const prompt = require('prompt-sync')()

// variáveis
let diciplina, nota1, nota2, media

console.clear()
console.log("cauculo da media de 2 notas")

// entrada de dados
diciplina = prompt("digite o nome da diciplina: ")
console.log(diciplina)
//console.log(typeof(diciplina))
//number() converte para numerico
nota1 = Number(prompt("digite a nota 1: "))
//console.log(nota1)
//console.log(typeof(nota1))
nota2 = Number(prompt("digite a nota 2: "))
//console.log(nota2)
//console.log(typeof(nota2))

//processamento
media = (nota1 + nota2) / 2

//saida
console.log(`Média: ${media.toFixed(1)}`)