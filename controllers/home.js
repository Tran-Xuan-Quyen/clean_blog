const BlogPost = require('../models/BlogPost.js')
module.exports = async (req, res) => {

    console.log(req.headers.token);
    console.log(BlogPost.getTableName());
    let sql = BlogPost.getAllData();
    let data = await BlogPost.queryDB(sql);
    if(!data) res.status(404).json({
        message: 'Error',
    })
    else {
       // console.log('render home.js successfully');
        res.render('index', {blogposts: data})
    }
}

