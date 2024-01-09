const knex = require("../../knex");
const crypto = require("crypto");

const makeHash = (password, salt) => {
  const saltAndPw = salt + password;
  const hash = crypto.createHash("sha256");
  const hashedPassword = hash.update(saltAndPw).digest("hex");

  return hashedPassword;
};

const selectedUserByName = async (userName) => {
  return await knex("users")
    .where({ user_name: userName })
    .select()
    .then((data) => data);
};

const selectedUserById = async (id) => {
  return await knex("users")
    .where({ id: id })
    .select()
    .then((data) => data);
};

const verifyPassword = async (userName, password) => {
  const userData = await selectedUserByName(userName);
  const salt = userData[0].pw_salt;
  const dbHashedPW = userData[0].pw_hash;
  const hashedPassword = makeHash(password, salt);
  return [dbHashedPW === hashedPassword, [{ id: userData[0].id }]];
};

module.exports = {
  makeHash,
  selectedUserByName,
  selectedUserById,
  verifyPassword,
};
