// source/PriorityQueue.ts

// Níveis de prioridade (1 = muito baixa, 5 = muito alta)
export enum PriorityLevel {
  MUITO_BAIXA = 1,
  BAIXA = 2,
  NORMAL = 3,
  ALTA = 4,
  MUITO_ALTA = 5,
}

export class PriorityQueue<T> {
  private queues: Map<PriorityLevel, T[]>;
  private maxCapacity: number;
  private currentSize: number;

  constructor(maxCapacity: number) {
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
  isEmpty(): boolean {
    return this.currentSize === 0;
  }

  // Verifica se a fila está cheia
  isFull(): boolean {
    return this.currentSize >= this.maxCapacity;
  }

  // Retorna a quantidade total de elementos
  size(): number {
    return this.currentSize;
  }

  // Insere um elemento respeitando a prioridade
  enqueue(element: T, priority: PriorityLevel): void {
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
  dequeue(): T {
    if (this.isEmpty()) {
      throw new Error("Fila com prioridade está vazia.");
    }

    // Começa da maior prioridade para a menor
    const prioritiesInOrder: PriorityLevel[] = [
      PriorityLevel.MUITO_ALTA,
      PriorityLevel.ALTA,
      PriorityLevel.NORMAL,
      PriorityLevel.BAIXA,
      PriorityLevel.MUITO_BAIXA,
    ];

    for (const p of prioritiesInOrder) {
      const queue = this.queues.get(p)!;
      if (queue.length > 0) {
        this.currentSize--;
        return queue.shift() as T;
      }
    }

    // Não deveria chegar aqui se currentSize estiver correto
    throw new Error("Erro interno: fila inconsistente.");
  }

  // Retorna o próximo elemento a ser removido (sem remover)
  peek(): T | null {
    if (this.isEmpty()) {
      return null;
    }

    const prioritiesInOrder: PriorityLevel[] = [
      PriorityLevel.MUITO_ALTA,
      PriorityLevel.ALTA,
      PriorityLevel.NORMAL,
      PriorityLevel.BAIXA,
      PriorityLevel.MUITO_BAIXA,
    ];

    for (const p of prioritiesInOrder) {
      const queue = this.queues.get(p)!;
      if (queue.length > 0) {
        return queue[0];
      }
    }

    return null;
  }

  // Esvazia completamente a fila
  clear(): void {
    this.queues.set(PriorityLevel.MUITO_BAIXA, []);
    this.queues.set(PriorityLevel.BAIXA, []);
    this.queues.set(PriorityLevel.NORMAL, []);
    this.queues.set(PriorityLevel.ALTA, []);
    this.queues.set(PriorityLevel.MUITO_ALTA, []);
    this.currentSize = 0;
  }
}
