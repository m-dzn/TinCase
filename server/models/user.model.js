const Sequelize = require("sequelize");
const { constraints } = require("../config");

module.exports = class User extends Sequelize.Model {
    static init(sequelize) {
        return super.init(
            {
                email: {
                    type: Sequelize.STRING(constraints.user.email.max),
                    allowNull: false,
                    unique: "email",
                },
                nickname: {
                    type: Sequelize.STRING(constraints.user.nickname.max),
                    allowNull: false,
                },
                password: {
                    type: Sequelize.STRING(constraints.user.password.max),
                },
                avatar: {
                    type: Sequelize.STRING(constraints.user.avatar.max),
                },
                provider: {
                    type: Sequelize.STRING(constraints.user.provider.max),
                    allowNull: false,
                    defaultValue: "local",
                },
                snsId: {
                    type: Sequelize.STRING(constraints.user.snsId.max),
                },
            },
            {
                sequelize,
                modelName: "user",
                tableName: "user",
                paranoid: true,
                underscored: true,
                charset: "utf8",
                collate: "utf8_general_ci",
            }
        );
    }

    static associate(models) {
        User.hasMany(models.Card, {
            foreignKey: "userId",
            sourceKey: "id",
            onDelete: "cascade",
        });

        User.hasMany(models.Deck, {
            foreignKey: "userId",
            sourceKey: "id",
        });

        User.belongsToMany(models.Deck, {
            through: models.FavoriteDeck,
        });
    }
};
