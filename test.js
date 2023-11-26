// var mysql = require('mysql');
// var express = require('express');
// var app = express();
// app.listen(4000, function(req, res) {
//     console.log('listening on 3000');
// }
// )
// var con = mysql.createConnection({
//     host: '127.0.0.1',
//     user: 'root',
//     password: 'miinh23041998@',
//     database: 'blog_database',
// })
// con.connect(function(err){
//     if(err) throw err;
//     console.log('connected');
// })

// var sql1 = "DROP TABLE IF EXISTS authen";
// con.query(sql1, function(err,results) {
//     if(err) throw err;
//     console.log('done');
// })

// const bcrypt = require('bcrypt');
// bcrypt.hash('23', 10).then(function(results) { console.log(results)});
// bcrypt.hash('23', 10).then(function(results) { console.log(results)});

// const express = require('express')
// const morgan = require('morgan')
// const handlebars = require('express-handlebars')
// const app = express()
// const port = 3000

// app.use(morgan('combined'))
// app.engine('handlebars', handlebars.ExpressHandlebarsandlebars())

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.listen(port, () => {
//   console.log(Example app listening on port `${port}`)
// })

const path = require('path');
const express = require('express')
const app = express()
const http = require('http');
const port = 3000;

app.get('/',(req,res) => {
    res.send("Something")
})

app.get('/home',(req,res) => {
    res.send("Home page")
})

app.get('/search',(req,res) => {
    res.send("Search Page")
})

app.get('/pdf', (req,res) => {
    res.sendFile(path.resolve(__dirname, './views/index.html'))
})

app.listen(port, () =>{
    console.log(`App listening on port ${port}`)
})