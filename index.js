
const express = require("express");

const app = express();

const PORT = 8081;

app.use(express.json());

app.get("/",(res, req) => {
    res.status(200).json({ 
        massage: "server is up and running :-",
    })
})

app.listen(PORT, ()=>{
    console.log(`server is running ${PORT}`);
})
