const models = require("../models");

const getAllImagesByProjectId = (req, res) => {
  const projectId = parseInt(req.params.projectId, 10);
  models.images
    .findByProjectId(projectId)
    .then((images) => {
      res.status(200).send(images);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  getAllImagesByProjectId,
};
