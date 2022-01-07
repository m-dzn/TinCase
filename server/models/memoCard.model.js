const Sequelize = require("sequelize");
const { constraints } = require("../config");

module.exports = class MemoCard extends Sequelize.Model {
    static init(sequelize) {
        return super.init(
            {
                content: {
                    type: Sequelize.STRING(constraints.memoCard.content.max),
                    allowNull: false,
                },
                color: {
                    type: Sequelize.STRING(constraints.memoCard.color.max),
                },
            },
            {
                sequelize,
                modelName: "memoCard",
                tableName: "memo_card",
                underscored: true,
                charset: "utf8mb4",
                collate: "utf8mb4_general_ci",
            }
        );
    }

    static associate(models) {
        MemoCard.belongsTo(models.Card, {
            foreignKey: "cardId",
            targetKey: "id",
            onDelete: "cascade",
        });
    }
};
