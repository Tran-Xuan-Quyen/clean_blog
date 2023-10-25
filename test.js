const mongoose = require('mongoose');
const BlogPost = require('./models/BlogPost');

mongoose.connect('mongodb://localhost:27017/test_my_database')

BlogPost.create({
    title: 'hello bạn',
    body: 'bạn khỏe không'
}, (error, blogpost) => {
    console.log(error, blogpost);
})
//tạo document
BlogPost.create({
    title: 'hi',
    body: 'nothing'
}, (error, blogpost) => {
    console.log(error, blogpost);
})
//find
BlogPost.find({}, (error, blogpost) => {
    console.log(error, blogpost);
})

//update
var id = "63b296a76a30bc41c34bfcf7";
BlogPost.findByIdAndUpdate(id, (error, blogpost) => {
    title: 'updated file'
}, (error, blogpost) => {
    console.log(error, blogpost);
})

const Blog = new BlogPost(
    {
        title: 'hi',
        body: 'nothing1234'
    }
);
Blog.save(Blog)
.then(() => {
    //console.log(Blog);
})
.catch((error) => {
    console.log(error);
})