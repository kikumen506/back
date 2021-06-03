const express = require('express');
const cors = require('cors');
const { dbConnetion } = require('./db/dbConfig');
const morgan = require('morgan');
const csv = require('csvtojson');
require('dotenv').config();

const app = express();

function insertFacturas() {
    const converter = csv()
        .fromFile('./consumo-2019-01.csv')
            .then((json) => {
                var bills = json;
                const  Bill  = require('./models/bills')
                Bill.insertMany(bills)
        });
        console.log('Data.csv imported to the database')  
}
insertFacturas();

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