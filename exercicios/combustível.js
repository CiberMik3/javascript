/**
 * Cálculo do consumo de combustível
 * @author Mike de oliveira
 */

const prompt = require('prompt-sync')()

//variaveis
let distancia, litros, consumo

//entrada
distancia = Number(prompt("qual a distancia percorrida? "))
litros = Number(prompt("quanto de combustivel foi usado?"))

//processamento
consumo = distancia / litros 

//saida
console.log(`a quantidade de combustivel consumido foi: ${consumo}Km/l `)