const database = require('../config/database');
const CommonModel = require('./CommonModel.js');

class User extends CommonModel {
    getTableName() { return 'user'; }
    getALLData() {
        return `SELECT * FROM user `;
    }
    displaybyId(id) { 
        return `SELECT * FROM user where id = ${id} `;
    }
    findOnebyName(username){
        return `SELECT * FROM user where user_name = '${username}'`;
    }
}

module.exports = new User;
