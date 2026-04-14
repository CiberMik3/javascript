/**
 * Cálculo do volume de um aquário
 * @author Mike de oliveira
 */

//importat pacotes
const prompt = require('prompt-sync')()

//variaveis 
let comprimento, largura, altura, volume

//entrada

comprimento = Number(prompt("Digite qual o comprimento do aquario: "))
largura = Number(prompt("Digite qual é a largura: "))
altura = Number(prompt("Digite qaul é a altura: "))

volume = (comprimento * largura * altura) / 1000

console.log  (`O volume é: ${volume}`)
