/**
 * Cálculo da quantidade de latas de tinta
 * @author Mike de oliveira
 */

const prompt = require('prompt-sync')()

let qlatas, parede, rendimento

console.clear()

console.log("cauculo da qauntidade de latas de tinta")
console.log()
parede = Number(prompt("informe a area da parede em (m²): "))
console.log(parede)
rendimento = Number(prompt("agora infome qual foi o rendimento da lata em (m²): "))
console.log(rendimento)
console.log()
qlatas = parede / rendimento
console.log()
console.log(`Você precisara de ${qlatas} lata(s) de tinta para pintar a parede. `)
console.log()
