class ImagesModel {
  constructor({ table }) {
    this.table = table;
    this.database = null;
  }

  findByProjectId(projectId) {
    return this.database.query(
      `SELECT * FROM ${this.table} WHERE project_id = ?`,
      [projectId]
    );
  }

  setDatabase(database) {
    this.database = database;
  }
}

module.exports = ImagesModel;
