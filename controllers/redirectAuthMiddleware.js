const User = require('../models/User')
module.exports = (req, res, next) => {
    if(req.headers.token) return res.redirect('/')
    next()
}