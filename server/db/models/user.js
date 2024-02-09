"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({ Like, Comment, Galery }) {
      this.hasMany(Like, { foreignKey: "user_id" });
      this.hasMany(Comment, { foreignKey: "user_id" });
      this.hasMany(Galery, { foreignKey: "user_id" });
    }
  }
  User.init(
    {
      role: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      name: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      email: {
        allowNull: false,
        unique: true,
        type: DataTypes.TEXT,
      },
      password: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      styleDance: {
        allowNull: true,
        type: DataTypes.TEXT,
      },
      level: {
        allowNull: true,
        type: DataTypes.TEXT,
      },
      description: {
        allowNull: true,
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
