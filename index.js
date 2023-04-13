const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

const Port = process.env.Port || 5000;
const productsCollection = require("./Data/product.json")
app.get('/', (req, res) => {
    res.send("my server running Yaaaaaaa")
})

app.get('/allProducts', (req, res) => {
    res.send(productsCollection)
})

app.get('/product/:id', (req, res) => {
    const id = req.params.id;
    const getSingleItem = productsCollection?.find(p => p.id == id);
    if (!getSingleItem) {
        res.send("No item available")
    }
    res.send(getSingleItem);
})

app.get("/category/:name", (req, res) => {
    const name = req.params.name;
    const getCategory = productsCollection.filter(p => p.category == name);
    res.send(getCategory);
})

app.listen(Port, () => {
    console.log("server practice is running", Port);
});
//Export the Express API
module.exports = app;