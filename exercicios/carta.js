/**
 * Sorteio de uma carta
 * Exemplo de uso de Array para simplificar o codigo
 * @author Mike de oliveira
 */

const prompt = require('prompt-sync')()
const color = require('colors')

let nipes = ["♠", "♥", "♦", "♣"]
let faces = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
let novoJogo = "n"
console.clear()


do {
    console.clear()
console.log("Sorteio de uma carta - ♠ ♥ ♦ ♣ ")
prompt("Precione a tecla [ENTER] para sortear uma carta")

let nipe = nipes[Math.floor(Math.random() * 4)]// 0 1 2 3
let face = faces[Math.floor(Math.random() * 13)]// 0 1 ... 12


////console.log(`${faces[0]}${nipes[2]}`)
console.log() 



console.log(`${face} ${nipe}`)

if (nipe === "♠" || "♣" ) {
    color.black
} else  {(nipe === "♥" || "♦") 
    color.red
} 

console.log()
novoJogo = prompt("Deseja jogar novamente? (s/n)  ")
} while (novoJogo === "s" || novoJogo === "S")
