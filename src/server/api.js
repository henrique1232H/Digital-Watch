const express = require("express");
const api = express();
const PORT = 3001;

const index = "../index.html"


api.get( "/" ,({res,req}) => {
    res.send(index)
})

api.listen(PORT, () => {
    console.log("Porta aberta")
})
