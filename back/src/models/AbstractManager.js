const database = require("../../database/client");

class AbstractManager {
  constructor({ table }) {
    this.table = table;

    this.database = database;
  }
}

module.exports = AbstractManager;
