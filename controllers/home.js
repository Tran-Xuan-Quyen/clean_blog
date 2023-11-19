const BlogPost = require('../models/BlogPost.js')
module.exports = async (req, res) => {
    // BlogPost.find({}, function(error, posts) {
    //     console.log(req.session);
    //     //console.log(posts);
    //     res.render('index', {blogposts: posts})
    // })
    console.log(BlogPost.getTableName());
    let sql = BlogPost.getAllData();
    let data = await BlogPost.queryDB(sql);
    if(!data) res.status(404).json({
        message: 'Error',
    })
    else {
        console.log('render home.js successfully');
        res.render('index', {blogposts: data})
    }
}

