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

const server = require("./src/app.js"); // Aquí está tu aplicación Express
const { conn } = require("./src/db.js"); 
const serverless = require("serverless-http");
require("dotenv").config();


// Sincroniza Sequelize solo en desarrollo
if (process.env.NODE_ENV !== "production") {
  conn.sync({ alter: true }).then(() => {
    console.log("Database synced");
  });
}

// Exporta la aplicación Express envuelta con serverless-http
module.exports.handler = serverless(server);