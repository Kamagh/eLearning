const DataTypes = require("sequelize");
const Schema = {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
    },
    topic_title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    content_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    creator_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
};

const Options = {
    tableName: 'states',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
};

const Association = ({Course, Content, User, Category}) => {
    Course.hasOne(Content, {
        sourceKey: 'id',
        foreignKey: 'courseId',
    });
    Course.belongsToMany(User, {as: 'learners', through: 'UserCourseMapping'});
    Course.belongsTo(User, {as: 'creator'});
    Course.belongsToMany(Category, {through: 'CategoryCourseMapping'})
};

module.exports = (sequelize) => {
    const model = sequelize.define("Course", Schema, Options);
    model.associate = Association;
    return model;
};
