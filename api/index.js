// const server = require('./src/app.js');
// const { conn } = require('./src/db.js');
// require('dotenv').config()
// const { PORT } = process.env

// // Syncing all the models at once.
// conn.sync({ alter: true }).then(() => {
//   server.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`); // eslint-disable-line no-console
//   });
// });

const server = require("./src/app.js");
const { conn } = require("./src/db.js");
const serverless = require("serverless-http");
require("dotenv").config();

const { PORT } = process.env;

// Sync de Sequelize (solo en desarrollo)
if (process.env.NODE_ENV !== "production") {
  conn.sync({ alter: true }).then(() => {
    server.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  });
}

module.exports.handler = serverless(server);