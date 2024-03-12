const path = require('path');
const fs = require('fs');
const connection = require('../config/mysql');

class Migration {
    async executeMigrations() {
        const migrationDir = './migrations';
        fs.readdir(migrationDir, (err, files) => {
                if (err) return false;
                //Sort migration files by name
                files.sort();
                //Execute each migration script
                files.forEach((file) => {
                  const migrationScript = fs.readFileSync(path.join(migrationDir, file), 'utf8');
                  connection.query(migrationScript, async (err) => {
                    if (err)
                      return false;
                    console.log(`Migration script '${file}' executed successfully`);
                    return true;
                  });
                });
                // Close connection
                //connection.end();
    });
    }
}

module.exports = new Migration;