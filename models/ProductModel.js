
const Mongoose = require("mongoose");
const ProductShema = Mongoose.Schema ({
    title:{
        type:String,
        required:[true,'Title is required'],
        minlenght:[10, 'Minimun lenght of Title 10 characters'],
        maxlenght:[10, 'Maximum lenght of Title 100 characters']
    },
    description: {
        type:String,
        require:[true,' Description is required']
    },
    price:{
        type:Number,
        required:[true,'Price is required']
    },
    image:{
        type:String,
        required:[true,'Image is required']
    },
}, {
    timestamps :true
});
const ProductModel =  new Mongoose.model("Product",ProductShema);
module.exports=ProductModel;