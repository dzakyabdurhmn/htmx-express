const database = require("mysql2");

const connection = database.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "todolist",
});

module.exports = connection;
