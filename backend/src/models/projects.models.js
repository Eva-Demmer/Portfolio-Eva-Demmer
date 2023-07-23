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

  create(project) {
    return this.database.query(
      `INSERT INTO ${this.table}(name, publication_date, technologies, summary, description, screenshot_desktop, screenshot_mobile) VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [
        project.name,
        project.publication_date,
        project.technologies,
        project.summary,
        project.description,
        project.screenshot_desktop,
        project.screenshot_mobile,
      ]
    );
  }

  update(id, project) {
    return this.database.query(
      `UPDATE ${this.table} SET name = ?, publication_date = ?, technologies = ?, summary = ?, description = ?, screenshot_desktop, screenshot_mobile = ? WHERE id = ?`,
      [
        project.name,
        project.publication_date,
        project.technologies,
        project.summary,
        project.description,
        project.screenshot_desktop,
        project.screenshot_mobile,
        id,
      ]
    );
  }

  delete(id) {
    return this.database.query(`DELETE FROM ${this.table} WHERE id = ?`, [id]);
  }

  setDatabase(database) {
    this.database = database;
  }
}

module.exports = ProjectsModel;
