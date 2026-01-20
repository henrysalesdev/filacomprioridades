// source/main.ts
import { PriorityQueue, Priority } from "./PriorityQueue.js";
function main() {
    const fila = new PriorityQueue(5);
    console.log("Fila está vazia?", fila.isEmpty());
    console.log("Fila está cheia?", fila.isFull());
    fila.enqueue("tarefa muito baixa 1", Priority.MUITO_BAIXA);
    fila.enqueue("tarefa alta 1", Priority.ALTA);
    fila.enqueue("tarefa normal 1", Priority.NORMAL);
    fila.enqueue("tarefa muito alta 1", Priority.MUITO_ALTA);
    fila.enqueue("tarefa baixa 1", Priority.BAIXA);
    console.log("Quantidade de elementos:", fila.size());
    console.log("Fila está cheia?", fila.isFull());
    console.log("Próximo a ser removido (peek):", fila.peek());
    console.log("Removendo elementos na ordem de prioridade:");
    while (!fila.isEmpty()) {
        const removido = fila.dequeue();
        console.log("Removido:", removido, " | Restantes:", fila.size());
    }
    console.log("Fila esvaziada. isEmpty:", fila.isEmpty());
}
main();
