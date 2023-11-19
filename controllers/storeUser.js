const User = require('../models/User.js')
module.exports = async (req, res) => {
    
    let data = req.body;
    data.created_id = 1;
    data.created_at = new Date();
    data.update_id = 0;
    data.update_at = new Date();
    data.delete_flag = 0;
    data.old_id = 0;
    console.log(data);
    const isAdd = await User.insertDatatoDB(data, User.getTableName());
    if(!isAdd) {
        console.log('register failed');
        res.redirect('/auth/register');
    }
    else {
        console.log('register successful');
        res.redirect('/');
    }
    
    // User.create(req.body, (error, user) => {
    //     if(error) {
    //        return res.redirect('/auth/register')
    //     }
    //     res.redirect('/')
    // })
}