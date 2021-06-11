const express = require('express')
const billingCycle = require('../api/billingCycle/billingCycleService')

module.exports = function(server) {

    //URL base para todas as rotas
    const router = express.Router()
    server.use('/api', router)

    // Rotas para o ciclo de pagamentos
    billingCycle.register(router, '/billingCycles')
}