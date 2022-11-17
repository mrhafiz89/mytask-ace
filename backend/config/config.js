module.exports = {
  HOST: "127.0.0.1",
  USER: "apzapps",
  PASSWORD: "apzapps",
  DB: "mytask",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },

  /*HOST: "127.0.0.1",
  USER: "root",
  PASSWORD: "root",
  DB: "mytask",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  }*/
};
