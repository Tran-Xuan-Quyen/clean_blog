const BlogPost = require('../models/BlogPost.js')
const path = require('path')
const User = require('../models/User.js')
module.exports = (req, res) => {
    let image = req.files.image;
    image.mv(path.resolve(__dirname, '/public/uploads',image.name),async function(err) {
        let data = {};
        data.title = req.body.title,
        data.body = req.body.body,
        data.image = '/upload/' + image.name,
        data.user_id = req.session.userId,
        data.created_id = req.session.userId,
        data.created_at = new Date(),
        data.update_at = new Date(),
        data.update_id = 0,
        data.delete_flag = 0,
        data.old_id = 0;

        await BlogPost.insertDatatoDB(data, BlogPost.getTableName())
        .then((con) => {
            if(con) {
                console.log("insert successfully");
                res.redirect('/');
            }
            else res.redirect('/posts/new');
        })
        .catch((err) => { console.log("insert failed", err)});
    })


    // var ObjectId = require('mongodb').ObjectId;
    // req.session.userId = new ObjectId(req.session.userId);
    // image.mv(path.resolve(__dirname, '/public/upload', image.name), function(err) {
    //     User.findOne( { _id :  req.session.userId}, (err, user) => {
    //         BlogPost.create({
    //             user_id: user.username,
    //             title: req.body.title,
    //             body: req.body.body,    
    //             image: '/upload/' + image.name, }, function(error, blogpost) {
    //             res.redirect('/')
    //         })
    //     });
       
    // })
}