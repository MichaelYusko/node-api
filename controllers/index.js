const express = require("express");
const indexRoute = express.Router();


indexRoute.use(
    indexRoute.get("/", (req, resp) => {
        resp.send({status: "OK"});
    })
);

module.exports = indexRoute;
