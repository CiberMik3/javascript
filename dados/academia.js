/**
 * Sistema para gestão de academia
 * Estudo de array com estrutura de dados
 * @author Mike de oliveira
 */

// Importação de pacotes
const prompt = require('prompt-sync')()
const colors = require('colors')

// Variaveis globais
let nome, idade, peso, altura, vip
let matricula = 1 // Contador de matricula
let opcaoMenu, opcaoConsulta, opcaoRelatorio

// Array principal (estrutura de dados)
let alunos = []
/*
    Estrutura de dados
    [0] Matricula
    [1] Nome
    [2] Idade1
    [3] Peso
    [4] Altura
    [5] Vip
*/

// Main >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>v
function mainAcademia() {
    // Menu principal
    do {
        console.clear()
        console.log(" _____           _           _           __ _____")
        console.log("|  _  |___ ___ _| |___ _____|_|___    __|  |   __|")
        console.log("|     |  _| .'| . | -_|     | | .'|  |  |  |__   |")
        console.log("|__|__|___|__,|___|___|_|_|_|_|__,|  |_____|_____|")
        console.log("")
        console.log("1. Cadastrar aluno")
        console.log("2. Consultar alunos")
        console.log("3. Alterar aluno")
        console.log("4. Excluir aluno")
        console.log("5. Ficha do aluno")
        console.log("6. Relatórios")
        console.log("0. Sair")
        console.log("")

        opcaoMenu = Number(prompt("Escolha: "))

        switch (opcaoMenu) {
            case 1:
                cadrastarAluno()
                break;
            case 2:
                consultarAlunos()
                break;
            case 3:
                editarAluno()
                break;
            case 4:
                excluirAluno()
                break;
            case 5:
                gerarFichaAluno()
                break;
            case 6:
                gerarRelatorios()
                break;
            case 0:
               console.log("Ecerrando sistema.")
                break;
            default:
                console.log("Opção invalida")
                prompt("ENTER.")
                break;
        }
    } while (opcaoMenu !== 0)
}
// Main ( Fim ) <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<


// CRUD - Create >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
function cadrastarAluno() {
    console.clear()
    console.log("=== CADASTRO DE ALUNOS ===".underline)
    console.log()
    prompt("ENTER...")

}

// CRUD - Create ( Fim ) <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<


// CRUD - Read >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
function consultarAlunos() {

}
// CRUD - Read ( Fim ) <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<


// CRUD - Update >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
function editarAluno() {
    console.clear()
    console.log("=== ALTERAR ALUNO ===".underline)
    console.log()
    prompt("ENTER...")
}
// CRUD - Uptade ( Fim ) <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<


// CRUD - Delete >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
function excluirAluno() {
    console.clear()
    console.log("=== EXCLUIR ALUNO ===".underline)
    console.log()
    prompt("ENTER...")
}
// CRUD - Delete ( Fim ) <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<


// Ficha do aluno >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
function gerarFichaAluno() {
    console.clear()
    console.log("=== FICHA DO ALUNO ===".underline)
    console.log()
    prompt("ENTER...")
}
// Ficha do aluno ( Fim ) <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<


// Relatorios >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
function gerarRelatorios() {
    console.clear()
    console.log("=== RELATORIOS ===".underline)
    console.log()
    prompt("ENTER...")
}
// Relatorios ( Fim ) <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// Iniciar o sistema
mainAcademia()