require("dotenv").config();
const express = require("express");

const port = process.env.PORT || 3001
const app = express();



app.get("/getRestaurants", (req, res) => {
    
})




app.listen(port, () => {
    console.log(`server is  up and listening ${port}`)
});