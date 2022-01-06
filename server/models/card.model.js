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
                modelName: "card",
                tableName: "card",
                underscored: true,
                charset: "utf8mb4",
                collate: "utf8mb4_general_ci",
            }
        );
    }

    static associate(models) {
        Card.belongsTo(models.User, {
            foreignKey: "userId",
            targetKey: "id",
            onDelete: "cascade",
        });

        Card.belongsToMany(models.Deck, {
            through: models.DeckCard,
        });

        // 카드 상속 관계 매핑
        Card.hasMany(models.Todo, {
            foreignKey: "cardId",
            sourceKey: "id",
            onDelete: "cascade",
        });

        Card.hasOne(models.VideoLink, {
            foreignKey: "cardId",
            sourceKey: "id",
            onDelete: "cascade",
        });

        Card.hasOne(models.Memo, {
            foreignKey: "cardId",
            sourceKey: "id",
            onDelete: "cascade",
        });
    }
};
