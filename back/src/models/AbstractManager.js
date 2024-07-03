import database from "../../database/client";

class AbstractManager {
  constructor({ table }) {
    this.table = table;

    this.database = database;
  }
}

export default AbstractManager;
