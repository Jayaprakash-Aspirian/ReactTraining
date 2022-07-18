import client from "../db";
import hapi from "@hapi/hapi"
import { AddData, DeleteData, UpdateData } from "../interfaces";

export const getUsersdata = async function (request:hapi.Request, reply:hapi.ResponseToolkit) {
  const promise = new Promise((resolve, reject) => {
    client.query("SELECT * FROM Students ", (err:any, res) => {
      if (err) {
        console.log(err);
      }
      resolve(res);
    });
  });
  return promise;
};


export const addUserdata = async function (request:AddData, reply:hapi.ResponseToolkit) {
  const id = request.payload.id;
  const name = request.payload.name;
  const dept = request.payload.dept;
  const promise = new Promise((resolve, reject) => {
    client.query(
      "INSERT INTO Students (id,name,dept) VALUES ($1,$2,$3)",
      [id, name, dept],
      (err :any, res) => {
        if (err ) {
          throw new Error(err);
        }
        resolve("Data Inserted Successfully");
      }
    );
  });
  return promise;
};

export const updateUserdata = async function (request :UpdateData, reply :hapi.ResponseToolkit) {
  const id = request.payload.id;
  const name = request.payload.name;
  const dept = request.payload.dept;
  const promise = new Promise((resolve, reject) => {
    client.query(
      "UPDATE Students SET name=$1,dept=$2 WHERE id = $3",
      [name,dept, id],
      (err :any, res) => {
        if (err) {
          throw new Error(err);
        }
        resolve("Data Updated Successfully");
      }
    );
  });
  return promise;
};

export const deleteUserdata = async function (request :DeleteData, reply:hapi.ResponseToolkit ) {
  const id = request.payload.id;
  const promise = new Promise((resolve, reject) => {
    client.query("DELETE from Students WHERE id =$1", [id], (err :any, res) => {
      if (err) {
        throw new Error(err);
      }
      resolve("Data Deleted Successfully");
    });
  });
  return promise;
};


export const pageNotfound = function (request :hapi.Request, reply :hapi.ResponseToolkit) {
  return "404 Error! Page Not Found!";
};

