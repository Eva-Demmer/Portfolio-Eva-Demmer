const express = require("express");
const projectsControllers = require("./controllers/projects.controllers");

const router = express.Router();

router.get("/projects", projectsControllers.getAllProjects);
router.get("/projects/:id", projectsControllers.getProjectsById);

module.exports = router;
