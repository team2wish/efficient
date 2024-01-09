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
    .where({ userName: userName })
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
  const salt = userData[0].salt;
  const dbHashedPW = userData[0].hash;
  const hashedPassword = makeHash(password, salt);
  // console.log("userName: ", userName);
  // console.log("password: ", password);
  // console.log("userData: ", userData);
  // console.log("salt: ", salt);
  // console.log("dbHashedPW: ", dbHashedPW);
  // console.log("hashedPassword: ", hashedPassword);
  // console.log("dbHashedPW === hashedPassword: ", dbHashedPW === hashedPassword);
  return [dbHashedPW === hashedPassword, [{ id: userData[0].id }]];
};

module.exports = {
  makeHash,
  selectedUserByName,
  selectedUserById,
  verifyPassword,
};
