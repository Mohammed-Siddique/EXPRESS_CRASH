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

//Get all posts
app.get('/api/posts', (req, res) => {
    // console.log(req.query)
    const limit = parseInt(req.query.limit);

    if (!isNaN(limit) && limit > 0) {
        return res.status(200).json(posts.slice(0, limit));
    }
    res.status(200).json(posts);
})

//Get single posts
app.get('/api/posts/:id', (req, res) => {
    // console.log(req.params.id)
    const id = parseInt(req.params.id);
    let post = posts.find((post) => post.id == id);

    if (!post) {
        return res.status(404).json({msg : `A post with id of ${id} was not found`});
    }
    res.status(200).json(post);
})

app.listen(port, () => console.log(`Server is running on port ${port}`));