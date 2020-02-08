// configurações da base de dados/credenciais
// https://sequelize.org/master/manual/dialect-specific-things.html
module.exports = {
    dialect: 'postgres',
    host: '192.168.99.100',
    username: 'postgres',
    password: 'docker',
    database: 'gobarber',
    define: {
        timestamps: true, // data de criação e edição
        underscored: true, // padrão underscore nome_nome
        underscoredAll: true
    }
};
