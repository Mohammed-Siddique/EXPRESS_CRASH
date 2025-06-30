const express = require('express');
const path = require('path');
const port = process.env.PORT || 8080;

const app = express();

//Setup static path


let posts = [
    {id : 1, name : 'Post One'},
    {id : 2, name : 'Post Two'},
    {id : 3, name : 'Post Three'},
]

app.get('/api/posts', (req, res) => {
    res.status(200).json(posts);
})

app.listen(port, () => console.log(`Server is running on port ${port}`));