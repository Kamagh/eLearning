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
      creator_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: 'users',
          },
          key: 'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable("courses");
  }
};
