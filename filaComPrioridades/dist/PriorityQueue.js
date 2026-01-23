// source/PriorityQueue.ts
// Níveis de prioridade (1 = muito baixa, 5 = muito alta)
export var PriorityLevel;
(function (PriorityLevel) {
    PriorityLevel[PriorityLevel["MUITO_BAIXA"] = 1] = "MUITO_BAIXA";
    PriorityLevel[PriorityLevel["BAIXA"] = 2] = "BAIXA";
    PriorityLevel[PriorityLevel["NORMAL"] = 3] = "NORMAL";
    PriorityLevel[PriorityLevel["ALTA"] = 4] = "ALTA";
    PriorityLevel[PriorityLevel["MUITO_ALTA"] = 5] = "MUITO_ALTA";
})(PriorityLevel || (PriorityLevel = {}));
export class PriorityQueue {
    constructor(maxCapacity) {
        if (maxCapacity <= 0) {
            throw new Error("Capacidade máxima deve ser maior que zero.");
        }
        this.maxCapacity = maxCapacity;
        this.currentSize = 0;
        this.queues = new Map();
        // Inicializa uma fila (array) para cada prioridade
        this.queues.set(PriorityLevel.MUITO_BAIXA, []);
        this.queues.set(PriorityLevel.BAIXA, []);
        this.queues.set(PriorityLevel.NORMAL, []);
        this.queues.set(PriorityLevel.ALTA, []);
        this.queues.set(PriorityLevel.MUITO_ALTA, []);
    }
    // Verifica se a fila está vazia
    isEmpty() {
        return this.currentSize === 0;
    }
    // Verifica se a fila está cheia
    isFull() {
        return this.currentSize >= this.maxCapacity;
    }
    // Retorna a quantidade total de elementos
    size() {
        return this.currentSize;
    }
    // Insere um elemento respeitando a prioridade
    enqueue(element, priority) {
        if (this.isFull()) {
            throw new Error("Fila com prioridade está cheia.");
        }
        const queue = this.queues.get(priority);
        if (!queue) {
            throw new Error("Prioridade inválida.");
        }
        queue.push(element);
        this.currentSize++;
    }
    // Remove e retorna o primeiro elemento considerando maior prioridade
    dequeue() {
        if (this.isEmpty()) {
            throw new Error("Fila com prioridade está vazia.");
        }
        // Começa da maior prioridade para a menor
        const prioritiesInOrder = [
            PriorityLevel.MUITO_ALTA,
            PriorityLevel.ALTA,
            PriorityLevel.NORMAL,
            PriorityLevel.BAIXA,
            PriorityLevel.MUITO_BAIXA,
        ];
        for (const p of prioritiesInOrder) {
            const queue = this.queues.get(p);
            if (queue.length > 0) {
                this.currentSize--;
                return queue.shift();
            }
        }
        // Não deveria chegar aqui se currentSize estiver correto
        throw new Error("Erro interno: fila inconsistente.");
    }
    // Retorna o próximo elemento a ser removido (sem remover)
    peek() {
        if (this.isEmpty()) {
            return null;
        }
        const prioritiesInOrder = [
            PriorityLevel.MUITO_ALTA,
            PriorityLevel.ALTA,
            PriorityLevel.NORMAL,
            PriorityLevel.BAIXA,
            PriorityLevel.MUITO_BAIXA,
        ];
        for (const p of prioritiesInOrder) {
            const queue = this.queues.get(p);
            if (queue.length > 0) {
                return queue[0];
            }
        }
        return null;
    }
    // Esvazia completamente a fila
    clear() {
        this.queues.set(PriorityLevel.MUITO_BAIXA, []);
        this.queues.set(PriorityLevel.BAIXA, []);
        this.queues.set(PriorityLevel.NORMAL, []);
        this.queues.set(PriorityLevel.ALTA, []);
        this.queues.set(PriorityLevel.MUITO_ALTA, []);
        this.currentSize = 0;
    }
}
