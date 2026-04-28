/**
 * jogo do dado
 * Exemplo da estrutura do while
 * @author Mike de oliveira
 */

const prompt = require('prompt-sync')()
const colors = require('colors')

let novoJogo = "n"

do {
    console.clear()
    console.log("Jogo do dado")
    prompt("Precione [Enter] para jogar o dado...".bgGreen)
    console.log()
    console.log(`Face do dado: ${Math.ceil(Math.random() * 6)}`)
    console.log()
    novoJogo = prompt("Deseja jogar novamente(S/N)? ")
} while (novoJogo === "s" || "S")