import db from "../config/db.js";

export const addSchool = (schoolData) => {
  return new Promise((resolve, reject) => {
    const { name, address, latitude, longitude } = schoolData;

    const query = `
      INSERT INTO schools (name, address, latitude, longitude)
      VALUES (?, ?, ?, ?)
    `;

    db.query(query, [name, address, latitude, longitude], (err, result) => {
      if (err) return reject(err);
      resolve(result);
    });
  });
};

export const getAllSchools = () => {
  return new Promise((resolve, reject) => {
    db.query("SELECT * FROM schools", (err, results) => {

      if (err) return reject(err);
      resolve(results);
      
    });
  });
};