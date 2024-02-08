"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    static associate({ Video }) {
      this.hasMany(Video, { foreignKey: "category_id" });
    }
  }
  Category.init(
    {
      name: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      img: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: "Category",
    }
  );
  return Category;
};
