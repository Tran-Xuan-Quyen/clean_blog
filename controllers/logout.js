const jwt = require('jsonwebtoken');
const authen2 = require('../models/Authen2');

module.exports = (req, res) => {
   req.session.destroy(() => {
   res.redirect('/')
   })
}