const databases = require('../config/database.js');
const CommonModel = require("./CommonModel.js")

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
