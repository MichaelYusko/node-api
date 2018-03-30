const express = require("express");
const artistRouter = express.Router();

artistRouter.use(
    artistRouter.get("/", (req, resp) => {
       resp.send({message: "index artists"});
    })
);


module.exports = artistRouter;
