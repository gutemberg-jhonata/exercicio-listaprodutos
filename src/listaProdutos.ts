import {question, questionFloat, questionInt} from 'readline-sync'

console.log("Exercício - Orientação a objetos")

// Forma de representar algo do mundo real (Entidade)
class Produto {
    private nome: string;
    private preco: number

    public getNome(): string {
        return this.nome;
    }

    public setNome(nome: string): void {
        this.nome = nome;
    }

    public getPreco(): number {
        return this.preco;
    }

    public setPreco(preco: number): void {
        this.preco = preco;
    }
}

let listaProdutos: Produto[] = []
let executaPrograma = true

while (executaPrograma) {
    console.log('1 - Adicionar mais um produto')
    console.log('2 - Listar produtos')
    console.log('3 - Excuir um produto pelo nome')
    console.log('0 - Sair do programa')

    const opcao = questionInt('Selecione uma opcao: ')

    switch (opcao) {
        case 1:
            adicionaProduto()
            break
        case 2:
            console.log(listaProdutos)
            break
        case 3:
            deletaProduto()
            break
        default:
            executaPrograma = false
    }
}

function adicionaProduto() {
    const nomeProduto = question('Nome do produto: ')
    const valorProduto = questionFloat('Valor do produto: ')

    const produto = new Produto()
    produto.setNome(nomeProduto)
    produto.setPreco(valorProduto)
            
    listaProdutos.push(produto)
}

function deletaProduto() {
    const nomeProduto = question('Nome do produto a ser excluido: ')
    const novaLista: Produto[] = [];
    for (let i = 0; i < listaProdutos.length; i++) {
        const produto = listaProdutos[i];

        if (produto.getNome() !== nomeProduto) {
            novaLista.push(produto)
        }
    }

    listaProdutos = novaLista
}