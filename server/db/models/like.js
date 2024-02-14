'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Like extends Model {
    static associate({ Video, User }) {
      this.belongsTo(Video, { foreignKey: 'video_id' });
      this.belongsTo(User, { foreignKey: 'user_id' });
    }
  }
  Like.init(
    {
      user_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        },
      },
      video_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'Videos',
          key: 'id',
        },
      },
    },
    {
      sequelize,
      modelName: 'Like',
    }
  );
  return Like;
};
