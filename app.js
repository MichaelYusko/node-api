// Main variables
const settings = require("./settings/application");
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
let db;

// Controllers
const indexController = require('./controllers/index');
const artistController = require("./controllers/artists");

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Register controllers
app.use("/", indexController);
app.use("/artists", artistController);


app.listen(settings.port, () => {
    console.log(`API running on ${settings.port} port`);
});
