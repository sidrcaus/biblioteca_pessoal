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