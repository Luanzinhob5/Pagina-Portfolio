const express = require('express');
const connectDB = require('./db/connect')
require('dotenv').config()

const app = express();

const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;

app.get('/', (req, res) => {
    res.json({message: 'O teste inicial e esse'});
});


const startServer = async () => {
    try {
        //conexao com a DB - MongoDB
        await connectDB(MONGO_URI);

        app.listen(PORT, () => {
        console.log(`Esta rodando na porta ${PORT}`);
    });

    } catch (error){
        console.error('Falha ao iniciar o servidor', error);
    }
};

startServer();