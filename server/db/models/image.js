"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Image extends Model {
    static associate({ Galery }) {
      this.belongsTo(Galery, { foreignKey: "galery_id" });
    }
  }
  Image.init(
    {
      img: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      description: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      galery_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: "Galeries",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "Image",
    }
  );
  return Image;
};
