"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = __importDefault(require("pg"));
const client = new pg_1.default.Client({
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: 'AsdfGhjk@123',
    database: 'hapidemo'
});
client.connect(err => {
    if (err) {
        console.error('connection error', err.stack);
    }
    else {
        console.log('connected');
    }
});
exports.default = client;
