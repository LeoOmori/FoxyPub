'use strict';
const Sequelize = require("sequelize");
const { DataTypes } = Sequelize

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.createTable('User', { 

      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      email: {
        allowNull: false,
        unique:true,
        type: DataTypes.STRING
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING,
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

    });

  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.dropTable('Users');

  }
};
