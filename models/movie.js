module.exports = (sequelize, DataTypes) => {
    const Movie = sequelize.define('Movie', {
        id:{ 
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncremet: true,
        },
        name:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        description: DataTypes.STRING,
        poster: DataTypes.STRING,
        watched: DataTypes.BOOLEAN,
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
    });

    return Movie;
}