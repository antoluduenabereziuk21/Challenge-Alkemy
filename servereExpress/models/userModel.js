const Sequelize = require('sequelize');
const {sequelizeConnection} = require('../config/server/sequelizeConfig')

const  UserModel = sequelizeConnection.define(
    'User',
{
    id_user:{
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    user_name: {
        type: Sequelize.STRING,
        allowNull: false,
        fields: 'user_name'
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
        fields: 'password'
      },
      email: {
        type:Sequelize.STRING,
        allowNull: true,
        fields: 'email'
      }
},
{
    tableName:'users',
    timestamps: true
}
)

module.exports = UserModel
