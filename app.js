const express = require('express');
const res = require('express/lib/response');
const app = express()
const port = 3000
const year = new Date().getFullYear()
const lineup = require("./music.js")
const toolkit = require("./toolkit.js")



// Set EJS as templating engine
app.set('view engine', 'ejs');

//Loads static files
app.use(express.static(__dirname + '/public'));


app.get('/', (req, res) => {
  res.render("home", {year: year, title: "home"})
});

app.get('/music', (req, res) => {  
    res.render("music", {year: year, lineup: lineup.lineup, title: "music"})  
})  


app.get('/toolkit', (req, res) => {
  res.render("toolkit", {year: year, toolkit: toolkit.toolkit, title: "toolkit"})
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


