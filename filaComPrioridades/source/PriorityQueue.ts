// source/PriorityQueue.ts
export enum Priority {
  MUITO_BAIXA = 1,
  BAIXA = 2,
  NORMAL = 3,
  ALTA = 4,
  MUITO_ALTA = 5,
}

export class PriorityQueue<T> {
  private capacity: number;
  private queues: Map<Priority, T[]>;

  constructor(capacity: number) {
    if (capacity <= 0) {
      throw new Error("Capacidade deve ser maior que zero");
    }

    this.capacity = capacity;
    this.queues = new Map<Priority, T[]>();

    this.queues.set(Priority.MUITO_BAIXA, []);
    this.queues.set(Priority.BAIXA, []);
    this.queues.set(Priority.NORMAL, []);
    this.queues.set(Priority.ALTA, []);
    this.queues.set(Priority.MUITO_ALTA, []);
  }

  size(): number {
    let total = 0;
    for (const [, queue] of this.queues) {
      total += queue.length;
    }
    return total;
  }

  isEmpty(): boolean {
    return this.size() === 0;
  }

  isFull(): boolean {
    return this.size() >= this.capacity;
  }

  clear(): void {
    for (const [priority] of this.queues) {
      this.queues.set(priority, []);
    }
  }

  enqueue(element: T, priority: Priority): void {
    if (this.isFull()) {
      throw new Error("Fila cheia: não é possível inserir novo elemento");
    }

    const queue = this.queues.get(priority);
    if (!queue) {
      throw new Error("Prioridade inválida");
    }

    queue.push(element);
  }

  peek(): T | undefined {
    const priorities = [
      Priority.MUITO_ALTA,
      Priority.ALTA,
      Priority.NORMAL,
      Priority.BAIXA,
      Priority.MUITO_BAIXA,
    ];

    for (const p of priorities) {
      const queue = this.queues.get(p)!;
      if (queue.length > 0) {
        return queue[0];
      }
    }

    return undefined;
  }

  dequeue(): T {
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
      const queue = this.queues.get(p)!;
      if (queue.length > 0) {
        return queue.shift() as T;
      }
    }

    throw new Error("Erro interno ao remover elemento");
  }
}
