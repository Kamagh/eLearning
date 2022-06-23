const DataTypes = require("sequelize");

const Scheme = {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
    },
    first_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    company_name: {
        type: DataTypes.STRING,
    },
    university_name: {
        type: DataTypes.STRING,
    },
    created_course_id: {
        type: DataTypes.INTEGER,
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
