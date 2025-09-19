export type QueueTask = () => Promise<unknown>;

const queue: QueueTask[] = [];
let isProcessing = false;

export function addToQueue(task: QueueTask): void {
  queue.push(task);
  if (!isProcessing) {
    processNext();
  }
}

function processNext(): void {
  if (queue.length === 0) {
    isProcessing = false;
    return;
  }

  isProcessing = true;
  const task = queue.shift()!;
  const result = task();

  if (result && typeof result.then === 'function') {
    result
      .catch((error) => {
        console.error('Queue task failed:', error);
      })
      .then(() => {
        setTimeout(() => {
          processNext();
        }, 100);
      });
  } else {
    setTimeout(() => {
      processNext();
    }, 100);
  }
}
