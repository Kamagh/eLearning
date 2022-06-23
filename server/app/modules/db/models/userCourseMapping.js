const DataTypes = require('sequelize');
const User = require('./user');
const Course = require('./course')
const Schema = {
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
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
    is_admin: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        unique: true,
    },
};

const Options = {
    tableName: 'users_course_mapping',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
};

module.exports = (sequelize) => {
    const model = sequelize.define('UserCourseMapping', Schema, Options);
    return model;
};
