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
const getProjectsById = (req, res) => {
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

module.exports = {
  getAllProjects,
  getProjectsById,
};
