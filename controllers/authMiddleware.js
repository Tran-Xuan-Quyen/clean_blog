const User = require('../models/User')
const knex = require('../config/knex');
module.exports = async (req, res, next) => {
    let sql = User.displaybyId(req.session.userId)
    let data = await User.queryDB(sql);
    if(data) next();
    else return res.redirect('/auth/login');
    // await knex.raw(sql)
    // .then((error, user) => {
    //     if(error || !user) return res.redirect('/auth/login')
    //     next()
    // })
}