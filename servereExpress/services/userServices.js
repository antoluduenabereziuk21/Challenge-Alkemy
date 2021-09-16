const userModel = require("../models/userModel");
// const error = require("/common/error");
// const exception = require("/common/exception");


const getAllServices= async ({balance})=>{
  const where={}
  if(balance){
    where.balance = balance;
  }
  const balanceUser = await userModel.findAll({atributes:['expenses','income'],where:where});
  return balanceUser;
}

module.export={getAllServices};
