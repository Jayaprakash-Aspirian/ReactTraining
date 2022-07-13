const mysql      = require('mysql');

const dbConnect = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'AsdfGhjk@123',
    database : 'hapidemo'
})

dbConnect.connect((err) => {
    if(err){
      console.log('Error connecting to Db');
      return;
    }
    console.log('Connection established');
});

module.exports = dbConnect