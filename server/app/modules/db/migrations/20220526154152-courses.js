'use strict';

module.exports = {
  async up (queryInterface, DataTypes) {
    return await queryInterface.createTable("courses", {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      topic_title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      contentId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      creatorId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable("courses");
  }
};
