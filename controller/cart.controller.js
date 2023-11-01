const db = require("../model");
const Carts = db.carts;
exports.showAll = (req,res)=> {
Carts.find({})
    .then(data =>{
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message:
                err.message || "some error occurred while retrieving Carts."
        });
    })
};