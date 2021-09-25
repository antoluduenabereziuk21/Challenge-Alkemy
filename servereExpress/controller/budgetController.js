const budgetServices = require ("../services/budgetServices");
const error = require('../common/error');
const exceptions = require('../common/exceptions');

const getAllEntry = async (req,res)=>{
  const query = req.query
  console.log("getAllEntrys - query:" +JSON.stringify(query));
  if(!req.query){
    throw new error.AppError(exceptions.exceptionType.budget.badRequest,"place entry user_budget");
  }
  const filter = {
    user_budget:req.query.user_budget,
  }

  const entry = await budgetServices.getAllEntry(filter)
  res.status(200).json(entry)
}
const getAllEgress = async (req,res)=>{
  const query = req.query
  console.log("getAllEntrys - query:" +JSON.stringify(query));
  if(!req.query){
    throw new error.AppError(exceptions.exceptionType.budget.badRequest,"place entry user_budget");
  }
  const filter = {
    user_budget:req.query.user_budget,
  }

  const egress = await budgetServices.getAllEgress(filter)
  res.status(200).json(egress)
}

const createTypeProcess = async (req, res) => {
  const data = {
    budget_type: req.body.budget_type,
    amount: req.body.amount,
    user_budget: req.body.user_budget,
  }
  const newTipeProcess = await budgetServices.createTypeProcess(data);
  return  res.status(201).json(newTipeProcess);
}

const deletingProcess = async (req,res)=>{
    const params = req.params
    console.log("Deleted controller - params : "+JSON.stringify(params))
    const id = params.id
    //call to the budgetServices
    const budget = await budgetServices.deleted(id)
    res.status(200).json({budget})
}

module.exports = {
  getAllEntry,
  getAllEgress,
  createTypeProcess,
  deletingProcess
}
