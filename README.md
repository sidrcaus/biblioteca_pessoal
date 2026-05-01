1° Etapa - inicio do projeto

Guia de como iniciar um projeto.

Criar pasta, posso usar o "git init" no cmd dentro do VSCode.

Digitar "npm i -d typescript" - para Instalar o TypeScript como uma dependência de desenvolvimento.

Digitar "npm init -y" - para inicializar um projeto Node.js criando automaticamente o arquivo package.json com todas as configurações padrão.

.gitignore (nesse "file" acrescenta o nome "node_modules" e "dist", para não subir no github, pode acrescentar qualquer arquivo que queira).

Digitar "npx tsc --init" - para Criar o arquivo de configuração do TypeScript, o tsconfig.json.

Descomentar (rootDir e outDir) no tsconfig para orientar o sistema de onde deve sair os arquivos. 
    rootDir: Define onde está o seu código fonte TypeScript.
    outDir: Define para onde vão os arquivos JavaScript gerados.

Criar pasta "src".

Criar arquivo na pasta "src"... nome do arquivo "index.ts". (criar pasta (folder) e dentro da pasta criar o arquivo(file) com o nome index.ts)

2° Etapa - Dados e Exibição

Estruturação com Arrays Paralelos
Foi declarado arrays distintos para cada atributo do livro (títulos, autores, anos, etc.).
Colocar as const identificando se é string, number ou boolean.
Se atentar na ordem das informações, primeiro livro deve sempre esta em primeiro e assim por diante.

Carga de Dados Iniciais
Utilizado o método .push() para inserir os dados iniciais nos arrays.

Função de Exibição com forEach
Implementado a função exibirBiblioteca() utilizando o método .forEach().
O forEach percorre o array de títulos e utiliza o parâmetro de índice (i) para buscar as informações correspondentes nos demais arrays.
A formatação da saída no console utiliza Template Strings (uso de crases ` e ${}) para concatenar os dados de forma legível.

Automação e Execução
Testando o programa "npx ts-node src/index.ts".

Ambiente: O uso do npx ts-node permite executar o código TypeScript diretamente no Node.js sem a necessidade de uma compilação manual prévia para JavaScript.

Etapa 3 — Cadastro e Remoção

Nesta etapa, o foco foi o desenvolvimento das funções de manipulação da biblioteca, aplicando conceitos de controle de fluxo e gerenciamento de arrays.

Cadastro com Validação
Criado a função adicionarLivro que recebe os dados do novo título como parâmetros.

Utilizado o desvio condicional if para validar se o ano de publicação e o número de páginas são valores positivos antes de permitir o cadastro.

Definido que todo livro novo entra no sistema com o status lido como false e avaliacao zero por padrão.

Remoção Sincronizada
Implementado a função removerLivro utilizando o método .splice (indice, 1).

Como foi criado com arrays paralelos, a função foi projetada para remover o item de todos os 6 arrays simultaneamente. Isso garante que a relação entre título, autor e demais dados não se perca (não ocorra desaliamento).

Adicionado uma verificação de intervalo para garantir que o índice informado pelo usuário realmente existe na biblioteca antes de tentar a remoção.

Testes de Unidade
Realizado testes manuais adicionando novos volumes e removendo itens específicos para validar se a lista exibida no terminal reflete corretamente as alterações em tempo real.

"Iniciando adicionar pelo terminal"

-git status (Ver oq está em vermelho é oque se tem de novo no codigo sem estar comitado)

-git checkout -b "nome da branch sem as aspas" (Fator importante para não colocar direto na master PS:Fez errados os processos anteriores, mas o Filho ajudou a partir daqui  kkkk )

-git add src/index.ts (o "src/index.ts" altera de acordo com o arquivo q deseja colocar em especifico caso queira todos q foram alterados basta colocar git add . depois confirmar com git status para verificar se deu certo.)

-git commit -m "nome do commit que deseja colocar, importante deixar as aspas"

-git push origin "nome da branch crida sem as aspas" (Para finalizar o processo, assim enviando para o servidor no caso repositorio do GitHub)

-git status (Para confirmar tudo e ver se enviou certo).

Etapa 4 — Busca e filtros

Criado um objeto com os dados de ambos os arrays utilizando "map" e filtrado pelo nome do autor

Etapa 5 - Marcar como lido

Nesta etapa, implementei a lógica de gerenciamento de leitura dos livros, focando em estruturas de controle e integridade de dados.

Implementação da função marcarComoLido que utiliza estruturas condicionais (if/else) para validar a entrada de dados. A função garante que apenas avaliações entre 1 e 5 sejam aceitas, prevenindo inconsistências no sistema.

Utilização do método avançado de array .filter() para extrair dinamicamente os títulos dos livros com base em seu estado atual (Lidos ou Pendentes).

Manutenção da sincronia entre os arrays de títulos, status de leitura e avaliações através do controle de índices.

Etapa 6 — Estatísticas e Programação Funcional

Nesta etapa final, implementei a extração de métricas de desempenho da biblioteca, consolidando o uso de métodos avançados de manipulação de arrays

Utilização do método .reduce() para realizar a acumulação de valores (páginas e avaliações) de forma funcional, utilizando o parâmetro acc (acumulador) para processar os dados sem a necessidade de variáveis globais de controle.

Aplicação de filtros internos no reduce e no filter para garantir que as estatísticas (como média de notas) considerem apenas os livros efetivamente lidos e avaliados.

Uso do método .toFixed(2) para garantir que as saídas numéricas (médias e percentuais) sigam o padrão de precisão técnica necessário para a interface do usuário.

Manipulação de múltiplos arrays paralelos através de índices para correlacionar títulos, status de leitura e contagem de páginas em uma única operação.