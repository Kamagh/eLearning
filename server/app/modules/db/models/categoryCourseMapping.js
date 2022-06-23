const DataTypes = require('sequelize');
const Category = require('./category');
const Course = require('./course')
const Schema = {
    category_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Category(),
            key: 'id'
        },
    },
    course_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Course,
            key: 'id'
        },
    },
};

const Options = {
    tableName: 'users_course_mapping',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
};

module.exports = (sequelize) => {
    const model = sequelize.define('categoryCourseMapping', Schema, Options);
    return model;
};
