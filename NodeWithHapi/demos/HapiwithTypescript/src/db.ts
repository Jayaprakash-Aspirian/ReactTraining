const mysql = require("mysql");

export const dbConnect = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "AsdfGhjk@123",
  database: "hapidemo",
});

dbConnect.connect((err) => {
  if (err) {
    console.log("Error connecting to Db");
    return;
  }
  console.log("Connection established");
});
