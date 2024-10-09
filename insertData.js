const {
    pool
   } = require("dataBase.js");
   async function insertUser() {
    const [email, firstname, lastname, age] = process.argv.slice(5);
    console.log(email, firstname, lastname, age);
}
insertUser();
   