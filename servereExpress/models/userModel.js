const Sequelize = require('sequelize');
const {sequelizeConnection} = require('../config/server/sequelizeConfig')

const  UserModel = sequelizeConnection.define(
    'Users',
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
      },
      createdAt:{
        type:Sequelize.DATE,
        field: 'created_at'
      },
      updateAt:{
        type:Sequelize.DATE,
        field: 'updated_at'
      }
},
{
    tableName:'users',
    timestamps: true
}
)

module.exports = UserModel
