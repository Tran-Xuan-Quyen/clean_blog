const BlogPost = require('../models/BlogPost.js')
const path = require('path')
const User = require('../models/User.js')
const multer = require('multer');
const upload = multer({dest: './public/upload'})

module.exports = (req, res) => {
    let image = req.files.image;
    console.log(image);
    upload.single('image');
    image.mv(path.resolve(__dirname, '/public/upload', image.name), async function(err) {
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
}