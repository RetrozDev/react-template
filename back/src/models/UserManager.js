import AbstractManager from "./AbstractManager";

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "users" });
  }

  // To select all the users:
  async readAll() {
    const [users] = await this.database.query(`select * from ${this.table}`);
    return users;
  }

  // To select user by Id:
  async read(id) {
    const user = await this.database.query(
      `select * from ${this.table} where id = ?`,
      [id]
    );
    return user[0];
  }
}

export default UserManager;
