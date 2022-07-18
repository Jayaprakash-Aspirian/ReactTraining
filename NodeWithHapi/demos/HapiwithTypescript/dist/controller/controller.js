"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pageNotfound = exports.deleteUserdata = exports.updateUserdata = exports.addUserdata = exports.getUsersdata = void 0;
const db_1 = require("../db");
const getUsersdata = function (request, reply) {
    return __awaiter(this, void 0, void 0, function* () {
        const promise = new Promise((resolve, reject) => {
            db_1.dbConnect.query("SELECT * FROM people ", (err, res) => {
                if (err) {
                    console.log(err);
                }
                resolve(res);
            });
        });
        return promise;
    });
};
exports.getUsersdata = getUsersdata;
const addUserdata = function (request, reply) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = request.payload.id;
        const name = request.payload.name;
        const team = request.payload.team;
        const promise = new Promise((resolve, reject) => {
            db_1.dbConnect.query("INSERT INTO people (id,name,team) VALUES (?,?,?)", [id, name, team], (err, res) => {
                if (err) {
                    throw new Error(err);
                }
                resolve("Data Inserted Successfully");
            });
        });
        return promise;
    });
};
exports.addUserdata = addUserdata;
const updateUserdata = function (request, reply) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = request.payload.id;
        const name = request.payload.name;
        const team = request.payload.team;
        const promise = new Promise((resolve, reject) => {
            db_1.dbConnect.query("UPDATE people SET name=?,team=?  WHERE id = ?", [name, team, id], (err, res) => {
                if (err) {
                    throw new Error(err);
                }
                resolve("Data Updated Successfully");
            });
        });
        return promise;
    });
};
exports.updateUserdata = updateUserdata;
const deleteUserdata = function (request, reply) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = request.payload.id;
        const promise = new Promise((resolve, reject) => {
            db_1.dbConnect.query("DELETE from people WHERE id = ?", [id], (err, res) => {
                if (err) {
                    throw new Error(err);
                }
                resolve("Data Deleted Successfully");
            });
        });
        return promise;
    });
};
exports.deleteUserdata = deleteUserdata;
const pageNotfound = function (request, reply) {
    return "404 Error! Page Not Found!";
};
exports.pageNotfound = pageNotfound;
//# sourceMappingURL=controller.js.map