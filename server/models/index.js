const { Sequelize } = require("sequelize");
const { DB } = require("../config");

const User = require("./user.model");
const Deck = require("./deck.model");
const Card = require("./card.model");
const CardInDeck = require("./cardInDeck");
const FavoriteDeck = require("./favoriteDeck.model");
const Todo = require("./todo.model");
const VideoLinkCard = require("./videoLinkCard.model");
const MemoCard = require("./memoCard.model");

const db = {
    User,
    Deck,
    Card,
    CardInDeck,
    FavoriteDeck,
    Todo,
    VideoLinkCard,
    MemoCard,
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
