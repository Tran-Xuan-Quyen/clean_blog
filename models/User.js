
const mysql = require('mysql');
const CommonModel = require('./CommonModel.js');

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

class User extends CommonModel {
    getTableName() { return 'user'; }
    getALLData() {
        return `SELECT * FROM user where delete_flag = 0`;
    }
    displaybyId(id) { 
        return `SELECT * FROM user where id = ${id} and delete_flag = 0`;
    }
    findOnebyName(username){
        return `SELECT * FROM user where user_name = '${username}'`;
    }
}

module.exports = new User;

// const mongoose = require('mongoose')
// const Schema = mongoose.Schema;
// const bcrypt = require('bcrypt')
// const UserSchema = new Schema({
//     username: {
//         type: String,
//         required: true,
//         unique: true
//     },
//     password: {
//         type: String,
//         required: true
//     }
// });
// UserSchema.pre('save', function(next) {
//     const user = this
//     bcrypt.hash(user.password, 10, (error, hash) => {
//         user.password = hash
//         next()
//     })
// })

// const User = mongoose.model('User', UserSchema);
// module.exports = User;
