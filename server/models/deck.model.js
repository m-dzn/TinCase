const Sequelize = require("sequelize");
const { constraints } = require("../config");

module.exports = class Deck extends Sequelize.Model {
    static init(sequelize) {
        return super.init(
            {
                title: {
                    type: Sequelize.STRING(constraints.deck.title.max),
                    allowNull: false,
                },
                isPublic: {
                    type: Sequelize.BOOLEAN,
                    allowNull: false,
                    defaultValue: false,
                },
                userId: {
                    type: Sequelize.INTEGER,
                    allowNull: false,
                },
            },
            {
                sequelize,
                modelName: "deck",
                tableName: "deck",
                underscored: true,
                charset: "utf8mb4",
                collate: "utf8mb4_general_ci",
            }
        );
    }

    static associate(models) {
        Deck.belongsToMany(models.Card, {
            through: models.DeckCard,
        });
    }
};
