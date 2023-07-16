const express = require('express')
const PORT = 5000;
const app = express()
const data = require('./data')
const { json } = require('body-parser');
const cors = require('cors');

app.use(cors());
app.use(json());

app.get('/products', (req, res) => {
    res.send(data)
})
app.patch('/products/:id', (req, res) => {
    const id = req.params.id;
    const item = data.find(item => item.id === Number(id));
    item.amount = req.body.data;
    res.send(item);
})

app.listen(PORT, () => {
    console.log(`API listening on port ${PORT}`)
})