const Sequelize = require("sequelize");
const { constraints } = require("../config");

module.exports = class Todo extends Sequelize.Model {
    static init(sequelize) {
        return super.init(
            {
                text: {
                    type: Sequelize.STRING(constraints.todo.text.max),
                    allowNull: false,
                },
                done: {
                    type: Sequelize.BOOLEAN,
                    allowNull: false,
                    defaultValue: false,
                },
                color: {
                    type: Sequelize.STRING(constraints.todo.color.max),
                },
                cardId: {
                    type: Sequelize.INTEGER,
                    allowNull: false,
                },
            },
            {
                sequelize,
                modelName: "todo",
                tableName: "todo",
                underscored: true,
                charset: "utf8",
                collate: "utf8_general_ci",
            }
        );
    }

    static associate(models) {
        Todo.belongsTo(models.Card, {
            foreignKey: "card_id",
            targetKey: "id",
            onDelete: "cascade",
        });
    }
};
