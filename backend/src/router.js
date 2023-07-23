const express = require("express");
const projectsControllers = require("./controllers/projects.controllers");

const router = express.Router();

router.get("/projects", projectsControllers.getAllProjects);
router.get("/projects/:id", projectsControllers.getProjectById);
router.post("/projects", projectsControllers.createProject);
router.put("/projects/:id", projectsControllers.updateProject);
router.delete("/projects/:id", projectsControllers.deleteProject);

module.exports = router;
