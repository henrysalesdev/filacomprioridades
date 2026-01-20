// source/PriorityQueue.ts
export var Priority;
(function (Priority) {
    Priority[Priority["MUITO_BAIXA"] = 1] = "MUITO_BAIXA";
    Priority[Priority["BAIXA"] = 2] = "BAIXA";
    Priority[Priority["NORMAL"] = 3] = "NORMAL";
    Priority[Priority["ALTA"] = 4] = "ALTA";
    Priority[Priority["MUITO_ALTA"] = 5] = "MUITO_ALTA";
})(Priority || (Priority = {}));
export class PriorityQueue {
    constructor(capacity) {
        if (capacity <= 0) {
            throw new Error("Capacidade deve ser maior que zero");
        }
        this.capacity = capacity;
        this.queues = new Map();
        this.queues.set(Priority.MUITO_BAIXA, []);
        this.queues.set(Priority.BAIXA, []);
        this.queues.set(Priority.NORMAL, []);
        this.queues.set(Priority.ALTA, []);
        this.queues.set(Priority.MUITO_ALTA, []);
    }
    size() {
        let total = 0;
        for (const [, queue] of this.queues) {
            total += queue.length;
        }
        return total;
    }
    isEmpty() {
        return this.size() === 0;
    }
    isFull() {
        return this.size() >= this.capacity;
    }
    clear() {
        for (const [priority] of this.queues) {
            this.queues.set(priority, []);
        }
    }
    enqueue(element, priority) {
        if (this.isFull()) {
            throw new Error("Fila cheia: não é possível inserir novo elemento");
        }
        const queue = this.queues.get(priority);
        if (!queue) {
            throw new Error("Prioridade inválida");
        }
        queue.push(element);
    }
    peek() {
        const priorities = [
            Priority.MUITO_ALTA,
            Priority.ALTA,
            Priority.NORMAL,
            Priority.BAIXA,
            Priority.MUITO_BAIXA,
        ];
        for (const p of priorities) {
            const queue = this.queues.get(p);
            if (queue.length > 0) {
                return queue[0];
            }
        }
        return undefined;
    }
    dequeue() {
        if (this.isEmpty()) {
            throw new Error("Fila vazia: não há elementos para remover");
        }
        const priorities = [
            Priority.MUITO_ALTA,
            Priority.ALTA,
            Priority.NORMAL,
            Priority.BAIXA,
            Priority.MUITO_BAIXA,
        ];
        for (const p of priorities) {
            const queue = this.queues.get(p);
            if (queue.length > 0) {
                return queue.shift();
            }
        }
        throw new Error("Erro interno ao remover elemento");
    }
}
