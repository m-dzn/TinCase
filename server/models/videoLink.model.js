const Sequelize = require("sequelize");
const { constraints } = require("../config");

module.exports = class VideoLink extends Sequelize.Model {
    static init(sequelize) {
        return super.init(
            {
                url: {
                    type: Sequelize.STRING(constraints.videoLink.url.max),
                },
                provider: {
                    type: Sequelize.STRING(constraints.videoLink.provider.max),
                },
            },
            {
                sequelize,
                modelName: "videoLink",
                tableName: "video_link",
                underscored: true,
                charset: "utf8",
                collate: "utf8_general_ci",
            }
        );
    }

    static associate(models) {
        VideoLink.belongsTo(models.Card, {
            foreignKey: "cardId",
            targetKey: "id",
            onDelete: "cascade",
        });
    }
};
