import mysql from "mysql2/promise";

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "abc@khan",
  database: "sample_db",
});

db.connect((err) => {
  if (err) {
    console.log("error is", err);
  } else {
    console.log("connected !!!!");
  }
});
export default db;
