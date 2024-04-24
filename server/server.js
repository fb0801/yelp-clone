require("dotenv").config();
const express = require("express");
const db = require("./db/index");

const port = process.env.PORT || 3001
const app = express();
const morgan = require('morgan');
const e = require("express");
const cors = require("cors")

app.use(cors())
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
        const results = await db.query("select * from restaurants where id =$1", [req.params.id,])
    
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
app.post("/api/v1/restaurants", async(req, res) => {

    try{
        const results = await db.query("INSERT INTO restaurants (name, location, price_range) values($1,$2,$3) returning *" , 
        [req.body.name,req.body.location, req.body.price_range]
        )

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

//update
app.put("/api/v1/restaurants/:id", async (res,req) => {
    try {
        const results = await db.query("UPDATE restaurants SET name = $1, location, $2, price_range = $3 where id = $4 returning *", 
        [req.body.name, req.body.location, req.body.price_range, req.params.id])

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

//delete
app.delete("/api/v1/restaurants/:id", async (res,req) => {
    try {
        const results = db.query("DELETE FROM restaurants where id =$1", [req.params.id])
        res.status(204).json({
            status: 'success',
        })
    }
    catch (err) {
        console.log(err)
    }
    


})



app.listen(port, () => {
    console.log(`server is  up and listening ${port}`)
});