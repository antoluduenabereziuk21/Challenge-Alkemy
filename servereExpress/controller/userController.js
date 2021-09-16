const userService = require('../services/userServices');
const exceptions = require('../common/exceptions');
const error= require('../common/error');

const getAll = async (req,res) => {
  const query = req.query;
  if (!req.query){
    throw new error.AppError (exceptions.exceptionsType.prosupuesto.notFound,"se require id");
  }
  const usario = await userService.getAllServices(query);

  return usario;
}

module.exports ={getAll};
/*
db id_user, user, username, password,
montoActual, fecha y (tipo = egreso,ingreso)
*/
