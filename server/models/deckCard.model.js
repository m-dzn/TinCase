const Sequelize = require("sequelize");
const { constraints } = require("../config");

module.exports = class DeckCard extends Sequelize.Model {
    static init(sequelize) {
        return super.init(
            {},
            {
                sequelize,
                modelName: "deckCard",
                tableName: "deck_card",
                underscored: true,
                charset: "utf8",
                collate: "utf8_general_ci",
            }
        );
    }

    static associate(models) {}
};
