class ProjectsModel {
  constructor({ table }) {
    this.table = table;
    this.database = null;
  }

  findAll() {
    return this.database.query(
      `SELECT id, name, summary, screenshot_desktop, screenshot_mobile FROM ${this.table} ORDER BY publication_date DESC`
    );
  }

  findById(id) {
    return this.database.query(
      `SELECT id, name, technologies, description, video_desktop, video_mobile FROM ${this.table} WHERE id = ?`,
      [id]
    );
  }

  create(project) {
    return this.database.query(
      `INSERT INTO ${this.table}(name, publication_date, technologies, summary, description, video_desktop, video_mobile, screenshot_desktop, screenshot_mobile) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        project.name,
        project.publication_date,
        project.technologies,
        project.summary,
        project.description,
        project.video_desktop,
        project.video_mobile,
        project.screenshot_desktop,
        project.screenshot_mobile,
      ]
    );
  }

  update(id, project) {
    return this.database.query(
      `UPDATE ${this.table} SET name = ?, publication_date = ?, technologies = ?, summary = ?, description = ?, video_desktop = ?, video_mobile = ?, screenshot_desktop = ?, screenshot_mobile = ? WHERE id = ?`,
      [
        project.name,
        project.publication_date,
        project.technologies,
        project.summary,
        project.description,
        project.video_desktop,
        project.video_mobile,
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
