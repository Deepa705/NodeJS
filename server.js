const express = require("express");
const cors = require("cors");
const app = express(); // to access rest api
// access API URL
app.get("/", (req,res)=>{
    res.json({ message:"Welcome"});
});
// paese req of content-type - appln/json
app.use(express.json());
//set port, listen for reqs
require("./routes/product.route.js")(app);
require("./routes/cart.route.js")(app);
require("./routes/auth.routes.js")(app);
const PORT = process.env.PORT || 8089;
app.listen(PORT,()=>{
    console.log('server is running on port ${PORT}.'); // call back fn
});

const db = require("./model");

db.mongoose
    .connect(db.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("Connected to Database");
    })
    .catch(err => {
        console.log("Cannot connect to database!:", err);
        process.exit();
    })




