// Application settings

require("dotenv").config();

const settings = {
    port: process.env.APPLICATION_PORT,
    dbUri: process.env.DB_URIs
};


module.exports = settings;
