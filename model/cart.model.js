module.exports = mongoose => {
    var schema = mongoose.Schema(
        {
            ProductID : Number,
            Quantity : Number,
            TotalPrice : Number
        }
    );
    schema.method("toJSON", function(){
        const {__v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });
    const Cart = mongoose.model("cart", schema);
    return Cart;
}