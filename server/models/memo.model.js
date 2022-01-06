const Sequelize = require("sequelize");
const { constraints } = require("../config");

module.exports = class Memo extends Sequelize.Model {
    static init(sequelize) {
        return super.init(
            {
                content: {
                    type: Sequelize.STRING(constraints.memo.content.max),
                    allowNull: false,
                },
                color: {
                    type: Sequelize.STRING(constraints.memo.color.max),
                },
            },
            {
                sequelize,
                modelName: "memo",
                tableName: "memo",
                underscored: true,
                charset: "utf8mb4",
                collate: "utf8mb4_general_ci",
            }
        );
    }

    static associate(models) {
        Memo.belongsTo(models.Card, {
            foreignKey: "cardId",
            targetKey: "id",
            onDelete: "cascade",
        });
    }
};
