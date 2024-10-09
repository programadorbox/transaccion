const { pool } = require("../dataBase.js");

async function insertUser() {
  const [email, firstname, lastname, age] = process.argv.slice(4);

  try {
    const res = await pool.query(
      "INSERT INTO users (email, firstname, lastname, age) VALUES ($1, $2, $3, $4)",
      [email, firstname, lastname, age]
    );
    console.log(`Se ha agregado el usuario ${firstname}`);
  } catch (error) {
    console.error(`Error al insertar usuario: ${error.message}`);
  }
}

insertUser();
   