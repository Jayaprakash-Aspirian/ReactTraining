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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pageNotfound = exports.deleteUserdata = exports.updateUserdata = exports.addUserdata = exports.getUsersdata = void 0;
const db_1 = __importDefault(require("../db"));
const getUsersdata = function (request, reply) {
    return __awaiter(this, void 0, void 0, function* () {
        const promise = new Promise((resolve, reject) => {
            db_1.default.query("SELECT * FROM Students ", (err, res) => {
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
        const dept = request.payload.dept;
        const promise = new Promise((resolve, reject) => {
            db_1.default.query("INSERT INTO Students (id,name,dept) VALUES ($1,$2,$3)", [id, name, dept], (err, res) => {
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
        const dept = request.payload.dept;
        const promise = new Promise((resolve, reject) => {
            db_1.default.query("UPDATE Students SET name=$1,dept=$2 WHERE id = $3", [name, dept, id], (err, res) => {
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
            db_1.default.query("DELETE from Students WHERE id =$1", [id], (err, res) => {
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
