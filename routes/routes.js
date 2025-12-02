import express from "express";
import { 
    createPost, 
    deletePost, 
    getAllPosts, 
    getSinglePost, 
    updatePost
 } from "../postController/postController.js";

const router = express.Router();

// Get All Posts
router.get('/', getAllPosts );

// Get Single Posts
router.get('/:id', getSinglePost );

// Create Post
router.post('/', createPost );

// Update Post
router.put('/:id', updatePost );


// Delete Post
router.delete('/:id', deletePost );


export default router;