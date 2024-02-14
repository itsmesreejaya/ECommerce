import { Collection } from "mongodb";
import EcSuppliers from "../../model/ec-suppliers";
import { client } from "../../services/mongodb";
import { Request,Response, Router } from "express";


let e_commerce = client.db("e_commerce");
let collection = e_commerce.collection("products");


const addProducts = async(req:Request, res:Response) =>{
    try{
        // const {product_name, product_category, product_price, product_stock, ...otherData} = req.body;
        
        // collection.insertOne({
        //     product_name:product_name,
        //     product_category:product_category,
        //     product_price:product_price,
        //     product_stock:product_stock,
        //     otherData: otherData,
        // })

        const products : Array<{product_name : string, product_category : string, product_price : number, stock : number, [key : string] : string|number}> = req.body;

       for (let product of products){
        if(!product.product_name)
        return res.status(404).json({error : "Empty Product field"});

        if(!product.product_category)
        return res.status(404).json({error : "Empty Product Category field"});
   
        if(!product.product_price)
        return res.status(404).json({error : "Empty Product Price field"});

        // if(!product.stock)
        // return res.status(404).json({error : "Empty Stock field"})
    }

    e_commerce.collection('products').insertMany(products);
 
    return res.status(200).json({message : "Products Have Been Added Successfully!"});
    // console.log("")

        // return res.send("products added");
    }
    catch(err){
        return res.status(404).json({error : err})   
    }
}

export default addProducts;