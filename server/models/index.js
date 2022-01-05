const { Sequelize } = require("sequelize");
const { DB } = require("../config");

const User = require("./user.model");
const Card = require("./card.model");
const TodoItem = require("./todo-item.model");

const db = {
    User,
    Card,
    TodoItem,
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
