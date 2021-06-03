const express = require('express');
const cors = require('cors');
const { dbConnetion } = require('./db/dbConfig');
const morgan = require('morgan');
require('dotenv').config();

const app = express();

app.use(cors());

app.use(morgan('dev'));
app.use(express.json());

dbConnetion();

app.get('/', (req, res) => {
    res.json({
        ok: true,
        msg: 'route working'
    })
});


app.use('/api/bills', require('./routes/bills'));

app.listen( process.env.PORT, () => {
    console.log('Server running on port: ' +  process.env.PORT)
})