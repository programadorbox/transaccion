const {
    Pool
   } = require("pg");
   const pool = new Pool({
    user: 'node_user',
    host: 'localhost',
    database: 'db_node',
    password: 'node_password',
    port: 5432,
   });
   module.exports = {
    pool
   }
   