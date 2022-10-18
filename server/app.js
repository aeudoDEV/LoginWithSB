const pg = require('pg');
const express = require('express');
const cors = require('cors');

const client = new pg.Client({
    user:'postgres',
    host:'127.0.0.1',
    database:'banco',
    password:'senha',
    port:5432,
})

const app = express();
const port = 5432;

client.connect();

app.use(cors('*'))
app.use(express.json());


app.get('/', (req, res) => {
    res.status(200).send('Welcome');
})

app.post('/login', (req, res) => {
    try{
        const Email = req.body.email;
        const Senha = req.body.pass;

        
        return client.query(`INSERT INTO usuario (email,senha) VALUES(${Email},${Senha})`);
        
        /* res.json(console.log('deu god')) */
    }catch(err){
        return res.json({ error: err });
    }
})

app.listen(port, (req, res) => {
    console.log(`App running on ${port}.`)
})

client.query("select * from usuario")
.then(result => {
    const results = result.rows
    console.log(results)
})
.finally(()=>client.end())

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