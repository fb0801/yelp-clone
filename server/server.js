require("dotenv").config();
const express = require("express");
const db = require("./db/index");

const port = process.env.PORT || 3001
const app = express();
const morgan = require('morgan')



app.use(express.json())

//get all rest
app.get("/api/v1/restaurants", async (req, res) => {

    try{
        const results = await db.query("select * from restaurants")
         console.log(results)
    res.status(404).json({
        status: 'success',
        results: results.rows.length,
        data: {
            restaurants: results.rows,
        },
    })


    } catch (err) {
        console.log(err)
    }
})

//get a rest
app.get("/api/v1/restaurants/:id", async (res,req) => {

    try {
        const results = await db.query(`select * from restaurants where id =${req.params.id}`)
    
    res.status(200).json({
        status: 'success',
        
        data: {
            restaurants: results.rows[0],
        },

    })
    } 
    catch (err) {
        console.log(err)
    }

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