const Sequelize = require("sequelize");
const { constraints } = require("../config");

module.exports = class VideoLinkCard extends Sequelize.Model {
    static init(sequelize) {
        return super.init(
            {
                url: {
                    type: Sequelize.STRING(constraints.videoLinkCard.url.max),
                },
                provider: {
                    type: Sequelize.STRING(
                        constraints.videoLinkCard.provider.max
                    ),
                },
            },
            {
                sequelize,
                modelName: "videoLinkCard",
                tableName: "video_link_card",
                underscored: true,
                charset: "utf8",
                collate: "utf8_general_ci",
            }
        );
    }

    static associate(models) {
        VideoLinkCard.belongsTo(models.Card, {
            foreignKey: "cardId",
            targetKey: "id",
            onDelete: "cascade",
        });
    }
};
