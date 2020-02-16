require('dotenv/config');

// configurações da base de dados/credenciais
// https://sequelize.org/master/manual/dialect-specific-things.html
module.exports = {
    dialect: 'postgres',
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    define: {
        timestamps: true, // data de criação e edição
        underscored: true, // padrão underscore nome_nome
        underscoredAll: true
    }
};
