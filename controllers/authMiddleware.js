const User = require('../models/User');
module.exports = async (req, res, next) => {
    //console.log(req.session);
    let sql = User.displaybyId(req.session.userId)
    let data = await User.queryDB(sql);
    if(data) next();
    else return res.redirect('/auth/login');
 
}

// const jwt = require('jsonwebtoken');

// module.exports = async (req, res, next) => {
//     const token = req.headers.token;
//     console.log(token);
//     if(token) {
//         const accessToken = token.split(" ")[0];
//        // console.log(accessToken);
//         jwt.verify(accessToken, process.env.JWT_PUBLIC_KEY, (user) => {
//             if(!user) {
//                 res.status(403).json({
//                     success: false,
//                     messaeg: "Token not valid"
//                 })
//             }
//             req.user = user;
//             next();
//         })
//     }
//     else res.status(403).json({
//         success: false,
//         message: "You do not have permission to access"
//     });
// }