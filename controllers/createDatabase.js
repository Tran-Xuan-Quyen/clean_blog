const connection = require("../config/mysql");
const migration = require("../controllers/migration");
class createDatabase {
  async create(name) {
    const createdDatabaseQuery = `CREATE DATABASE IF NOT EXISTS ${name}`;
    await connection.query(createdDatabaseQuery, async (err) => {
      if (err) return 0;
       console.log("Database created successfully");
      await connection.query(`USE ${name}`, (err) => {
        if (err) return 0;
        else {
            console.log("Database selected");
        return 1;
        }
      });
    });
  }
}
module.exports = new createDatabase();
