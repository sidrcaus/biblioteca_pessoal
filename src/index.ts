// Etapa 2 — Dados e exibição
// Criando os arrays para armazenar os dados dos livros
const titulos: string[] = [];
const autores: string[] = [];
const anos: number[] = [];
const paginas: number[] = [];
const lido: boolean[] = [];
const avaliacoes: number[] = [];

// Populando os dados iniciais (Incerção dos dados)
titulos.push('O Hobbit', 'Clean Code', '1984', 'Dom Casmurro', 'O Nome do Vento');
autores.push('J.R.R. Tolkien', 'Robert C. Martin', 'George Orwell', 'Machado de Assis', 'Patrick Rothfuss');
anos.push(1937, 2008, 1949, 1899, 2007);
paginas.push(310, 464, 328, 256, 662);
lido.push(true, true, false, true, false);
avaliacoes.push(5, 4, 0, 5, 0);

// Função para exibir a biblioteca usando os dados dos arrays
function exibirBiblioteca(): void {
    console.log("=== MINHA BIBLIOTECA ===");

    // Percorrendo os títulos e usando o índice 'i' para os outros arrays
    titulos.forEach((titulo, i) => {
        // Lógica de status usando if/else simples
        let status = "";
        if (lido[i] === true) {
            status = "LIDO (" + avaliacoes[i] + "/5)";
        } else {
            status = "PENDENTE";
        }

        // Exibição usando Template Strings
        console.log(`${i + 1}. "${titulo}" (${anos[i]}) - ${autores[i]} - ${paginas[i]} pag - ${status}`);
    });
}

// Chamada da função para testar no terminal CMD
exibirBiblioteca();

// Etapa 3 — Cadastro e remoção

// Função para adicionar um novo livro
function adicionarLivro(titulo: string, autor: string, ano: number, numPaginas: number): void {
    // Validação com 'if': ano e páginas devem ser positivos
    if (ano > 0 && numPaginas > 0) {
        titulos.push(titulo);
        autores.push(autor);
        anos.push(ano);
        paginas.push(numPaginas);
        
        // Regra do projeto: novos livros começam como não lidos (false) e nota zero
        lido.push(false);
        avaliacoes.push(0);
        
        console.log(`Sucesso: Livro "${titulo}" adicionado!`);
    } else {
        console.log("Erro: O ano e o número de páginas precisam ser maiores que zero.");
    }
}

// Função para remover um livro pelo índice
function removerLivro(indice: number): void {
    // Validação de segurança: verifica se o índice realmente existe
    if (indice >= 0 && indice < titulos.length) {
        // O método .splice(indice, 1) remove 1 item na posição indicada
        // Como são arrays paralelos, removemos de todos ao mesmo tempo
        titulos.splice(indice, 1);
        autores.splice(indice, 1);
        anos.splice(indice, 1);
        paginas.splice(indice, 1);
        lido.splice(indice, 1);
        avaliacoes.splice(indice, 1);
        
        console.log("Sucesso: Livro removido da biblioteca.");
    } else {
        console.log("Erro: Não existe nenhum livro no índice informado.");
    }
}

//  TESTES DE VALIDAÇÃO (Etapa 3) 

console.log("\n=== TESTANDO ADICIONAR LIVROS ===");
// Adicionando 2 livros conforme solicitado
adicionarLivro("O Alquimista", "Paulo Coelho", 1988, 208);
adicionarLivro("Sapiens", "Yuval Noah Harari", 2011, 464);

console.log("\n=== TESTANDO REMOVER LIVRO ===");
// Removendo 1 livro. Vamos remover o índice 2 (que originalmente é o livro "1984")
// Em arrays, a contagem começa no 0.
removerLivro(1); 

console.log("\n=== RESULTADO FINAL DA BIBLIOTECA ===\n");
// Chamamos a função de exibição para validar visualmente se as mudanças ocorreram
exibirBiblioteca();

//  Etapa 4 — Busca e filtros

function listarPorAutor(autorBusca: string): string[] {
    return autores
        // Criado um objeto com os dados de ambos os arrays 
        .map((autor, i) => ({ 
            nome: autor, 
            titulo: titulos[i]! 
        })) 
        // Filtrar pelo nome do autor 
        .filter(item => item.nome.toLowerCase() === autorBusca.toLowerCase())
        // Retorna apenas a string do título 
        .map(item => item.titulo);
}

// === TESTES DE VALIDAÇÃO DA ETAPA 4 ===

const resultadoAutor = listarPorAutor("Paulo Coelho"); 
console.log("\nLivros deste autor:", resultadoAutor); 

// Etapa 5 — Marcar como lido

function marcarComoLido(indice: number, avaliacao: number): void {
    // 1. Validacao do indice (Aula 04)
    if (indice < 0 || indice >= titulos.length) {
        console.log("Erro: Indice do livro nao encontrado.");
        return; 
    }

    // Validacao da Nota, deve ser entre 1 e 5 
    if (avaliacao >= 1 && avaliacao <= 5) {
        lido[indice] = true;
        avaliacoes[indice] = avaliacao;
        console.log("Sucesso: O livro " + titulos[indice] + " foi marcado como lido com nota " + avaliacao);
    } else {
        console.log("Erro: A avaliacao deve ser um numero entre 1 e 5.");
    }
}

// Listar Lidos 
function listarLidos(): string[] {
    return titulos.filter((_, i) => lido[i] === true);
}

// Listar Pendentes 
function listarPendentes(): string[] {
    return titulos.filter((_, i) => lido[i] === false);
}


// === TESTES DE VALIDAÇÃO DA ETAPA 5 ===
console.log("\n=== TESTE ETAPA 5 ===\n");

// Teste de sucesso
marcarComoLido(0, 4); 
// Teste de erro (nota fora do limite)
marcarComoLido(1, 10); 

console.log("Livros lidos:", listarLidos());
console.log("Livros pendentes:", listarPendentes());

//  Etapa 6 — Estatísticas

// Percentual de livros lidos
function percentualLidos(): string {
    const total = titulos.length;
    const totalLidos = lido.filter(status => status === true).length;
    
    const percentual = (totalLidos / total) * 100;
    return percentual.toFixed(2) + "%";
}

// Media de avaliacoes (Apenas dos livros ja lidos)
function mediaAvaliacoes(): string {
    // Filtro apenas as avaliacoes que sao maiores que 0 (ou seja, ja avaliadas)
    const notasLidos = avaliacoes.filter(nota => nota > 0);
    
    if (notasLidos.length === 0) return "0.00";

    // Soma das notas usando o REDUCE e dividimos pelo total de notas
    const soma = notasLidos.reduce((acc, nota) => acc + nota, 0);
    const media = soma / notasLidos.length;
    
    return media.toFixed(2);
}

// Total de paginas lidas
function totalPaginasLidas(): number {
    // O REDUCE para somar apenas as paginas onde o indice correspondente esta LIDO
    return paginas.reduce((acc, numPaginas, i) => {
        if (lido[i]) {
            return acc + numPaginas;
        }
        return acc;
    }, 0);
}

console.log("\n=== TESTE FINAL ETAPA 6 ===\n");
console.log("Percentual de livros lidos:", percentualLidos());
console.log("Media das avaliacoes:", mediaAvaliacoes());
console.log("Total de paginas lidas:", totalPaginasLidas());