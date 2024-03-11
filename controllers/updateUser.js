const User = require('../models/User');
const UserInfo = require('../models/UserInfo');

module.exports = async (req, res) => {
    let id = req.session.userId;
    console.log(req.body);
    if(!id) {
        console.log('error: missing');
    }
    else await UserInfo.queryDB(UserInfo.findOnebyName(id))
    .then(async (userinfo) => {
       if(userinfo) {
        await UserInfo.queryDB(UserInfo.updateOnebyName(id, req.body.email, req.body.Username, req.body.PhoneNumber, req.body.image))
        .then((con) => {
            if(con) {
                console.log('update success');
                res.redirect('/');
            }
            else throw new Error('fail update');
        })
      
    }
       else {
        let userinfo = {};
        console.log(req.body);
        userinfo.user_id = req.session.userId;
        userinfo.email = req.body.email;
        userinfo.fullname = req.body.Username;
        userinfo.image = req.body.image;
        userinfo.phoneNumber = req.body.PhoneNumber;
        console.log(userinfo);
        await UserInfo.insertDatatoDB(userinfo, 'userinfo')
        .then((done) => {
            if(done) {
                console.log("update succesfully")
                res.redirect('/');
            }
            else throw new Error('error');
        })
        .catch(err => { console.log(err)})
       }

    })
    .catch((error) => { console.log(error); })
}