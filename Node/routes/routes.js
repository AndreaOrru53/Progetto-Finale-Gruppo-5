import express from "express";

import { 
    getAllFavouritesMovies,
    getFavouriteMovieById,
    createFavouriteMovie,
    updateFavouriteMovie,
    deleteFavouriteMovie
 } from "../controllers/node-controller.js";
 
const router = express.Router();
 
router.get('/favouritemovie', getAllFavouritesMovies);
router.get('/favouritemovie/:id', getFavouriteMovieById);
router.post('/favouritemovie', createFavouriteMovie);
router.put('/favouritemovie/:id', updateFavouriteMovie);
router.delete('/favouritemovie/:id', deleteFavouriteMovie);
 
export default router;