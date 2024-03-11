const databases = require('../config/database.js');
const CommonModel = require("./CommonModel.js")

class Questions extends CommonModel {
    getTableName() {
        return 'blog_post';
    }
    getAllData() {
        return `SELECT * FROM blog_post`;
    }
    displaybyId(id) {
        return `SELECT * FROM blog_post where id = ${id}`;
    }
}

module.exports = new Questions;
