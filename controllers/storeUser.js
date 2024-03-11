const { getAllData } = require('../models/Question.js');
const User = require('../models/User.js')
// const UserInfo = require('../models/UserInfo.js');
// const knex = require('../config/knex.js')
module.exports =  (req, res, next) => {
    
    let data = req.body;
    data.created_id = 1;
    data.created_at = new Date();
    data.update_id = 0;
    data.update_at = new Date();
    data.delete_flag = 0;
    data.old_id = 0;
    console.log(data);
    User.insertDatatoDB(data, User.getTableName())
    .then((isAdd) => {
        if(!isAdd) {
            console.log('register failed');
            res.redirect('/auth/register');
        }
        else {
                console.log('register successful');
                 res.redirect('/');
        }
    })
    .catch (error => {console.log(error);})
}