require("dotenv").config();
const express = require("express");
const db = require("./db/index");

const port = process.env.PORT || 3001
const app = express();
const morgan = require('morgan')



app.use(express.json())

//get all rest
app.get("/api/v1/restaurants", async (req, res) => {

    const results = await db.query("select * from restaurants")
    console.log(results)
    res.status(404).json({
        status: 'success',
        data: {
            restaurant:['kfc', 'krunk'],
        },
    })
    
})

//get a rest
app.get("/api/v1/restaurants/:id", (res,req) => {

})

//create restaurant
app.post("/api/v1/restaurants", (req, res) => {


})

//update
app.put("/api/v1/restaurants/:id", (res,req) => {

})

//delete
app.delete("/api/v1/restaurants/:id", (res,req) => {
    res.status(204).json({
        status: 'success',
    })
})



app.listen(port, () => {
    console.log(`server is  up and listening ${port}`)
});