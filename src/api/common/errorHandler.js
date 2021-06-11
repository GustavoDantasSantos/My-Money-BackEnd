const _ = require('lodash')

module.exports = (res, req, next) => {
    const bundle = res.locals.bundle.errors

    if(bundle){
        const errors = parseError(bundle)
        res.status(500).json({errors})
    } else {
        next()
    }
}

const parseError = (nodeRestulErrors) => {
    const errors = []
    _.forIn(nodeRestulErrors, error => errors.push(error.message))
    return errors
}