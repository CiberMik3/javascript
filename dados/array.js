/**
 * Estrutura de dados - Array( vetor )
 * @author Mike de oliveira
 */
const colors = require('colors')

console.clear()

// A linha abaixo cria um array (vetor)
let alunos = ["Vitor", "Tania", "Pedro", "Maria", "Vivi", "Ana"]

console.log("=======================================")
console.log("               ARRAY")
console.log("=======================================")

console.log()
console.log(alunos)
console.log(`Um array é do tipo: ${typeof (alunos)}`)

// Obtendo o tamanho do Array ( length )
console.log(`Tamanho do array: ${alunos.length}`)
console.log()
// Adicionando dados em uma array ( CRUD Create )
console.log()
console.log("======= CRUD Create =======".underline)
console.log()
// O metodo push() adiciona de forma segura um dado ao array
console.log()
alunos.push("Jorge")
console.log(alunos)
console.log(`Tamanho do array: ${alunos.length}`)
console.log()

// Exebindo dados de um array ( CRUD Read )
console.log()
console.log("======= CRUD Read =======".underline)
console.log()
console.log(alunos)
console.table(alunos)

// Exibindo um dado expecifico do ( array )
console.log(`Aluno[2]: ${alunos[2]}`)

// Alterando dados de uma array ( CRUD Update )
// Usar o indice para alterar um dado do vetor
console.log()
console.log("======= CRUD Update =======".underline)
console.log()
alunos[0] = "Victor"
alunos[4] = "Viviane"
console.table(alunos)

// Excluindo dados de uma array ( CRUD Delete )
console.log()
console.log("======= CRUD Delete =======".underline)
console.log()
// Delete exclui de forma segura o dado de um array
delete alunos[1]
console.table(alunos)
console.log(`Tamanho do arrau: ${alunos.length}`)

console.log("======= Percorrendo um array =======".underline)


//          [0][1][2][3][4][5]
let notas = [3, 8, 5, 0, 2, 7]
console.log()
console.log(notas)
console.table(notas)

// Percorrendo um array com o uso do laço for
console.log("Laço for")
for (let i = 0; i < notas.length; i++) {
    console.log(notas[i])
}

// Simplificação do laço for ( forEach )
console.log("Laço forEach ".underline)
notas.forEach((notas) => {
    console.log(notas)
})

// Manipulação e filtragem de dados de um array

console.log()
console.log("======= Manipulação e filtragem de dados =======".underline)
console.log()
console.log("Exemplo 1: Adicionar 1 ponto as notas dos alunos")
console.log()
let notasAtualizadas = notas.map((na) => {
    return na + 1
})
console.log(`Notas originais: ${notas}`)
console.log(`Notas atualizadas: ${notasAtualizadas}`)
console.log()
console.log("Exemplo 2: Conversao de um sistema de notas(Números) para letras(caracteres)")
/*
 NA - Não atendeu (notas < 5)
 PA - Parcialmente atendido (nota entre 5 e 7)
  A - Atendido (nota > 7)
*/

let notasConvertidas = notas.map((nc) => {
    if (nc < 5) {
        return "NA"
    } else if (nc > 7){
    return "A"
} else {
    return "PA"
}
})
console.log()
console.log(`Notas originais ${notas}`)
console.log(`Notas convertidas ${notasConvertidas}`)
console.log()

// Nova estrutura de dados
let alunosDC = [
    {
        nome: "Bruce",
        idade: 43,
        bolsista: false
    },
    {
        nome: "Clark",
        idade: 45,
        bolsista: false
    },
    {
        nome: "Diana",
        idade: 36,
        bolsista: false
    },
    {
        nome: "Barry",
        idade: 23,
        bolsista: true
    }
]
console.log()
console.log("======= Estrutura de dados usando array =======".underline)
console.log()
console.log(alunosDC)
console.table(alunosDC)

// Filtros
console.log()
console.log("Filtros: Exemplo 1: Alunos bolsistas")
console.log(alunosDC.filter((b) => {
    return b.bolsista === true
}))

console.log()
console.log("Filtros: Exemplo 2: Alunos com idade superior a 40 anos")
console.log(alunosDC.filter((i) => {
    return i.idade > 40
}))

console.log()
console.log("Filtros: Exemplo 3: Ordenar os alunos ")
//Dica: cirar uma coópia do array original para não modificar o index ([...array] criar uma cópia) "RELATORIOS"
let alunosOrdenados = [...alunosDC]
alunosOrdenados.sort((a, z) => {
    return (a.nome.localeCompare(z.nome))
})
console.table(alunosOrdenados)