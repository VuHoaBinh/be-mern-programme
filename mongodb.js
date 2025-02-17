const { MongoClient } = require("mongodb");

// Replace the uri string with your connection string.
const uri =
  "mongodb+srv://MERNProject:EILxsxQcbZvlwvYI@mernproject.ynnv2.mongodb.net/product_test?retryWrites=true&w=majority&appName=MERNproject";

const client = new MongoClient(uri);

const createProduct = async (req, res, next) => {
    const newProduct = {
        name: req.body.name,
        price: req.body.price,
    };
    try {
        await client.connect();
        const db = client.db();
        const result = db.collection("products").insertOne(newProduct); // create 1 data to the collection products in the database
        console.log(result);
    } catch (error) {
        console.log(error);
    }
    client.close();
}

