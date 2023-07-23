const models = require("../models");

const getAllProjects = (req, res) => {
  models.projects
    .findAll()
    .then(([projects]) => {
      res.status(200).send(projects);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};
const getProjectById = (req, res) => {
  models.projects
    .findById(req.params.id)
    .then(([projects]) => {
      if (projects.length === 0) {
        res.sendStatus(404);
      } else {
        res.send(projects[0]);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const createProject = (req, res) => {
  console.info(req.body);
  models.projects
    .create(req.body)
    .then(([projects]) => {
      res.status(201).send(projects);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const updateProject = (req, res) => {
  models.projects
    .update(req.params.id, req.body)
    .then(([projects]) => {
      res.send(projects[0]);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const deleteProject = (req, res) => {
  console.info(req.params.id);
  models.projects
    .delete(req.params.id)
    .then(() => {
      res.sendStatus(204);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  getAllProjects,
  getProjectById,
  createProject,
  updateProject,
  deleteProject,
};
