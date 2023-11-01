const BlogPost = require('../models/BlogPost.js')
const path = require('path')
const User = require('../models/User.js')
module.exports = (req, res) => {
    let image = req.files.image;
    var ObjectId = require('mongodb').ObjectId;
    req.session.userId = new ObjectId(req.session.userId);
    image.mv(path.resolve(__dirname, '/public/upload', image.name), function(err) {
        User.findOne( { _id :  req.session.userId}, (err, user) => {
            BlogPost.create({
                username: user.username,
                title: req.body.title,
                body: req.body.body,    
                image: '/upload/' + image.name, }, function(error, blogpost) {
                res.redirect('/')
            })
        });
       
    })
}