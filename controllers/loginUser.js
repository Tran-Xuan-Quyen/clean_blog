// const bcrypt = require("bcrypt")
// const User = require('../models/User')

// module.exports = async (req, res) => {
//     const {username, password} = req.body;
//     let sql = User.findOnebyName(username);
//     let data = await User.queryDB(sql);
//     console.log(data);
//     if(data){
//         bcrypt.compare(password, data[0].password, (err, same) => {
//            console.log("pass input: ", password)
//            console.log("hash :", data[0].password)
//             if(same) {
               
//                 req.session.userId = data[0].id;
//                 console.log('login successfully', req.session.userId);
//                 res.redirect('/');
//             }
//             else {
//                 console.log('password mismatch');
//                 res.redirect('/auth/login');
//             }
//         })
//     }
//     else {
//         console.log('username mismatch');
//         res.redirect('/auth/login');
//     }
   
// }

const User = require('../models/User')
const knex = require('../config/knex');
const bcrypt = require('bcrypt');
const database = require('../config/database');
const Authen2 = require('../models/Authen2');
const jwt = require('jsonwebtoken');

class authCtrl{}

authCtrl.insertToken = async (accessToken, refreshToken, user_id) => {
    await Authen2.insertDatatoDB({
        id: 1,
        user_id: user_id,
        accessToken: accessToken,
        refreshToken: refreshToken,
        create_at: new Date(),
    }, 'authen')
}

authCtrl.login = async (req, res) => {
   
    await User.queryDB(User.findOnebyName(req.body.username))
    .then((user) => {
        if(user[0]) {
            //console.log(user[0].password)
            bcrypt.compare(req.body.password, user[0].password)
            .then((same) =>{
                if(same) {
                    const accessToken = jwt.sign({
                        id: user[0].id,
                        username: user[0].username,
                        password: user[0].password,
                        create_at: new Date()
                    },
                    process.env.JWT_PRIVATE_KEY,
                    {
                        expiresIn: '30s'
                    }
                    )
                    const refreshToken = jwt.sign({
                        id: user[0].id,
                        username: user[0].username,
                        password: user[0].password,
                        create_at: new Date()
                    },
                    process.env.JWT_PRIVATE_REFRESH_KEY,
                    {
                        expiresIn: '24h'
                    }
                    )
                    //console.log(accessToken, refreshToken, user[0].id);
                    Authen2.queryDB(`DELETE FROM authen where user_id = ${user[0].id}`);
                    authCtrl.insertToken(accessToken, refreshToken, user[0].id);
            
                    //res.redirect('/');
                    res.status(200).json({
                        userid: user[0].id,
                        accessToken: accessToken,
                        refreshToken: refreshToken,
                    })
                }
                else res.status(403).json({
                    message: "Password mismatch"
                })
            })
            .catch(err => console.log(err));
        }
        else res.status(403).json({
            message: "Username mismatch"
        })
    })
    .catch(err => {
        console.log(err);
        res.status(403).json({
            message: "error"
        })
    })
}

module.exports = authCtrl;