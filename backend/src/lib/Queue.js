import Bee from 'bee-queue';
import CancellationMail from '../app/jobs/cancellationMail';
import redisConfig from '../config/redis';

const jobs = [CancellationMail];

class Queue {
    constructor() {
        this.queues = {}; // background jobs

        this.init();
    }

    init() {
        jobs.forEach(({ key, handle }) => {
            this.queues[key] = {
                // Fila + conexão
                bee: new Bee(key, {
                    redis: redisConfig
                }),
                handle // Recebe as informações cada vez que o job for processado e realiza a tarefa
            };
        });
    }

    // Adicionar o job na fila para ser processado; param: fila + job
    add(queue, job) {
        return this.queues[queue].bee.createJob(job).save();
    }

    // Processar a fila
    processQueue() {
        jobs.forEach(job => {
            const { bee, handle } = this.queues[job.key];

            bee.on('failed', this.handleFailure).process(handle);
        });
    }

    handleFailure(job, err) {
        console.log(`Queue ${job.queue.name}: FAILED`, err);
    }
}

export default new Queue();
