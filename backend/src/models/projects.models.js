class ProjectsModel {
  constructor({ table }) {
    this.table = table;
    this.database = null;
  }

  findAll() {
    return this.database.query(
      `SELECT * FROM ${this.table} ORDER BY publication_date DESC`
    );
  }

  findById(id) {
    return this.database.query(`SELECT * FROM ${this.table} WHERE id = ?`, [
      id,
    ]);
  }

  setDatabase(database) {
    this.database = database;
  }
}

module.exports = ProjectsModel;
