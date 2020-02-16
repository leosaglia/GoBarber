import 'dotenv/config';

import Queue from './lib/Queue';
// importar em um arquivo dirente para a fila não impactar na performance da aplicação
Queue.processQueue();
