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

    // Lógica principal
    nome = prompt("Nome: ")
    idade = Number(prompt("Idade: "))
    peso = Number(prompt("Peso: "))
    altura = Number(prompt("Altura: "))
    vip = prompt("Aluno VIP (s/n)?: ")
    if (vip === "s") {
        vip = true
    } else {
        vip = false
    }

    // Adicionar os dados na matriz
    alunos.push([
        matricula,
        nome,
        idade,
        peso,
        altura,
        vip
    ])

    matricula++ // Auto incremento da matricula

    console.log()
    console.log("Aluno(a) cadastrado(a) com sucesso")


    prompt("ENTER...")

}

// CRUD - Create ( Fim ) <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<


// CRUD - Read >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
function consultarAlunos() {

    // Sub Menu
    do {
        console.clear()
        console.log("=== CONSULTA DE ALUNOS ===".underline)
        console.log()
        console.log("1. Buscar aluno")
        console.log("2. Listar alunos")
        console.log("0. Voltar")

        opcaoConsulta = Number(prompt("Escolha: "))


        switch (opcaoConsulta) {
            case 1:
                buscarAluno()
                break;
            case 2:
                listarAlunos()
                break
            case 0:
                break
            default:
                console.log("")
                console.log("Opção invalida")
                prompt("Enter...")
        }

    } while (opcaoConsulta !== 0);

    // Buscar aluno
    function buscarAluno() {
        console.clear()
        console.log("=== BUSCAR ALUNO ===")
        console.log()

        Prompt("Enter...")
    }

    function listarAlunos() {
        console.clear()
        console.log("=== LISTA DE ALUNOS ===")
        console.log()

        // Validação (se nenhum alunos cadastrado)
        //// lengh = tamanho do vetor
        if (alunos.length === 0) {
            console.log("Nenhum aluno cadastrado".bgRed)
        } else {
            // console.table(alunos)
            // Ordenar os nomes (criar copia do array)
            let alunosOrdenados = [...alunos]
            alunosOrdenados.sort((a, z) => {
                return a[1].localeCompare(z[1])
            })

            // Criando um cabeçario para a tabela
            //console.table(alunosOrdenados)
            let listaAlunos = alunosOrdenados
            .map((a) => {
                return {
                    Matrícula: a[0],
                    Nome: a[1],
                    idade: a[2],
                    peso: a[3],
                    altura: a[4],
                    VIP: a[5]
                }
            })
            console.table(listaAlunos)
        }

        prompt("Enter...")
    }
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
    do {
        //Sub Menu
        console.clear()
        console.log("=== RELATÓRIOS ===".underline)
        console.log()
        console.log("1. Alunos VIP ")
        console.log("2. Média de idade")
        console.log("3. % IMC dos alunos")
        console.log("0. Voltar")

        opcaoRelatorio = Number(prompt("Escolha: "))


        switch (opcaoRelatorio) {
            case 1:
                gerarRelatorioVip()
                break;
            case 2:
                gerarRelatorioMediaIdade()
                break
            case 3:
                gerarRelatorioMediaIdade()
                break
            case 0:
                gerarRelatorioImc()
                break
            default:
                console.log("")
                console.log("Opção invalida")
                prompt("Enter...")
        }

    } while (opcaoRelatorio !== 0);

    // Relatorio de alunos vip
    function gerarRelatorioVip() {
        console.clear()
        console.log("=== ALUNOS VIP ===".underline)
        console.log()

        prompt("ENTER...")
    }
    // Relatorio média de aidade dos alunos
    function gerarRelatorioMediaIdade() {
        console.clear()
        console.log("=== MEDIA DE IDADE ===".underline)
        console.log()

        prompt("ENTER...")
    }
    // Relatorio de percentural de IMC
    function gerarRelatorioImc() {
        console.clear()
        console.log("=== IMC DOS ALUNOS ===".underline)
        console.log()

        prompt("ENTER...")
    }
}
// Relatorios ( Fim ) <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// Iniciar o sistema
mainAcademia()