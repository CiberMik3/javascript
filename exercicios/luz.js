/**
 * Cálculo do valor da conta de luz
 * @author Mike de oliveira
 */

const prompt = require('prompt-sync')()

let consumo, tarifa, conta

console.log("app para fazer o cálculo do valor de conta de luz")

consumo = Number(prompt("Qual é o consumo total da luz em kWh?: "))
console.log(consumo)
tarifa = Number(prompt("Agora qual o valor da tarifa?"))
console.log(tarifa)
