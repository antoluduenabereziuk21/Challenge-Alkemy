const userModel = require("/models/userModel");
const error = require("/common/error");
const exception = require("/common/exception");

const getAllServices= async ({query})=>{
  const usarios = await userModel.find({query:query});
  return usarios;
}

module.export={getAllServices};
