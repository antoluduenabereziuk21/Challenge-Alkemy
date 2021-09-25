// const budgetServices = require ("../services/budgetServices");
const error = require('../common/error');
const exceptions = require('../common/exceptions');

// const getAllEntry = async (req,res)=>{
//   const query = req.query
//   console.log("getAllEntrys - query:" +JSON.stringify(query));
//   if(!req.query){
//     throw new error.AppError(exceptions.exceptionType.budget.badRequest,"place entry type-budget:0||1");
//   }
//   const filter = {
//     budget_type: req.query
//   }

//   const entry = await butgetServices.getAllEntry(filter)
//   res.status(200).json(entry)
// }
// const getAllEgress = async (req,res)=>{
//   const query = req.query
//   console.log("getAllEntrys - query:" +JSON.stringify(query));
//   if(!req.query){
//     throw new error.AppError(exceptions.exceptionType.budget.badRequest,"place entry type-budget:0||1");
//   }
//   const filter = {
//     budget_type: req.query
//   }

//   const egress = await butgetServices.getAllEgress(filter)
//   res.status(200).json(egress)
// }


// module.exports = {
//   getAllEntry,
//   getAllEgress
// }
