"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbConnect = void 0;
const mysql = require("mysql");
exports.dbConnect = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "AsdfGhjk@123",
    database: "hapidemo",
});
exports.dbConnect.connect((err) => {
    if (err) {
        console.log("Error connecting to Db");
        return;
    }
    console.log("Connection established");
});
//# sourceMappingURL=db.js.map