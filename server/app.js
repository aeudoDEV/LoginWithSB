/* const pg = require('pg');

const client = new pg.Client({
    user:'postgres',
    host:'127.0.0.1',
    database:'banco',
    password:'senha',
    port:5432,
})

client.connect();


client.query("select * from usuario")
.then(result => {
    const results = result.rows
    console.log(results)
})
.finally(()=>client.end()) */

const express = require('express');
const app = express();
const port = 5432;
const cors = require('cors');
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.get('/', (req, res) => {
    res.status(200).send('Welcome');
})
app.use(express.json());
app.use(cors())
app.post('/login', (req, res) => {
    const Email = req.body.email;
    const Senha = req.body.pass;

    return res.json({ ok : 'Deu certo' })
})

app.listen(port, (req, res) => {
    console.log(`App running on ${port}.`)
})