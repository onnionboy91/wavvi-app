"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Galery extends Model {
    static associate({ Image, User }) {
      this.hasMany(Image, { foreignKey: "galery_id" });
      this.belongsTo(User, { foreignKey: "user_id" });
    }
  }
  Galery.init(
    {
      user_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: "Users",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "Galery",
    }
  );
  return Galery;
};
