const BlogPost = require('../models/BlogPost.js')
const User = require('../models/User.js')
module.exports = async (req, res) => {

    let sql = BlogPost.displaybyId(req.params.id);
    await BlogPost.queryDB(sql)
    .then(async (data) => {
        if(data){
        let sql1 = User.displaybyId(data[0].id);
        let data1 = {}; 
        data1 = await User.queryDB(sql1);
        let detailPost = {};
        detailPost.title = data[0].title;
        detailPost.body = data[0].body;
        detailPost.created_at = data[0].created_at;
        detailPost.username = data1[0].user_name;
        res.render('post', {detailPost});
        }
    })
    // let sql1 = User.displaybyId(data[0].id);
    // let data1 =  User.queryDB(sql1);
    // let detailPost = {};
    // detailPost.title = data[0].title;
    // detailPost.body = data[0].body;
    // detailPost.created_at = data[0].created_at;
    // detailPost.username = data1[0].user_name;
    // res.render('post', {detailPost});
    // BlogPost.findById(req.params.id, function(error, detailPost) {
    //     res.render('post', {detailPost});
    // })
}