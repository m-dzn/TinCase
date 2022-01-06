const Sequelize = require("sequelize");
const { constraints } = require("../config");

module.exports = class VideoCard extends Sequelize.Model {
    static init(sequelize) {
        return super.init(
            {
                url: {
                    type: Sequelize.STRING(constraints.videoCard.url.max),
                },
                provider: {
                    type: Sequelize.STRING(constraints.videoCard.provider.max),
                },
            },
            {
                sequelize,
                modelName: "videoCard",
                tableName: "video_card",
                underscored: true,
                charset: "utf8",
                collate: "utf8_general_ci",
            }
        );
    }

    static associate(models) {
        VideoCard.belongsTo(models.Card);
    }
};
