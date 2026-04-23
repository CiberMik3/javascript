/**
 * Estudo da estrutura de controle if else
 * Cáuculo da média
 * @author MIke de oliveira
 */

//Importaçao de pacotes

const color = require('colors')
const prompt = require('prompt-sync')()

//variaveis

let nota1, nota2, media


console.clear()
console.log("Cauculo da media".rainbow)
console.log()
//entrada

nota1 = Number(prompt("Digite a nota 1: "))
nota2 = Number(prompt("Digite a nota 2: "))

//Processamento

media = (nota1 + nota2) / 2

//saida

console.log()
console.log(`Média: ${media.toFixed(1)}`)

//Uso da estrutura if else para determinar se o aluno esta aprovado ou reprovado

console.log()
if (media < 5) {
    console.log("REPROVADO".red)
} else {
    console.log("APROVADO".green)
}
console.log()