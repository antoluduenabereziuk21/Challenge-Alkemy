const userModel = require("/models/userModel");
const error = require("/common/error");
const exception = require("/common/exception");

const getAllServices= async ({balance})=>{
  const balanceUser = await userModel.findAll({atributes:['expenses','income']});
  return balanceUser;
}

module.export={getAllServices};
