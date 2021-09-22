require ('dotenv').config();

module.exports ={
<<<<<<< HEAD
=======
  apiPrefix:'/api/v1',
>>>>>>> sequelize
  mysql:{
    host: 'localhost',
    port: 3306,
    db:process.env.MYSQL_DB_ENV,
    username: process.env.MYSQL_USER_ENV,
    password: process.env.MYSQL_PASSWORD_ENV
  }
}
