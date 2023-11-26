const database = require('../config/database');
const CommonModel = require('./CommonModel.js');

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
