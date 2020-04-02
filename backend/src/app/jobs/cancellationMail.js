import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import Mail from '../../lib/Mail';

class CancellationMail {
    // é como se tivesse declarando uma variável
    get key() {
        return 'CancellationMail'; // Chave única do job
    }

    // Tarefa a ser executada
    async handle({ data }) {
        const { appointment } = data;

        await Mail.sendMail({
            to: `${appointment.provider.name} <${appointment.provider.email}>`,
            subject: 'Agendamento cancelado',
            template: 'cancellation', // Nome do template criado
            context: {
                provider: appointment.provider.name,
                user: appointment.user.name,
                date: format(
                    parseISO(appointment.date),
                    "'dia' dd 'de' MMMM', às' H:mm'h'",
                    { locale: pt }
                )
            }
        });
    }
}

export default new CancellationMail();
