# Fila com Prioridades em TypeScript

Implementação de uma fila com prioridades em TypeScript, com cinco níveis de prioridade e capacidade máxima configurável. 

## Integrantes

- Nome : Paulo Henrique Sales Lima.

## Descrição da estrutura

Este projeto implementa um TDA de **fila com prioridades** usando a classe `PriorityQueue<T>`, que organiza os elementos em cinco níveis de prioridade: 

1. Muito baixa  
2. Baixa  
3. Normal  
4. Alta  
5. Muito alta  

A estrutura garante que, ao remover elementos, sempre sejam retornados primeiro aqueles com maior prioridade, mantendo a ordem de chegada dentro de cada nível. 

### Funcionalidades da classe

A `PriorityQueue<T>` oferece os seguintes métodos principais: 

- `enqueue(element: T, priority: PriorityLevel): void`  
  Insere um elemento na fila respeitando o nível de prioridade informado (lança erro se a fila estiver cheia). 

- `dequeue(): T`  
  Remove e retorna o próximo elemento considerando sempre a maior prioridade disponível (lança erro se a fila estiver vazia). 

- `peek(): T | null`  
  Retorna o próximo elemento a ser removido sem retirá‑lo da fila. 
- `isEmpty(): boolean`  
  Informa se a fila está vazia. 

- `isFull(): boolean`  
  Informa se a fila atingiu a capacidade máxima configurada. 

- `size(): number`  
  Retorna a quantidade total de elementos atualmente na fila. 

- `clear(): void`  
  Esvazia completamente a fila, removendo todos os elementos. 

## Estrutura do projeto

```text
filaComPrioridades/
  package.json
  tsconfig.json
  source/
    PriorityQueue.ts
    teste.ts
  dist/
    PriorityQueue.js
    teste.js
```

O TypeScript compila os arquivos da pasta `source` para a pasta `dist`, conforme configurado no `tsconfig.json`. 
## Tecnologias usadas

- TypeScript (compilado para ES6 Modules). 
- Node.js para execução dos arquivos JavaScript gerados. 
## Como executar o projeto

### Pré-requisitos

- Node.js instalado  
- npm instalado  

### Passos para rodar o exemplo

1. Clonar o repositório:

   ```bash
   git clone https://github.com/henrysalesdev/filacomprioridades.git
   cd filacomprioridades
   ```

2. Instalar as dependências (TypeScript):

   ```bash
   npm install
   ```

3. Compilar o código TypeScript:

   ```bash
   npm run build
   ```
   Isso irá gerar os arquivos `.js` na pasta `dist`. 

4. Executar o exemplo de uso:

   ```bash
   npm run start
   ```
   O script `start` executa o arquivo `dist/teste.js`, que contém exemplos de utilização da `PriorityQueue` com diferentes prioridades. 

## Exemplo de uso (arquivo `source/teste.ts`)

O arquivo `teste.ts` demonstra a criação de uma fila com capacidade máxima, inserção de elementos com diferentes prioridades e remoção na ordem correta:

- Criação de uma fila `PriorityQueue<string>` com capacidade máxima de 5 elementos.  
- Inserção de elementos com prioridades Muito baixa, Normal, Alta e Muito alta.  
- Impressão do tamanho da fila, verificação se está cheia ou vazia, visualização do próximo elemento (peek) e remoção na ordem correta de prioridade. 

Você pode adaptar o arquivo `teste.ts` para criar mais cenários de teste, como tentar inserir além da capacidade, remover de uma fila vazia ou esvaziar a fila usando o método `clear`. 
