module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
        fullname: {
            type: Sequelize.STRING,
            notNull: true,
       
        },
        emailAddress: {
            type: Sequelize.STRING,
            unique: true,
            notNull: true
        },
        Password: {
            type: Sequelize.STRING,
            notNull: true,
            min: 8
        },
        role: {
            type: Sequelize.STRING,
            allowNull: false
        },
        authorised: {
            type: Sequelize.BOOLEAN
        }
    });

    return User;
} 