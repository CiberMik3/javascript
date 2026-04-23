/**
 * Exemplo de uso da estrutura switch case
 * @author MIke de oliveira
 */

const prompt = require('prompt-sync')()

let opcao

console.clear()
console.log("Menu de opções: ")
console.log()

console.log("1. Cadastro de clientes")
console.log("2. Cadastro de produtos")
console.log("3. Relatórios")

opcao = Number(prompt("Digite a opção desejada: "))

// Uso da estrutura switch case para tratamento do valor digitado.
// Obs: Esta estrutura aceita variaveis numericas do tipo Números inteiros e caracteres unicos,
// a opção dentro da estrutura o default e opcional

switch (opcao) {
    case 1:
        console.clear()
        console.log("Tela de cadastro de clientes")
        break
    case 2:
        console.clear()
        console.log("Tela de cadastro de produtos")
        break
    case 3:
        console.clear()
        console.log("Impressao de relatorios")
        break
    default:
        console.clear()
        console.log("Opção invalida")
        break
}