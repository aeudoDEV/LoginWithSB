const Pool = require('pg');
const pool = new Pool({
    user:'postgres',
    host:'127.0.0.1',
    database:'banco',
    password:'senha',
    port:5432,

})