'use strict';

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('food', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        cuisineType: {
            type: DataTypes.ENUM,
            values: ['Italian', 'Mexican', 'Chinese', 'Korean', 'Japanese'],
            allowNull: true,
        },
        personId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    });
};
