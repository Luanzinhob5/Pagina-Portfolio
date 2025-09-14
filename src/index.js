const express = require('express');

const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
    res.json({message: 'O teste inicial e esse'});
});

app.listen(PORT, () => {
    console.log(`Esta rodando na porta http${PORT}`);
});