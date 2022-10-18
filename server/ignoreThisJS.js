

////////////////////////////////////////////////////////////////////

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
const cors = require('cors');

const app = express();
const port = 5432;

// Todos os "app.use" são configs, elas devem vir antes das rotas
// Removi a outra config pois ela configurava o cors, e vc já usa a lib do cors para configuração
app.use(cors('*'))
app.use(express.json());


// Sempre que você for responder precisa ter o 'RETURN' antes do res(response)
app.get('/', (req, res) => {
    return res.status(200).send('Welcome');
})

// Adicionei um try/catch para caso de erro seu servidor não pare de funcionar
app.post('/login', (req, res) => {
    try {
        const Email = req.body.email;
        const Senha = req.body.pass;
    
        return res.json({ ok : 'Deu certo' })
    } catch (err) {
        return res.json({ error: err })
    }
})

app.listen(port, (req, res) => {
    console.log(`App running on ${port}.`)
})