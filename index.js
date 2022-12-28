// express inicio das variaveis 
const express = require("express");
const app = express();
// express fim

// esta setando o motor de renderizaador de HTML - ejs
app.set("view engine", "ejs")

app.get("/",(req, res)=> {
     res.render("index.ejs")
});








app.listen(5959,()=> {
     console.log("app ativo")
});
