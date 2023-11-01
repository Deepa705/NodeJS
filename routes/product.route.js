const authJwt = require("../middlewares/authJwt");

module.exports = app => {
    const products = require("../controller/product.controller.js");

    //access REST API methods (GET,POST,PUT,DELETE)

    var router = require("express").Router();

    app.use(function(req,res,next){
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token,Orgin,Content-type, Accept"
        );
        next();
});

    // create a new prds
    // update products  

// delete products  

    router.get("/", [authJwt.verifyToken], products.showAll);
    router.post("/create",products.create);
    router.put("/update/:id", products.update);
    router.delete("/delete/:id", products.delete);
    app.use("/api/products",router);

};

