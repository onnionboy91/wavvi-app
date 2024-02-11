"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Video extends Model {
    static associate({ Category, Like, Comment }) {
      this.belongsTo(Category, { foreignKey: "category_id" });
      this.hasMany(Like, { foreignKey: "video_id" });
      this.hasMany(Comment, { foreignKey: "video_id" });
    }
  }
  Video.init(
    {
      name: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      content: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      level: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      img: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      category_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: "Categories",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "Video",
    }
  );
  return Video;
};
