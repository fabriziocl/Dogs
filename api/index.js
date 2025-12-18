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

// const server = require("./src/app.js"); 
// const { conn } = require("./src/db.js"); 
// const serverless = require("serverless-http");
// require("dotenv").config();


// if (process.env.NODE_ENV !== "production") {
//   conn.sync({ alter: true }).then(() => {
//     console.log("Database synced");
//   });
// }

// module.exports = serverless(server);

// const server = require("./src/app.js");
// const { conn } = require("./src/db.js");
// require("dotenv").config();

// const { PORT } = process.env;
// if (process.env.NODE_ENV !== "production") {
//   conn.sync({ alter: true }).then(() => {
//     console.log("DB synced");
//   });
// }

// module.exports = server;

const app = require('./src/app.js');

module.exports = app;
