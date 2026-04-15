/**
 * Cálculo da área de um terreno:
 * @author Mike de oliveira
 */

const prompt = require('prompt-sync')()

console.clear()

let comprimento, largura, area

console.log("app para caucular a área de um terreno")

comprimento = Number(prompt("Informe o comprimento do terreno: "))
console.log(comprimento)
largura = Number(prompt("Agora informe a largura do terreno: "))
console.log(largura)

area = comprimento * largura

console.log(`a area do terreno é de ${area}m²`)