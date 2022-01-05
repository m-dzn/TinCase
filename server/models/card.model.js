const Sequelize = require("sequelize");
const { constraints } = require("../config");

module.exports = class Card extends Sequelize.Model {
    static init(sequelize) {
        return super.init(
            {
                title: {
                    type: Sequelize.STRING(constraints.card.title.max),
                    allowNull: false,
                    validate: {
                        notNull: {
                            msg: "제목을 반드시 입력해주세요",
                        },
                    },
                },
                type: {
                    type: Sequelize.STRING(constraints.card.type.max),
                    allowNull: false,
                },
                isPublic: {
                    type: Sequelize.BOOLEAN,
                    allowNull: false,
                    defaultValue: false,
                },
            },
            {
                sequelize,
                modelName: "Card",
                tableName: "card",
                underscored: true,
                charset: "utf8mb4",
                collate: "utf8mb4_general_ci",
            }
        );
    }

    static associate(db) {
        db.Card.hasMany(db.TodoItem, {
            as: "",
            foreignKey: "card_id",
            onDelete: "cascade",
        });
    }
};
