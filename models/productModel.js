import mongoose from "mongoose";

const schema = mongoose.Schema(
    {
    title: {
        type:String,
        require:true
    },
    price: {
        type:Number,
        require:true
    },
    image01: {
        type:String,
        require:true
    },
    image02:{
        type:String,
    },
    linkImg:{
        type:String,
    },
    categorySlug: {
        type:String,
        require:true
    },
    color: {
        type:String,
        require:true
    },
    slug: {
        type:String,
    },
    size: {
        type:String,
        require:true
    },
    gioiTinh: {
        type:String,
        require:true
    },
    description:{
        type:String,
        default:'Sản phẩm mới của jemcovintage'
    }
},{timestamps:true})

export const productModel = mongoose.model('product',schema)