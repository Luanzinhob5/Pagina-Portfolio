const express = require('express');
const connectDB = require('./db/connect.js')

const app = express();

const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;

app.get('/', (req, res) => {
    res.json({message: 'O teste inicial e esse'});
});

app.listen(PORT, () => {
    console.log(`Esta rodando na porta http${PORT}`);
});