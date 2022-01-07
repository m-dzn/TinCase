const Sequelize = require("sequelize");
const { constraints } = require("../config");

module.exports = class CardInDeck extends Sequelize.Model {
    static init(sequelize) {
        return super.init(
            {},
            {
                sequelize,
                modelName: "cardInDeck",
                tableName: "card_in_deck",
                underscored: true,
                charset: "utf8",
                collate: "utf8_general_ci",
            }
        );
    }

    static associate(db) {}
};
