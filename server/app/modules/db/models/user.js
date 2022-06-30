const DataTypes = require("sequelize");

const Scheme = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    firstName: {
        allowNull: false,
        type: DataTypes.STRING
    },
    lastName: {
        allowNull: false,
        type: DataTypes.STRING
    },
    email: {
        allowNull: false,
        type: DataTypes.STRING
    },
    password: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    company_name: {
        type: DataTypes.STRING
    },
    university_name: {
        type: DataTypes.STRING
    },
};

const Options = {
    tableName: 'states',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
};

const Association = ({User, Course}) => {
    User.hasMany(Course, {
        sourceKey: 'id',
        foreignKey: 'creatorId'
    });
    User.belongsToMany(Course, {through: 'UserCourseMapping'})
};

module.exports = (sequelize) => {
    const model = sequelize.define("User", Scheme);
    model.associate = Association;
    return model;
};
