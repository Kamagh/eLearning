const DataTypes = require("sequelize");

const Scheme = {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
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
        type: DataTypes.INTEGER,
        allowNull: false,
    }
}

const Options = {
    tableName: 'states',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
};

const Association = ({Content, Course}) => {
    Content.belongsTo(Course)
}

module.exports = (sequelize) => {
    const model = sequelize.define("Content", Scheme, Options);
    model.associate = Association;
    return model;
}
