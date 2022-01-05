const Sequelize = require("sequelize");
const { constraints } = require("../config");

module.exports = class TodoItem extends Sequelize.Model {
    static init(sequelize) {
        return super.init(
            {
                text: {
                    type: Sequelize.STRING(constraints.todo.item.text.max),
                    allowNull: false,
                },
                done: {
                    type: Sequelize.BOOLEAN,
                    allowNull: false,
                    defaultValue: false,
                },
                color: {
                    type: Sequelize.STRING(constraints.todo.item.color.max),
                },
                cardId: {
                    type: Sequelize.INTEGER,
                    allowNull: false,
                },
            },
            {
                sequelize,
                modelName: "TodoItem",
                tableName: "todo_item",
                underscored: true,
                charset: "utf8",
                collate: "utf8_general_ci",
            }
        );
    }

    static associate(db) {}
};
