import express from "express";
import users from "../config/models/users.js";

let posts = [
    { id : 1, title : 'Post One'},
    { id : 2, title : 'Post two'},
    { id : 3, title : 'Post Three'}
];

export const getAllPosts = (req, res) => {
    res.status(200).json(posts);
};

export const getSinglePost = (req, res, next) => {
    const id = parseInt(req.params.id);
    const post = posts.find((post) => post.id === id);

    if(!post) {
        const error = new Error(`A post with the id of ${id} was not found`);
        error.status = 404;
        return next(error);
    }
    res.status(200).json(post);
};

export const createPost = (req, res, next) => {
    const newPost = {
        id : posts.length + 1,
        title : req.body.title
    }

    if(!newPost.title) {
        const error = new Error(`Pelase include a title`);
        error.status = 404;
        return next(error);
    }
    posts.push(newPost);
    res.status(201).json(posts);
};

export const updatePost = (req, res, next) => {
    const id = parseInt(req.params.id);
    const post = posts.find((post) => post.id === id);

    if(!post) {
        const error = new Error(`A post with the id of ${id} was not found`);
        error.status = 404;
        return next(error);
    }
    post.title = req.body.title;
    res.status(200).json(posts);
};

export const deletePost = (req, res, next) => {
    const id = parseInt(req.params.id);
    const post = posts.find((post) => post.id === id);

    if(!post) {
        const error = new Error(`A post with the id of ${id} was not found`);
        error.status = 404;
        return next(error);
    }
    posts = posts.filter((post) => post.id !== id);
    res.status(200).json(posts);
};