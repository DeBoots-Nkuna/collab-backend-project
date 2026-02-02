const { DataTypes } = require("sequelize");
const sequelize = require("../db");

const Sermon = sequelize.define("Sermon", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  preacher: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Sermon;
