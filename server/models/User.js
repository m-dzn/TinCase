const Sequelize = require("sequelize");
const constraints = require("../config/constraints");

module.exports = class User extends Sequelize.Model {
    static init(sequelize) {
        return super.init(
            {
                email: {
                    type: Sequelize.STRING(constraints.email.max),
                    allowNull: false,
                    unique: true,
                },
                nickname: {
                    type: Sequelize.STRING(constraints.nickname.max),
                    allowNull: false,
                },
                password: {
                    type: Sequelize.STRING(constraints.password.max),
                },
                avatar: {
                    type: Sequelize.STRING(constraints.avatar.max),
                },
                provider: {
                    type: Sequelize.STRING(constraints.provider.max),
                    allowNull: false,
                    defaultValue: "local",
                },
                snsId: {
                    type: Sequelize.STRING(constraints.snsId.max),
                },
            },
            {
                sequelize,
                modelName: "User",
                tableName: "user",
                paranoid: true,
                charset: "utf8",
                collate: "utf8_general_ci",
            }
        );
    }

    static associate(db) {}
};
