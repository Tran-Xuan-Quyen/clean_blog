// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;
// const QuestionSchema = new Schema({
//     user_id: String,
//     EmailAddress: String,
//     PhoneNumber: String,
//     Message: String,
//     DatePosted: {
//         type: Date,
//         default: new Date(),
//     }
// })
// const Question = mongoose.model('Question', QuestionSchema);
// module.exports = Question;

const mysql = require('mysql');
const CommonModel = require("./CommonModel.js")

var con = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'miinh23041998@',
    database: 'blog_database',
});
con.connect((err) => { 
    if(err) throw err; 
    console.log('connected');
})

class Questions extends CommonModel {
    getTableName() {
        return 'blog_post';
    }
    getAllData() {
        return `SELECT * FROM blog_post where deleted_flag = 0`;
    }
    displaybyId(id) {
        return `SELECT * FROM blog_post where id = ${id} and delete_flag = 0`;
    }
}

module.exports = new Questions;
