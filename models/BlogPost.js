const database = require('../config/database.js')
const CommonModel = require("./CommonModel.js")

class BlogPost extends CommonModel {
    getTableName() {
        return 'blog_post';
    }
    getAllData() {
        return `SELECT * FROM blog_post where delete_flag = 0`;
    }
    displaybyId(id) {
        return `SELECT * FROM blog_post where id = ${id} and delete_flag = 0`;
    }
    convertToDate(date) {
        let dateParts = date.split("/");
        let dateObject = new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0]);
        return dateObject;
    }
    
}

module.exports = new BlogPost;






// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;
// const BlogPostSchema = new Schema({
//     title: String,
//     body: String,
//     username: string,
//     datePosted: {
//         type: Date,
//         default: new Date()
//     },
//     image: String
// })
// const BlogPost = mongoose.model('BlogPost', BlogPostSchema);
// module.exports = BlogPost;