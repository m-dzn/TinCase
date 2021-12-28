const { Sequelize } = require("sequelize");
const { DB } = require("../config");

const User = require("./user.model");

const db = {
    User,
};

const sequelize = new Sequelize(DB.database, DB.username, DB.password, DB);

const Models = Object.keys(db);
Models.forEach((model) => {
    if (db[model].init) db[model].init(sequelize);
});
Models.forEach((model) => {
    if (db[model].associate) db[model].associate(db);
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
