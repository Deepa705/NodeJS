module.exports = app => {
    const carts = require("../controller/cart.controller.js");

   

    var router = require("express").Router();

 

    router.get("/", carts.showAll);
    app.use("/api/carts",router);

};