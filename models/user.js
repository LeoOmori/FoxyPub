'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {

    static associate(models) {

    }
  };
  User.init({

    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    email: {
      allowNull: false,
      unique:true,
      type: DataTypes.STRING,
      validate: {
        isEmail:true
      }
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING,
      validate:{
        is:["^[a-zA-Z0-9]*$"]
      }
    },
    password:{
      allowNull:false,
      type: DataTypes.STRING,
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },



  }, {
    sequelize,
    modelName: 'User',
    freezeTableName: true,
  });
  return User;
};