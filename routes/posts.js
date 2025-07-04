import express from 'express';

const router = express.Router();

let posts = [
    {id : 1, name : 'Post One'},
    {id : 2, name : 'Post Two'},
    {id : 3, name : 'Post Three'},
]

//Get all posts
router.get('/', (req, res) => {
    // console.log(req.query)
    const limit = parseInt(req.query.limit);

    if (!isNaN(limit) && limit > 0) {
        return res.status(200).json(posts.slice(0, limit));
    }
    res.status(200).json(posts);
})

//Get single posts
router.get('/:id', (req, res) => {
    // console.log(req.params.id)
    const id = parseInt(req.params.id);
    const post = posts.find((post) => post.id == id);

    if (!post) {
        return res.status(404).json({msg : `A post with id of ${id} was not found`});
    }
    res.status(200).json(post);
});

//Create posts
// router.post('/', (req, res) => {
//     console.log(req.body);

//     res.status(201).json(posts);
// });

// module.exports = router;
export default router;

