const BlogPost = require('../models/BlogPost.js')
const User = require('../models/User.js')
const knex = require('../config/knex.js')
module.exports =  async (req, res) => {

    await knex.raw(BlogPost.displaybyId(req.params.id))
    .then(async (data) => {
        if(data[0]){
            console.log(data[0][0]);
            await knex.raw(User.displaybyId(data[0][0].user_id))
            .then((data1) => {
                if(!data1) throw err; 
                let detailPost = {};
                detailPost.image = data[0][0].image;
                detailPost.title = data[0][0].title;
                detailPost.body = data[0][0].body;
                detailPost.created_at = data[0][0].created_at;
                detailPost.username = data1[0][0].user_name;
                res.render('post', {detailPost});
            })
        }
        else res.status(404).json({
            success: false,
            message: 'invalid user'
        })
    })
    .catch(err => {
        res.status(404).json({
            success: false,
            message: 'error'
    })});
}