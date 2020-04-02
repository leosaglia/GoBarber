module.exports = {
    up: (queryInterface, Sequelize) => {
        // "tabela", "coluna", {type, references}
        return queryInterface.addColumn('users', 'avatar_id', {
            type: Sequelize.INTEGER,
            references: { model: 'files', key: 'id' },
            onUpdate: 'CASCADE',
            onDelete: 'SET NULL',
            allowNull: true
        });
    },

    down: queryInterface => {
        queryInterface.removeColumn('user', 'avatar_id');
    }
};
