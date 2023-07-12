const express = require('express');
const port = 3000;
const cors = require('cors');
const { json } = require('body-parser');
const { nanoid } = require('nanoid');
let data = require('./data');
const app = express();

app.use(cors());
app.use(json());

app.get('/notes', (req, res) => {
    res.send(data)
})

app.post('/notes', (req, res) => {
    const note = {id: nanoid(), type: req.body.type, content: req.body.content };
    data.push(note);
    return res.send(note);
})

app.patch('/notes/:id', (req, res) => {
    const id = req.params.id;
    const newContent = req.body.data;
    const item = data.find(item => item.id === id);
    item.content = newContent;
    console.log(item)
    return res.send(item);
})

app.delete('/notes/:id', (req, res) => {
    const id = req.params.id;
    const index = data.findIndex(el => el.id === id)
    if(index > -1) data.splice(index, 1)
    res.send(data)
})

app.listen(port, () => {
    console.log(`App running on port ${port}`)
})


