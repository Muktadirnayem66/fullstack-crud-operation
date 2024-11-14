import mongoose from "mongoose";

const DataSchema = mongoose.Schema({
    productName: {
        type:String,
        required:true
    },
    productCode:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    unitPrice:{
        type:String,
        required:true
    },
    qty:{
        type:String,
        required:true
    },
    totalPrice:{
        type:String,
        required:true
    },
    createdDate:{
        type:Date,
        required:false,
        default:Date.now()
    }

},
{
    versionKey:false
}
)


export const productModel = mongoose.models.product || mongoose.model("product", DataSchema)