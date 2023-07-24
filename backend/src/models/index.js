const mysql = require("mysql2/promise");
require("dotenv").config();

const { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME, DB_PORT } = process.env;

const pool = mysql.createPool({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
  port: DB_PORT,
});

pool.getConnection((err, connection) => {
  if (err) {
    console.error("Error connecting to database:", err);
  } else {
    console.info("Connected to database");
    connection.release();
  }
});

const models = {};
const tableProjects = "projects";
const tableImages = "images";

const ProjectsModel = require("./projects.models");
const ImagesModel = require("./images.models");

models.projects = new ProjectsModel({ table: tableProjects });
models.projects.setDatabase(pool);

models.images = new ImagesModel({ table: tableImages });
models.images.setDatabase(pool);

module.exports = models;
