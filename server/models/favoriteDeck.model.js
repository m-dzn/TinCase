const Sequelize = require("sequelize");

module.exports = class favoriteDeck extends Sequelize.Model {
    static init(sequelize) {
        return super.init(
            {},
            {
                sequelize,
                modelName: "favoriteDeck",
                tableName: "favorite_deck",
                underscored: true,
                charset: "utf8",
                collate: "utf8_general_ci",
            }
        );
    }

    static associtate(models) {}
};
