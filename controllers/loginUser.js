const User = require('../models/User')
const knex = require('../config/knex');
const bcrypt = require('bcrypt');
const database = require('../config/database');
const Authen2 = require('../models/Authen2');
const jwt = require('jsonwebtoken');

class loginController{
    async login(req, res){
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
                        // this.insertToken(accessToken, refreshToken, user[0].id);
                        Authen2.insertDatatoDB({
                            id: 1,
                            user_id: user[0].id,
                            accessToken: accessToken,
                            refreshToken: refreshToken,
                            create_at: new Date(),
                        }, 'authen')
                        req.session.userId = user[0].id;
                        res.redirect('/');
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
    // async insertToken(accessToken, refreshToken, user_id){
    //     await Authen2.insertDatatoDB({
    //         id: 1,
    //         user_id: user_id,
    //         accessToken: accessToken,
    //         refreshToken: refreshToken,
    //         create_at: new Date(),
    //     }, 'authen')
    // }

}
module.exports = new loginController();