require("dotenv").config();
const express = require("express");

const port = process.env.PORT || 3001
const app = express();

//middleware
app.use((req, res, next) => {
    console.log('im middleware')
})


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

//create restaurant
app.create("/api/v1/restaurants", (req, res) => {


})



app.listen(port, () => {
    console.log(`server is  up and listening ${port}`)
});