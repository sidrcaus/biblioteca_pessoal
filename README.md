1° Etapa

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

2° Etapa

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
