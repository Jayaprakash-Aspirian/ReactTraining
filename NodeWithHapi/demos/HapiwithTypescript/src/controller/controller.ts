import { dbConnect } from "../db";

export const getUsersdata = async function (request, reply) {
  const promise = new Promise((resolve, reject) => {
    dbConnect.query("SELECT * FROM people ", (err, res) => {
      if (err) {
        console.log(err);
      }
      resolve(res);
    });
  });
  return promise;
};

export const addUserdata = async function (request, reply) {
  const id = request.payload.id;
  const name = request.payload.name;
  const team = request.payload.team;
  const promise = new Promise((resolve, reject) => {
    dbConnect.query(
      "INSERT INTO people (id,name,team) VALUES (?,?,?)",
      [id, name, team],
      (err, res) => {
        if (err) {
          throw new Error(err);
        }
        resolve("Data Inserted Successfully");
      }
    );
  });
  return promise;
};

export const updateUserdata = async function (request, reply) {
  const id = request.payload.id;
  const name = request.payload.name;
  const team = request.payload.team;
  const promise = new Promise((resolve, reject) => {
    dbConnect.query(
      "UPDATE people SET name=?,team=?  WHERE id = ?",
      [name, team, id],
      (err, res) => {
        if (err) {
          throw new Error(err);
        }
        resolve("Data Updated Successfully");
      }
    );
  });
  return promise;
};

export const deleteUserdata = async function (request, reply) {
  const id = request.payload.id;
  const promise = new Promise((resolve, reject) => {
    dbConnect.query("DELETE from people WHERE id = ?", [id], (err, res) => {
      if (err) {
        throw new Error(err);
      }
      resolve("Data Deleted Successfully");
    });
  });
  return promise;
};


export const pageNotfound = function (request, reply) {
  return "404 Error! Page Not Found!";
};

