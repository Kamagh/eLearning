"use strict";

module.exports = {
  async up(queryInterface, DataTypes) {
    return await queryInterface.createTable("contents", {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      body: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      course_id: {
        references: {
          model: {
            tableName: 'courses',
          },
          key: 'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("contents");
  },
};
