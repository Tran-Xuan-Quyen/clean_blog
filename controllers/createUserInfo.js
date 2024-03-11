const UserInfo = require('../models/UserInfo');
const User = require('../models/User');

module.exports = (req, res) => {
    console.log(req.body);
    User.queryDB(User.findOnebyName(req.body.user_name))
         .then((user) => {
                console.log(user);
                //userinfo.user_id = user.id;
               // console.log(userinfo);
         })
          
}