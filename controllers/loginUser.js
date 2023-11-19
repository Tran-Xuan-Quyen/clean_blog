const bcrypt = require("bcrypt")
const User = require('../models/User')

module.exports = async (req, res) => {
    const {username, password} = req.body;
    let sql = User.findOnebyName(username);
    let data = await User.queryDB(sql);
    console.log(data);
    if(data){
        bcrypt.compare(password, data[0].password, (err, same) => {
           console.log("pass input: ", password)
           console.log("hash :", data[0].password)
            if(same) {
               
                req.session.userId = data[0].id;
                console.log('login successfully', req.session.userId);
                res.redirect('/');
            }
            else {
                console.log('password mismatch');
                res.redirect('/auth/login');
            }
        })
    }
    else {
        console.log('username mismatch');
        res.redirect('/auth/login');
    }
   
}

