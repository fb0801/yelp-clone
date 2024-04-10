
const express = require("express");

const port = 3005
const app = express();


app.listen(port, () => {
    console.log(`server is  up and listening ${port}`)
});