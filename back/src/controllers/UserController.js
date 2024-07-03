const tables = require("../tables");
const browse = async (req, res, next) => {
  try {
    const users = await tables.users.readAll();
    res.json(users);
  } catch (err) {
    next(err);
  }
};

const read = async (req, res, next) => {
  try {
    const user = await tables.users.read(req.params.id);
    if (user === null) {
      res.sendStatus(404);
    } else {
      res.json(user);
    }
  } catch (err) {
    next(err);
  }
};

module.exports = {
  browse,
  read,
};
