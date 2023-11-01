const db = require("../model");
const productModel = require("../model/product.model");
const Products = db.products;

// MongoDB table manipulation command : 
//Product.save.. or remove()
//Product.find({title:'MI'}).then().catch()

//Retrive all product from the db

exports.showAll = (req,res)=> {

// const title =  req.query.title;
// var.condition = title ? { title : { $regex: new RegExp(title), $option : "i"}}

    Products.find({})
    .then(data =>{
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message:
                err.message || "some error occurred while retrieving Products."
        });
    })
};


// create & save a new prd
exports.create = (req, res) => {
   
    // validate req
    if (!req.body.title){
        res.ststus(400).send({ message: "Title can not be empty!"});
        return;
    }
    // create a pprd
    const product = new Products({
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
        model: req.body.model,
    });
// save ptd in the db
    product.save(product)
    .then(data => {
        res.send("Data saved to DB Sucessfully !")
        })
        .catch(err => {
            res.ststus(500).send ({
                message:
                err.message || "Some error occurred while creating the Product."
            });
            }); 
        };

        // Update a Products by the id in the request
exports.update = (req, res) => {
    if (!req.body) {
      return res.status(400).send({
        message: "Data to update can not be empty!"
      });
    }
  
    const id = req.params.id;
  
    Products.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot update Products with id=${id}. Maybe Products was not found!`
          });
        } else res.send({ message: "Products was updated successfully." });
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Products with id=" + id
        });
      });
  };
  
  // Delete a Products with the specified id in the request
  exports.delete = (req, res) => {
    const id = req.params.id;
  
    Products.findByIdAndRemove(id, { useFindAndModify: false })
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot delete Products with id=${id}. Maybe Products was not found!`
          });
        } else {
          res.send({
            message: "Products was deleted successfully!"
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Products with id=" + id
        });
      });
  };
  
  // Delete all Products from the database.
  exports.deleteAll = (req, res) => {
    Products.deleteMany({})
      .then(data => {
        res.send({
          message: `${data.deletedCount} Products were deleted successfully!`
        });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all Products."
        });
      });
  };