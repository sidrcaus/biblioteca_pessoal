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
-git add src/index.ts (o "src/index.ts" altera de acordo com o arquivo q deseja colocar em especifico caso queira todos q foram alterados basta colocar git add.)
-git commit -m "nome do commit que deseja colocar, importante deixar as aspas"
-git push origin "nome da branch crida sem as aspas" (Importante somente para o primeiro commit da branch precisa do origin, após ele pode se manter somente um git push)
-git status (Para confirmar tudo e ver se enviou certo)