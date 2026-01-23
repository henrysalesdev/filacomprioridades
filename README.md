# Implementação de Fila com Prioridades em TypeScript 

## Identificação dos membros da equipe

- Aluno : Paulo Henrique Sales Lima.

## Descrição breve da classe principal

A classe PriorityQueue<T> implementa uma fila com cinco níveis de prioridade: muito baixa, baixa, normal, alta e muito alta.​
Ela controla uma capacidade máxima total informada no construtor e organiza internamente uma fila para cada prioridade, garantindo que sempre sejam removidos primeiro os elementos de maior prioridade e, dentro de cada nível, na ordem em que foram inseridos (comportamento de fila FIFO).​
A classe oferece métodos para inserir elementos com prioridade (enqueue), remover o próximo elemento (dequeue), verificar se a fila está vazia ou cheia, obter a quantidade total de elementos, consultar o próximo elemento sem removê‑lo (peek) e esvaziar toda a estrutura.

## Como executar o código

1. Instalar as dependências do projeto (incluindo TypeScript):

   npm install
   
2. Compilar os arquivos TypeScript da pasta `source` para a pasta `dist`:

   npm run build
   
(este comando chama o compilador tsc usando o tsconfig.json configurado com target: "es6", module: "es6" e outDir: "./dist").

3. Executar o código compilado (arquivo de testes, por exemplo `dist/main.js`):

 
   npm start

   (conforme o script configurado no `package.json`, que roda `node dist/main.js`). 

4. A saída no terminal mostrará os testes de uso da fila com prioridades, incluindo inserções, remoções e verificações de estado (cheia, vazia, quantidade de elementos). 
