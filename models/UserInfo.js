const database = require('../config/database');
const CommonModel = require('./CommonModel.js');

class UserInfo extends CommonModel {
    getTableName() { return 'userInfo'; }
    getALLData() {
        return `SELECT * FROM userInfo`;
    }
    displaybyId(id) { 
        return `SELECT * FROM userInfo where id = ${id}`;
    }
    findOnebyName(user_id){
        return `SELECT * FROM userInfo where user_id = '${user_id}'`;
    }
    updateOnebyName(user_id, email, fullname, phoneNumber, image){
        return `UPDATE userInfo SET email = '${email}', fullname = '${fullname}', PhoneNumber = '${phoneNumber}', image = '${image}' where user_id = '${user_id}';`   }
}

module.exports = new UserInfo;
