// const Question = require('../models/Question')
// module.exports = (req, res) => {
//     Question.create(req.body)
//     .then((question) => {
//         console.log(question);
//         res.redirect('/');
//     })
//     .catch((error) => { console.error(error);})
// }
const Question = require('../models/Question');
const mysql = require('mysql');

var con = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'quyen123',
    database: 'blog_database',
});
con.connect((err) => { 
    if(err) throw err; 
    console.log('connected');
})


// let StoreQuestion = {};

// StoreQuestion.getDatatoTable = async (req, res) => {
    
//     let sql = Question.getAllData();
//     let data = await Question.queryDB(sql);

// }

module.exports = async (req, res) => {

    let data = req.body;
    data.created_id = 1;
    data.created_at = new Date();
    data.update_id = 1;
    data.update_at = new Date();
    data.delete_flag = 0;
    data.old_id = 0;
    console.log(data);
    const isAdd = await Question.insertDatatoDB(data, 'questions');
    if(!isAdd) res.status(404).json({
        message: 'Error',
    })
    else {
        console.log("store question successfully");
        res.redirect('/');
    }
    // res.status(200).json({
    //     success: true,
    //     message: 'Success',
    //     path: '/',
    // });
}