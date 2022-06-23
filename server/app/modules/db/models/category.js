const DataTypes = require("sequelize");

const Scheme = {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}

const Options = {
    tableName: 'states',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
}

const Association = ({Category, Course}) => {
    Category.belongsToMany(Course, {through: 'CategoryCourseMapping'})
}

module.exports = (sequelize) => {
    const model = sequelize.define("Category", Scheme, Options);
    model.associate = Association;
    return model;
};
