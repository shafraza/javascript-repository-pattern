class UserRepository {
  constructor(db) {
    this.db = db;
  }

  async getById(id) {
    const query = 'SELECT * FROM users WHERE id = ?';
    const result = await this.db.query(query, [id]);
    return result[0];
  }

  async getAll() {
    const query = 'SELECT * FROM users';
    const result = await this.db.query(query);
    return result;
  }

  async create(user) {
    const query = 'INSERT INTO users (name, email) VALUES (?, ?)';
    const result = await this.db.query(query, [user.name, user.email]);
    return result.insertId;
  }

  async update(id, user) {
    const query = 'UPDATE users SET name = ?, email = ? WHERE id = ?';
    const result = await this.db.query(query, [user.name, user.email, id]);
    return result.affectedRows === 1;
  }

  async delete(id) {
    const query = 'DELETE FROM users WHERE id = ?';
    const result = await this.db.query(query, [id]);
    return result.affectedRows === 1;
  }
}
