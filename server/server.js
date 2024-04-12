require("dotenv").config();
const express = require("express");

const port = process.env.PORT || 3001
const app = express();


//get all rest
app.get("/api/v1/restaurants", (req, res) => {
    res.status(404).json({
        status: 'success',
        data: {
            restaurant:['kfc', 'krunk'],
        },
    })
    
})

//get a rest
app.get("/api/v1/restaurant/:id", (res,req) => {
    
})



app.listen(port, () => {
    console.log(`server is  up and listening ${port}`)
});