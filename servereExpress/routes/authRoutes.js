const express = require('express')
const router = express.Router({ mergeParams: true })
const routeController = require("../common/routeController")
const budgetController = require("../controller/butgetController")

router.post('/singin', (req, res) => {
  routeController.handleRequest(req, res, budgetController.entry)
})

router.post('/singup', (req, res) => {
  routeController.handleRequest(req, res, budgetController.egress)
})

module.exports = router
