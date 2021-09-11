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
    name: {
        type: Sequelize.STRING,
        allowNull:  false,
        fields: 'name'
    },
    email: {
        type:Sequelize.STRING,
        allowNull: true,
        fields: 'email'
    },
    balance: {
      type: Sequelize.INTEGER,
      allowNull: false,
    }
    // last_name: {
    //     type:Sequelize.STRING,
    //     allowNull: false,
    //     fields: 'last_name'
    // },
    // country: {
    //     type:Sequelize.INTEGER,
    //     allowNull: true,
    //     fields: 'country'
    // },
    // city: {
    //     type:Sequelize.INTEGER,
    //     allowNull: true,
    //     fields: 'city'
    // },
    // condition: {
    //     type:Sequelize.STRING,
    //     allowNull: false,
    //     fields: 'condition'
    // },
    // createdAt: {
    //     type: Sequelize.DATE,
    //     field: 'created_at'
    //   },
    //   updatedAt: {
    //     type: Sequelize.DATE,
    //     field: 'updated_at'
    //   }
},
{
    tableName:'users',
    timestamps: true
}
)

module.exports = UserModel
