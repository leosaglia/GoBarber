import Sequelize, { Model } from 'sequelize';

class Appointment extends Model {
    static init(sequelize) {
        super.init(
            {
                date: Sequelize.DATE,
                canceled_at: Sequelize.DATE
            },
            {
                sequelize
            }
        );
        return this;
    }

    static associate(models) {
        // mais de um relacionamento com uma mesma tabela, é obrigatório um apelido/Alias
        this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
        this.belongsTo(models.User, {
            foreignKey: 'provider_id',
            as: 'provider'
        });
    }
}

export default Appointment;
